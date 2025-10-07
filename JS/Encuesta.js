const form = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const formData = new FormData(form);
  const score = { Agile: 0, Scrum: 0, Waterfall: 0 };

  for (let value of formData.values()) {
    if(score[value] !== undefined){
      score[value]++;
    }
  }

  let recommended = Object.keys(score).reduce((a,b) => score[a] > score[b] ? a : b);

  let desc = "";
  if (recommended === "Agile") {
    desc = "Ideal si tu proyecto necesita adaptarse rápidamente a cambios y prioriza la flexibilidad.";
  } else if (recommended === "Scrum") {
    desc = "Perfecta si querés un equilibrio entre planificación, trabajo en equipo y entregas periódicas.";
  } else {
    desc = "Recomendada si buscás una planificación detallada y estabilidad en los requisitos.";
  }

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h2>Recomendación: ${recommended}</h2>
    <p>${desc}</p>
  `;

  form.reset();
});