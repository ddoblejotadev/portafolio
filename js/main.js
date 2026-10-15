/* ---------- Portafolio Juan Llontop Román ---------- */
// Script principal del portafolio.
// Actualmente se encarga de mejorar la accesibilidad de los enlaces externos.

document.addEventListener("DOMContentLoaded", () => {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    // Añade texto oculto para lectores de pantalla indicando que el enlace se abre en nueva pestaña
    const hint = document.createElement("span");
    hint.className = "sr-only";
    hint.textContent = "(se abre en una nueva pestaña)";
    link.appendChild(hint);
  });
});
