/* ---------- Portafolio Juan Llontop Román ---------- */
// Animaciones al hacer scroll y mejoras de accesibilidad.

document.addEventListener("DOMContentLoaded", () => {
  // 1) Enlaces externos: texto oculto para lectores de pantalla
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    const hint = document.createElement("span");
    hint.className = "sr-only";
    hint.textContent = "(se abre en una nueva pestaña)";
    link.appendChild(hint);
  });

  // 2) Revelado de elementos al hacer scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Secciones principales
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });

  // Tarjetas de proyectos con efecto escalonado
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.classList.add("reveal-item");
    card.style.transitionDelay = `${index * 0.12}s`;
    observer.observe(card);
  });

  // Etiquetas de tecnologías
  document.querySelectorAll(".tech-item").forEach((tag, index) => {
    tag.classList.add("reveal-item");
    tag.style.transitionDelay = `${index * 0.06}s`;
    observer.observe(tag);
  });
});
