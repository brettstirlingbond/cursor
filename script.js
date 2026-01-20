// Minimal JavaScript for the demo site.
// You can safely delete this file and the script tag in `index.html`
// if you don't need any client-side behavior.

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav a[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", targetId);
    });
  });
});

