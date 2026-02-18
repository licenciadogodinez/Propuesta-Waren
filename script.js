// script.js
document.addEventListener('DOMContentLoaded', () => {
    const propGallery = document.querySelector('.prop-gallery');
    const toggleGridBtn = document.getElementById('toggle-grid');
    const toggleListBtn = document.getElementById('toggle-list');

    const filterType = document.getElementById('filter-type');
    const filterColor = document.getElementById('filter-color');
    const filterEpoca = document.getElementById('filter-epoca');
    const filterUso = document.getElementById('filter-uso');

    const props = [
        {
            id: 'sofia-chesterfield',
            name: 'Sofá Chesterfield Clásico',
            image: 'https://via.placeholder.com/300x200?text=Sofa+Chesterfield',
            description: 'Elegante sofá de piel capitoné, ideal para ambientaciones sofisticadas, oficinas de época o sets de lujo.',
            style: 'Clásico, Lujo',
            dimensions: '2.30m x 1.00m x 0.75m',
            type: 'mobiliario',
            color: 'marrón',
            epoca: 'clásico',
            uso_cinematografico: ['drama', 'lujo']
        },
        {
            id: 'mesa-mid-century',
            name: 'Mesa de Centro Mid-Century',
            image: 'https://via.placeholder.com/300x200?text=Mesa+Mid-Century',
            description: 'Mesa baja de madera con diseño de mediados de siglo. Perfecta para salas modernas o espacios retro.',
            style: 'Mid-Century, Moderno',
            dimensions: '1.20m x 0.60m x 0.40m',
            type: 'mobiliario',
            color: 'madera',
            epoca: 'mid-century',
            uso_cinematografico: ['moderno', 'retro']
        },
        {
            id: 'maq-escribir-antigua',
            name: 'Máquina de Escribir Antigua',
            image: 'https://via.placeholder.com/300x200?text=Maq+Escribir',
            description: 'Máquina de escribir Royal de los años 40. Detalle auténtico para oficinas vintage, sets de periodismo o escenas de drama.',
            style: 'Vintage, Época',
            type: 'utileria',
            color: 'negro',
            epoca: 'años 40',
            uso_cinematografico: ['drama', 'vintage']
        },
        {
            id: 'camara-clasica',
            name: 'Cámara Fotográfica Clásica',
            image: 'https://via.placeholder.com/300x200?text=Camara+Clasica',
            description: 'Réplica de cámara fotográfica de fuelle. Ideal para escenografías de estudio fotográfico antiguo o como utilería de época.',
            style: 'Retro, Fotografía',
            type: 'utileria',
            color: 'negro',
            epoca: 'clásico',
            uso_cinematografico: ['fotografía', 'época']
        },
        {
            id: 'globos-terraqueos',
            name: 'Globos Terráqueos Antiguos (Set de 3)',
            image: 'https://via.placeholder.com/300x200?text=Globos+Terraqueos',
            description: 'Colección de tres globos terráqueos con mapas antiguos. Añade un toque intelectual y explorador a cualquier espacio.',
            style: 'Académico, Vintage',
            type: 'decoracion',
            color: 'varios',
            epoca: 'vintage',
            uso_cinematografico: ['académico', 'aventura']
        },
        {
            id: 'maletas-cuero',
            name: 'Juego de Maletas de Cuero',
            image: 'https://via.placeholder.com/300x200?text=Maletas+Cuero',
            description: 'Conjunto de maletas de cuero vintage. Perfectas para escenas de viaje, estaciones de tren o ambientaciones de los años 50.',
            style: 'Viajero, Vintage',
            type: 'decoracion',
            color: 'marrón',
            epoca: 'años 50',
            uso_cinematografico: ['viajes', 'drama']
        }
    ];

    function renderProps(currentProps) {
        propGallery.innerHTML = '';
        currentProps.forEach(prop => {
            const propItem = document.createElement('div');
            propItem.classList.add('prop-item');
            propItem.innerHTML = `
                <h3>${prop.name}</h3>
                <img src="${prop.image}" alt="${prop.name}">
                <p>${prop.description}</p>
                <p><strong>Tipo:</strong> ${prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}</p>
                <p><strong>Estilo:</strong> ${prop.style}</p>
                ${prop.dimensions ? `<p><strong>Dimensiones:</strong> ${prop.dimensions}</p>` : ''}
                <p><strong>Color:</strong> ${prop.color.charAt(0).toUpperCase() + prop.color.slice(1)}</p>
                <p><strong>Época:</strong> ${prop.epoca.charAt(0).toUpperCase() + prop.epoca.slice(1)}</p>
                <p><strong>Uso:</strong> ${prop.uso_cinematografico.map(u => u.charAt(0).toUpperCase() + u.slice(1)).join(', ')}</p>
                <button class="reserve-btn" data-prop-id="${prop.id}">Reservar</button>
            `;
            propGallery.appendChild(propItem);
        });
    }

    function applyFilters() {
        let filteredProps = props;

        const selectedType = filterType.value;
        if (selectedType !== 'all') {
            filteredProps = filteredProps.filter(prop => prop.type === selectedType);
        }

        const selectedColor = filterColor.value;
        if (selectedColor !== 'all') {
            filteredProps = filteredProps.filter(prop => prop.color === selectedColor);
        }

        const selectedEpoca = filterEpoca.value;
        if (selectedEpoca !== 'all') {
            filteredProps = filteredProps.filter(prop => prop.epoca === selectedEpoca);
        }

        const selectedUso = filterUso.value;
        if (selectedUso !== 'all') {
            filteredProps = filteredProps.filter(prop => prop.uso_cinematografico.includes(selectedUso));
        }

        renderProps(filteredProps);
    }

    renderProps(props); // Initial render with all props
    propGallery.classList.add('grid-view'); // Set initial view to grid

    // Event Listeners for view toggling
    toggleGridBtn.addEventListener('click', () => {
        propGallery.classList.remove('list-view');
        propGallery.classList.add('grid-view');
    });

    toggleListBtn.addEventListener('click', () => {
        propGallery.classList.remove('grid-view');
        propGallery.classList.add('list-view');
    });

    // Event Listeners for filters
    filterType.addEventListener('change', applyFilters);
    filterColor.addEventListener('change', applyFilters);
    filterEpoca.addEventListener('change', applyFilters);
    filterUso.addEventListener('change', applyFilters);

    // Dummy reservation logic (for prototype)
    propGallery.addEventListener('click', (event) => {
        if (event.target.classList.contains('reserve-btn')) {
            const propId = event.target.dataset.propId;
            const selectedProp = props.find(p => p.id === propId);
            if (selectedProp) {
                alert(`"${selectedProp.name}" ha sido añadido a tu lista de reserva (prototipo).`);
                // In a real app, this would add to a cart or send a request
            }
        }
    });
});