
// Datos de los archivos HTML
const htmlFiles = [
    { name: "Ciclo de vida del Desarrollo de Software (SDLC)", url: "../HTML/Seccion3-1.html" },
    { name: "Modelos Tradicionales", url: "../HTML/Seccion3-2.html" },
    { name: "Metodologías Ágiles", url: "../HTML/Seccion3-3.html" },
    { name: "Procesos de Desarrollo de Software", url: "../HTML/Seccion3.html"},
    { name: "Pantalla de Inicio", url: "../HTML/pantalla1.html"}
];

const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let selectedIndex = -1;

// Filtrar resultados al escribir
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    results.innerHTML = '';
    selectedIndex = -1;

    if (query) {
        const filtered = htmlFiles.filter(file => file.name.toLowerCase().includes(query));

        filtered.forEach(file => {
            const li = document.createElement('li');
            li.textContent = file.name;
            li.addEventListener('click', () => {
                window.location.href = file.url;
            });
            results.appendChild(li);
        });

        if (filtered.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No se encontraron resultados';
            li.style.color = 'red';
            results.appendChild(li);
        }
    }
});

// Navegación con teclado
searchInput.addEventListener('keydown', function(e) {
    const items = results.querySelectorAll('li');

    if (!items.length) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        highlightItem(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        highlightItem(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && items[selectedIndex]) {
            items[selectedIndex].click();
        }
    }
});

function highlightItem(items) {
    items.forEach((item, index) => {
        if (index === selectedIndex) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}
