const primaryHeader = document.querySelector(".header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver( (entries) => {
  primaryHeader.classList.toggle("fixed", !entries[0].isIntersecting);
})

navObserver.observe(scrollWatcher);