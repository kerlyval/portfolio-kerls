const greetings = [
	'¡Hola!',
	'Hello!',
	'Labas!', // Lituano
	'Bonjour!',
	'Hallo!',
	'Ciao!',
	'こんにちは!', // Japonés
	'Sveiki!', // Letonia
	'Tere!', // Estonia
];

window.onload = function () {
	const greetingContainer = document.getElementById('greeting');
	let index = 0;

	function showGreeting() {
		if (index < greetings.length) {
			greetingContainer.textContent = greetings[index]; // Muestra el saludo
			greetingContainer.classList.add('show'); // Agrega la clase para mostrar el saludo

			// Duración de la visualización
			const displayTime =
				index === 0 || index === greetings.length - 1 ? 700 : 200; // 1 segundo para el primer y último saludo, 0.5 segundos para los demás

			setTimeout(() => {
				greetingContainer.classList.remove('show'); // Remueve la clase para ocultar el saludo

				// Espera un breve tiempo antes de mostrar el siguiente saludo
				setTimeout(() => {
					index++; // Incrementa el índice para el siguiente saludo
					showGreeting(); // Muestra el siguiente saludo
				}, 200); // Tiempo de espera antes de mostrar el siguiente saludo
			}, displayTime); // Tiempo que el saludo permanece visible
		} else {
			// Oculta el loader después de mostrar todos los saludos
			const loader = document.querySelector('.loader');
			loader.classList.add('loader--hidden');

			// Alfin muestra el carousel
			const carousel = document.querySelector('.carousel');
			carousel.classList.add('visible');
		}
	}

	showGreeting(); // Inicia el ciclo
};
