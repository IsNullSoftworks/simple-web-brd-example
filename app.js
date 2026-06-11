// isnull homepage — small progressive enhancements, no dependencies.
(function () {
  // Mobile navigation toggle.
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Keep the footer year current.
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Reveal elements as they scroll into view.
  var targets = document.querySelectorAll(".card, .work-item, .section-title, .hero h1");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { el.classList.add("reveal"); obs.observe(el); });
  }
})();
