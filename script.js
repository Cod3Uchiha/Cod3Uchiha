const WHATSAPP_NUMBER = "263785028126";

const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const applicationForm = document.getElementById("applicationForm");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

menuToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.setAttribute("aria-hidden", String(!open));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  });
});

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

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(applicationForm);
  const message = [
    "Hello Cod3Uchiha, I would like to apply for a service.",
    "",
    `Name: ${data.get("name")}`,
    `Business: ${data.get("business") || "Not provided"}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone")}`,
    `Service: ${data.get("service")}`,
    `Budget: ${data.get("budget")}`,
    `Timeline: ${data.get("timeline")}`,
    `Reference: ${data.get("reference") || "Not provided"}`,
    "",
    "Project details:",
    data.get("details")
  ].join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener"
  );
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
