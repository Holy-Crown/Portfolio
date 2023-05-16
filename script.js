// JavaScript Document
const emailInput = document.querySelector('input[type="email"]');
const emailError = document.querySelector('#email-error');

emailInput.addEventListener('blur', function() {
    if (!emailInput.checkValidity()) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
    }
});
		document.querySelectorAll('nav a').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});