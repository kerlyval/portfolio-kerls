function updateDateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.copyright');

	copyrightElement.textContent += `${currentYear}`;
}

export default updateDateYear;
