
const metodologias = {
  "Scrum": {
    caracteristicas: "Basado en sprints, equipos autoorganizados, revisiones periódicas.",
    ventajas: "Alta adaptabilidad, entregas rápidas, mejora continua.",
    desventajas: "Difícil de aplicar en equipos grandes o sin disciplina."
  },
  "Kanban": {
    caracteristicas: "Flujo visual de trabajo, límite de tareas en curso, mejora continua.",
    ventajas: "Transparencia, flexibilidad y reducción de cuellos de botella.",
    desventajas: "Menos estructura formal, requiere madurez del equipo."
  },
  "XP": {
    caracteristicas: "Enfoque en la calidad del código, pruebas continuas, desarrollo en pareja.",
    ventajas: "Alta calidad del software, respuesta rápida a cambios.",
    desventajas: "Requiere compromiso alto y experiencia técnica."
  },
  "Cascada": {
    caracteristicas: "Secuencial, cada fase depende de la anterior, fuerte documentación.",
    ventajas: "Fácil de entender y administrar, ideal para proyectos con requisitos claros.",
    desventajas: "Difícil de adaptar a cambios, poco flexible."
  },
  "Espiral": {
    caracteristicas: "Iterativo con enfoque en gestión de riesgos, prototipos sucesivos.",
    ventajas: "Control de riesgos, ideal para proyectos grandes y complejos.",
    desventajas: "Costoso, difícil de gestionar sin experiencia."
  },
  "Incremental": {
    caracteristicas: "Desarrollo en incrementos funcionales, entregas parciales al cliente.",
    ventajas: "Entrega temprana de valor, mayor flexibilidad.",
    desventajas: "Puede haber problemas de integración entre módulos."
  },
  "VModel": {
    caracteristicas: "Extensión del modelo cascada con verificación y validación en paralelo.",
    ventajas: "Alta calidad y trazabilidad, ideal para sistemas críticos.",
    desventajas: "Rigidez, poco adecuado para cambios de requisitos."
  },
  "Prototipo": {
    caracteristicas: "Creación de versiones iniciales para retroalimentación rápida.",
    ventajas: "Claridad en los requisitos, mejora la comunicación con el cliente.",
    desventajas: "Puede generar expectativas irreales o aumento de costos."
  },
  "Iterativo": {
    caracteristicas: "Desarrollo en ciclos sucesivos, mejora continua con feedback.",
    ventajas: "Flexibilidad, permite ajustes tempranos.",
    desventajas: "Requiere gestión constante y buena comunicación."
  }
};

const select1 = document.getElementById("metodologia1");
const select2 = document.getElementById("metodologia2");
const comparativoDiv = document.getElementById("comparativo");

function generarComparativo() {
  const m1 = select1.value;
  const m2 = select2.value;

  if (m1 && m2 && m1 !== m2) {
    comparativoDiv.innerHTML = `
      <div class="tabla-comparativa">
        <table>
          <tr>
            <th>Criterio</th>
            <th>${m1}</th>
            <th>${m2}</th>
          </tr>
          <tr>
            <td>Características Clave</td>
            <td>${metodologias[m1].caracteristicas}</td>
            <td>${metodologias[m2].caracteristicas}</td>
          </tr>
          <tr>
            <td>Ventajas</td>
            <td>${metodologias[m1].ventajas}</td>
            <td>${metodologias[m2].ventajas}</td>
          </tr>
          <tr>
            <td>Desventajas</td>
            <td>${metodologias[m1].desventajas}</td>
            <td>${metodologias[m2].desventajas}</td>
          </tr>
        </table>
      </div>
    `;
  } else {
    comparativoDiv.innerHTML = "";
  }
}

select1.addEventListener("change", generarComparativo);
select2.addEventListener("change", generarComparativo);