const greetings = [
	'¡Hola!',
	'Hello!',
	'Labas!',
	'Bonjour!',
	'Hallo!',
	'Ciao!',
	'こんにちは!',
	'Sveiki!',
	'Tere!',
];

window.onload = function () {
	const greetingContainer = document.getElementById('greeting');
	let index = 0;

	function showGreeting() {
		if (index < greetings.length) {
			greetingContainer.textContent = greetings[index];
			greetingContainer.classList.add('show');

			const displayTime =
				index === 0 || index === greetings.length - 1 ? 700 : 200;

			setTimeout(() => {
				greetingContainer.classList.remove('show');
				setTimeout(() => {
					index++;
					showGreeting();
				}, 10);
			}, displayTime);
		} else {
			const loader = document.querySelector('.loader');
			loader.classList.add('loader--hidden');

			// Añadir la clase 'visible' al carrusel para que sea visible
			const carousel = document.querySelector('.carousel');
			if (carousel) {
				carousel.classList.add('visible');
			}
		}
	}

	showGreeting();
};
