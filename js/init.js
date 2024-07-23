function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function scrollTo() {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  }
}

function smooth() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默认锚点跳转

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function handleHashChange() {
  const currentHash = window.location.hash;
  document.querySelectorAll("a[href]").forEach(function (anchor) {
    anchor.classList.remove("active");
    if (anchor.getAttribute("href") === currentHash) {
      anchor.classList.add("active");
    }
  });
}
function init() {
  //   smooth();
  scrollTo();
  handleHashChange();
  window.addEventListener("hashchange", handleHashChange);
}
ready(init);
