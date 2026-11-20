/*
 * Video logic: one registry of players, one automatic sequence, one modal.
 * Rules: never two videos at once; the sequence is driven by the real `ended`
 * event and dies on any user interaction.
 */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopQuery = window.matchMedia('(min-width: 768px)');

const registry = new Map(); // id -> { id, video, wrap }
const prefs = { muted: true }; // mute choice made by the user, carried over

/* ---------- modal (YouTube embeds) ---------- */

const modal = { el: null, frame: null };

const openVideoModal = (src, title) => {
  stopSequence('modal opened');
  pauseAllVideos();
  modal.frame.innerHTML = ModalIframeComponent(src, title);
  modal.el.showModal();
};

const closeVideoModal = () => {
  if (modal.el.open) modal.el.close();
};

const initModal = () => {
  document.body.insertAdjacentHTML('beforeend', VideoModalComponent());
  modal.el = document.querySelector('.video-modal');
  modal.frame = modal.el.querySelector('.video-modal__frame');
  modal.el
    .querySelector('.video-modal__close')
    .addEventListener('click', closeVideoModal);
  // click on the backdrop
  modal.el.addEventListener('click', ev => {
    if (ev.target === modal.el) closeVideoModal();
  });
  // removing the iframe stops the playback, however the dialog was closed
  modal.el.addEventListener('close', () => (modal.frame.innerHTML = ''));

  document.addEventListener('click', ev => {
    const link = ev.target.closest('a[data-modal]');
    if (!link || !desktopQuery.matches || ev.metaKey || ev.ctrlKey) return;
    ev.preventDefault(); // below 768px the link opens in a new tab instead
    openVideoModal(
      link.href,
      link.querySelector('.card__title')?.textContent ?? ''
    );
  });
};

/* ---------- players ---------- */

const pauseAllVideos = except =>
  registry.forEach(p => p.video !== except && !p.video.paused && p.video.pause());

const setState = (p, state) => {
  p.wrap.dataset.state = state;
  p.wrap.querySelector('.player__msg').hidden = state !== 'error';
};

const tryPlay = async video => {
  video.muted = prefs.muted;
  try {
    await video.play();
    return true;
  } catch (err) {
    // sound not allowed without interaction: retry muted once
    if (err.name === 'NotAllowedError' && !video.muted) {
      video.muted = true;
      try {
        await video.play();
        return true;
      } catch (_) {}
    }
    return false; // blocked or interrupted: the user starts it with controls
  }
};

const initPlayer = wrap => {
  const id = wrap.dataset.player;
  const cfg = players[id];
  const video = wrap.querySelector('video');
  const p = { id, video, wrap, cfg };
  registry.set(id, p);

  video.addEventListener('play', () => {
    setState(p, 'playing');
    pauseAllVideos(video);
    closeVideoModal();
  });
  video.addEventListener('pause', () => {
    if (video.ended || video.error) return; // `pause` fires right before `ended`
    setState(p, 'paused');
    if (currentStep() === id) stopSequence('video paused');
  });
  video.addEventListener('seeking', () => {
    if (currentStep() === id) stopSequence('seek');
  });
  video.addEventListener('volumechange', () => {
    if (!video.paused || video.currentTime > 0) prefs.muted = video.muted;
  });
  video.addEventListener('error', () => {
    setState(p, 'error');
    if (currentStep() === id) stopSequence('video error');
  });
  video.addEventListener('ended', () => {
    setState(p, 'ended');
    if (cfg.endedPoster) {
      video.hidden = true;
      wrap.querySelector('.player__end').hidden = false;
    }
    onEnded(id);
  });
  wrap
    .querySelector('.player__play, .player__cover')
    .addEventListener('click', () => tryPlay(video));
};

/* ---------- sequence ---------- */

const seq = { steps: [], index: -1, active: false, abort: null, io: null };

const currentStep = () => (seq.active ? seq.steps[seq.index] : null);

const stopSequence = reason => {
  if (!seq.active) return;
  seq.active = false;
  seq.abort?.abort(); // removes every interaction listener at once
  seq.io?.disconnect();
  seq.io = seq.abort = null;
  console.info(`[sequence] stopped: ${reason}`);
};

const openAccordionOf = el => {
  const acc = el.closest('.accordion');
  if (acc && acc.dataset.open !== 'true') setAccordion(acc, true);
};

const whenVisible = (el, cb) => {
  seq.io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      seq.io.disconnect();
      seq.io = null;
      cb();
    },
    { threshold: 0.6 }
  );
  seq.io.observe(el);
};

const playStep = async index => {
  if (!seq.active) return;
  seq.index = index;
  const p = registry.get(seq.steps[index]);
  const start = async () => {
    if (!seq.active || currentStep() !== p.id) return;
    if (!(await tryPlay(p.video)) && currentStep() === p.id) {
      stopSequence('play() rejected');
    }
  };
  if (index === 0) return start();
  openAccordionOf(p.wrap);
  (p.wrap.closest('[data-scroll-anchor]') ?? p.wrap).scrollIntoView({
    behavior: reducedMotion.matches ? 'auto' : 'smooth',
    block: 'start',
  });
  whenVisible(p.wrap, start);
};

const onEnded = id => {
  if (currentStep() !== id) return;
  if (seq.index + 1 >= seq.steps.length) return stopSequence('completed');
  playStep(seq.index + 1);
};

const startSequence = () => {
  seq.steps = sequence.filter(id => registry.has(id));
  if (!seq.steps.length) return;
  seq.active = true;
  seq.abort = new AbortController();
  const stop = type => ev =>
    ev.isTrusted && stopSequence(`user ${type}`);
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(type =>
    window.addEventListener(type, stop(type), {
      signal: seq.abort.signal,
      passive: true,
    })
  );
  playStep(0);
};

const initPhotoViewer = () => {
  document.body.insertAdjacentHTML('beforeend', PhotoModalComponent(myData));
  const dialog = document.querySelector('.photo-modal');
  document
    .querySelector('[data-photo]')
    .addEventListener('click', () => dialog.showModal());
  dialog.addEventListener('click', ev => {
    if (ev.target !== dialog.querySelector('img')) dialog.close();
  });
};

const initMedia = () => {
  initPhotoViewer();
  initModal();
  document.querySelectorAll('[data-player]').forEach(initPlayer);
  startSequence();
};
