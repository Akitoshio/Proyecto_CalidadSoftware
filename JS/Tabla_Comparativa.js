
const metodologias = {
  "Scrum": {
    caracteristicas: "Basado en sprints, equipos autoorganizados, revisiones periódicas.",
    ventajas: "Alta adaptabilidad, entregas rápidas, mejora continua.",
    desventajas: "Difícil de aplicar en equipos grandes o sin disciplina.",
    uso: "Proyectos con requisitos cambiantes o donde se busca mejora continua.",
    requisitos: "Definición evolutiva y colaborativa durante el proceso.",
    experiencia: "Media a alta, requiere conocimiento en roles ágiles.",
    tamaño: "Ideal para equipos pequeños o medianos (5-9 personas)."
  },
  "Kanban": {
    caracteristicas: "Flujo visual de trabajo, límite de tareas en curso, mejora continua.",
    ventajas: "Transparencia, flexibilidad y reducción de cuellos de botella.",
    desventajas: "Menos estructura formal, requiere madurez del equipo.",
    uso: "Entornos con trabajo continuo y cambios frecuentes.",
    requisitos: "Se definen de forma continua según prioridades.",
    experiencia: "Media, requiere disciplina en la gestión del flujo.",
    tamaño: "Equipos pequeños o medianos."
  },
  "XP": {
    caracteristicas: "Enfoque en la calidad del código, pruebas continuas, desarrollo en pareja.",
    ventajas: "Alta calidad del software, respuesta rápida a cambios.",
    desventajas: "Requiere compromiso alto y experiencia técnica.",
    uso: "Proyectos donde la calidad del código es prioritaria.",
    requisitos: "Definidos en colaboración con el cliente.",
    experiencia: "Alta, requiere desarrolladores experimentados.",
    tamaño: "Equipos pequeños (hasta 10 personas)."
  },
  "Cascada": {
    caracteristicas: "Secuencial, cada fase depende de la anterior, fuerte documentación.",
    ventajas: "Fácil de entender y administrar, ideal para proyectos con requisitos claros.",
    desventajas: "Difícil de adaptar a cambios, poco flexible.",
    uso: "Proyectos con requisitos bien definidos desde el inicio.",
    requisitos: "Completamente definidos antes de iniciar el desarrollo.",
    experiencia: "Baja a media.",
    tamaño: "Equipos medianos o grandes."
  },
  "Espiral": {
    caracteristicas: "Iterativo con enfoque en gestión de riesgos, prototipos sucesivos.",
    ventajas: "Control de riesgos, ideal para proyectos grandes y complejos.",
    desventajas: "Costoso, difícil de gestionar sin experiencia.",
    uso: "Proyectos de gran escala con alto riesgo técnico o financiero.",
    requisitos: "Definición progresiva en cada iteración.",
    experiencia: "Alta, se requiere gestión avanzada de riesgos.",
    tamaño: "Equipos grandes y multidisciplinarios."
  },
  "Incremental": {
    caracteristicas: "Desarrollo en incrementos funcionales, entregas parciales al cliente.",
    ventajas: "Entrega temprana de valor, mayor flexibilidad.",
    desventajas: "Problemas de integración entre módulos.",
    uso: "Proyectos donde se busca entrega parcial continua.",
    requisitos: "Definidos parcialmente y refinados por incrementos.",
    experiencia: "Media.",
    tamaño: "Equipos medianos."
  },
  "VModel": {
    caracteristicas: "Extensión del modelo cascada con verificación y validación en paralelo.",
    ventajas: "Alta calidad y trazabilidad, ideal para sistemas críticos.",
    desventajas: "Rigidez, poco adecuado para cambios de requisitos.",
    uso: "Proyectos críticos (bancarios, médicos, militares).",
    requisitos: "Completamente definidos y validados desde el inicio.",
    experiencia: "Alta en testing y control de calidad.",
    tamaño: "Equipos medianos o grandes."
  },
  "Prototipo": {
    caracteristicas: "Creación de versiones iniciales para retroalimentación rápida.",
    ventajas: "Claridad en los requisitos, mejora la comunicación con el cliente.",
    desventajas: "Puede generar expectativas irreales o aumento de costos.",
    uso: "Proyectos donde los requisitos no están claros.",
    requisitos: "Definidos de forma progresiva mediante prototipos.",
    experiencia: "Media.",
    tamaño: "Equipos pequeños o medianos."
  },
  "Iterativo": {
    caracteristicas: "Desarrollo en ciclos sucesivos, mejora continua con feedback.",
    ventajas: "Flexibilidad, permite ajustes tempranos.",
    desventajas: "Requiere gestión constante y buena comunicación.",
    uso: "Proyectos donde se espera evolución continua del producto.",
    requisitos: "Definidos y mejorados con cada iteración.",
    experiencia: "Media.",
    tamaño: "Equipos pequeños o medianos."
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
          <tr><th>Criterio</th><th>${m1}</th><th>${m2}</th></tr>
          <tr><td>Características clave</td><td>${metodologias[m1].caracteristicas}</td><td>${metodologias[m2].caracteristicas}</td></tr>
          <tr><td>Ventajas</td><td>${metodologias[m1].ventajas}</td><td>${metodologias[m2].ventajas}</td></tr>
          <tr><td>Desventajas</td><td>${metodologias[m1].desventajas}</td><td>${metodologias[m2].desventajas}</td></tr>
          <tr><td>Caso de uso</td><td>${metodologias[m1].uso}</td><td>${metodologias[m2].uso}</td></tr>
          <tr><td>Definición de requisitos</td><td>${metodologias[m1].requisitos}</td><td>${metodologias[m2].requisitos}</td></tr>
          <tr><td>Experiencia del equipo</td><td>${metodologias[m1].experiencia}</td><td>${metodologias[m2].experiencia}</td></tr>
          <tr><td>Tamaño del equipo</td><td>${metodologias[m1].tamaño}</td><td>${metodologias[m2].tamaño}</td></tr>
        </table>
      </div>
    `;
  } else {
    comparativoDiv.innerHTML = "";
  }
}

select1.addEventListener("change", generarComparativo);
select2.addEventListener("change", generarComparativo);