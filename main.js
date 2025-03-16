const summary = document.querySelector("summary");
const sectionInSummary = document.querySelector("details section");
const toggleClass = () => sectionInSummary.classList.toggle("reveal");

summary.addEventListener("click", toggleClass);
