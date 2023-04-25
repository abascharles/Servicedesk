// Get the form element
const form = document.querySelector('form');

// Add an event listener for the form submit event
form.addEventListener('submit', (event) => {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the username and password values from the form inputs
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	// Check if the username and password fields are not empty
	if (username.trim() !== '' && password.trim() !== '') {
		// Display a success message
		alert('Login successful!');
	} else {
		// Display an error message
		alert('Please enter a valid username and password.');
	}
});
