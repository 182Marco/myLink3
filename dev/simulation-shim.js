/*
 * TEMPORARY. Fakes video playback so the sequence (play -> ended -> scroll to
 * the next video -> highlight the app cards) can be seen without the real
 * mp4 files. Each fake video "plays" for FAKE_MS, then fires `ended`.
 * Delete this file, dev/simulation.sh and dev/simulation.html once the real
 * videos are in src/video/. Never referenced by src/.
 */
(() => {
  const FAKE_MS = 4000;
  const proto = HTMLMediaElement.prototype;
  const fire = (el, type) => el.dispatchEvent(new Event(type));

  Object.defineProperty(proto, 'paused', { get: function () { return !this._sim; } });
  Object.defineProperty(proto, 'ended', { get: function () { return !!this._ended; } });

  proto.play = function () {
    this._ended = false;
    this._sim = true;
    fire(this, 'play');
    clearTimeout(this._t);
    this._t = setTimeout(() => {
      this._sim = false;
      this._ended = true;
      fire(this, 'pause');
      fire(this, 'ended');
    }, FAKE_MS);
    return Promise.resolve();
  };
  proto.pause = function () {
    if (!this._sim) return;
    clearTimeout(this._t);
    this._sim = false;
    fire(this, 'pause');
  };

  // the mp4 files do not exist: swallow the load errors (capture phase)
  window.addEventListener(
    'error',
    ev => ev.target instanceof HTMLMediaElement && ev.stopImmediatePropagation(),
    true
  );
})();
