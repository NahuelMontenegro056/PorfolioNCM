const form = document.querySelector('#contact-form');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	const name = form.elements.name.value.trim();
	const email = form.elements.email.value.trim();
	const message = form.elements.message.value.trim();
	
	if (name === '' || email === '' || message === '') {
		alert('Por favor, complete todos los campos.');
	} else {
		alert('Gracias por contactarnos!');
		form.reset();
	}
});
