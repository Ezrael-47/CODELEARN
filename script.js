const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// تغییر ظاهر هدر هنگام اسکرول
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// باز و بسته کردن منوی موبایل
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("open");
  navLinks.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
});

// بستن منو بعد از انتخاب لینک
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("open");
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// باز و بسته کردن سوالات متداول
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("active");

    button.setAttribute("aria-expanded", isOpen);
    button.querySelector("span").textContent = isOpen ? "−" : "+";
  });
});

// نمایش بخش‌ها هنگام رسیدن به آن‌ها در صفحه
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
