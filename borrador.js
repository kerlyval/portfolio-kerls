// LOADER

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
				}, 10); // Tiempo de espera antes de mostrar el siguiente saludo
			}, displayTime); // Tiempo que el saludo permanece visible
		} else {
			const loader = document.querySelector('.loader');
			loader.classList.add('loader--hidden');

			// Alfin muestra el carousel
			const carousel = document.querySelector('.carousel');
			carousel.classList.add('visible');
		}
	}

	showGreeting();
};

// Carrousel

const nextBtn = document.querySelector('.next'),
	prevBtn = document.querySelector('.prev'),
	carousel = document.querySelector('.carousel'),
	list = document.querySelector('.list'),
	item = document.querySelectorAll('.item'),
	runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = function () {
	showSlider('next');
};

prevBtn.onclick = function () {
	showSlider('prev');
};

let runTimeOut;

let runNextAuto = setTimeout(() => {
	nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
	runningTime.style.animation = 'none';
	runningTime.offsetHeight; /*checar esto nuevamente*/
	runningTime.style.animation = null;
	runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(type) {
	let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
	if (type === 'next') {
		list.appendChild(sliderItemsDom[0]);
		carousel.classList.add('next');
	} else {
		list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
		carousel.classList.add('prev');
	}

	clearTimeout(runTimeOut);

	runTimeOut = setTimeout(() => {
		carousel.classList.remove('next');
		carousel.classList.remove('prev');
	}, timeRunning);

	clearTimeout(runNextAuto);
	runNextAuto = setTimeout(() => {
		nextBtn.click();
	}, timeAutoNext);

	resetTimeAnimation(); // vuelve a iniciar la animación
}

resetTimeAnimation();

export default carousel;
