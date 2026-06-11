const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const header = document.querySelector("[data-header]");
let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const current = window.scrollY;
    if (current > 140 && current > lastScrollY) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScrollY = current;
  },
  { passive: true }
);
