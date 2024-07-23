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
  // 获取当前URL的hash值
  const currentHash = window.location.hash;
  // 遍历所有锚点链接
  document.querySelectorAll("a[href]").forEach(function (anchor) {
    // 移除之前可能添加的样式类
    anchor.classList.remove("active");
    // 检查锚点链接的href属性是否与当前hash值匹配
    if (anchor.getAttribute("href") === currentHash) {
      // 给匹配的锚点链接添加特定的样式类
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
