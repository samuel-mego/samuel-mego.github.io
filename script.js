// script.js

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('Dashboard Solar cargado correctamente');

  // Ejemplo: si quisieras generar filas dinámicamente desde un array:
  // const charts = [
  //   { src1: 'URL_GRAF_1', src2: 'URL_GRAF_2', analysis: 'URL_ANALISIS_1' },
  //   { src1: 'URL_GRAF_3', src2: 'URL_GRAF_4', analysis: 'URL_ANALISIS_2' },
  //   // …
  // ];
  // const main = document.querySelector('.charts');
  // charts.forEach(cfg => {
  //   const section = document.createElement('section');
  //   section.classList.add('chart-section');
  //   section.innerHTML = `
  //     <div class="row">
  //       <div class="chart-container"><iframe src="${cfg.src1}"></iframe></div>
  //       <div class="chart-container"><iframe src="${cfg.src2}"></iframe></div>
  //     </div>
  //     <button class="analysis-btn" onclick="location.href='${cfg.analysis}'">
  //       Mostrar Análisis
  //     </button>
  //   `;
  //   main.appendChild(section);
  // });

  // Ejemplo: animar los iframes al hacer scroll
  const charts = document.querySelectorAll('.chart-container');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  charts.forEach(c => observer.observe(c));
});
