const svgPath = document.querySelectorAll('svg path');
const toggle = document.getElementById('toggle');

const mapWorld = () => {
	svgPath.forEach((item) => {
		item.addEventListener('mouseover', (event) => {
			const x = event.clientX + window.scrollX;
			const y = event.clientY + window.scrollY;
			const title = item.getAttribute('name');

			toggle.style.left = `${x}px`;
			toggle.style.top = `${y}px`;
			toggle.innerHTML = title;
			toggle.style.display = 'block';
			console.log(title); // Verifica que se activa
		});

		item.addEventListener('mouseout', () => {
			toggle.style.display = 'none';
		});
	});
};

// Llama a la función para configurar las interacciones
mapWorld();
