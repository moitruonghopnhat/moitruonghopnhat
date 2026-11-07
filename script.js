(function () {
  // Menu trên điện thoại
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Logo khách hàng (ảnh nằm trong assets/khach-hang/logo-01.jpg ... logo-18.jpg)
  var grid = document.getElementById("logo-grid");
  if (grid) {
    var html = "";
    for (var i = 1; i <= 18; i++) {
      var n = i < 10 ? "0" + i : String(i);
      html += '<li><img src="assets/khach-hang/logo-' + n + '.jpg" width="240" height="116" alt="Logo khách hàng ' + i + ' của Môi Trường Hợp Nhất" loading="lazy"></li>';
    }
    grid.innerHTML = html;
  }

  // Năm hiện tại ở chân trang
  var year = document.getElementById("nam-hien-tai");
  if (year) year.textContent = new Date().getFullYear();

  // Hiệu ứng xuất hiện khi cuộn
  if ("IntersectionObserver" in window) {
    var items = document.querySelectorAll(".service-card, .steps li, .project, .split-media, .split-copy, .logo-grid");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -60px 0px" });
    items.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
