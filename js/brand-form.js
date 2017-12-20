// const brandApi = 'https://rlcapi.herokuapp.com/api/brands';
const brandApi = 'http://localhost:3000/api/brands';

function submit () {
	var dataToSend = {
		name: document.forms["brand-form"]["name"].value,
		description: document.forms["brand-form"]["description"].value,
		address: document.forms["brand-form"]["address"].value
	};
	console.log(localStorage.getItem('token'));
	var req = new XMLHttpRequest();
	req.open('POST', brandApi, true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.setRequestHeader('token', localStorage.getItem('token'));
	req.onload = function() {
		alert('Success!');
		$('[name=brand-form]').trigger("reset");
		console.log(JSON.parse(this.responseText));
	};
	req.onerror = function() {
		alert('Error!')
		console.log(JSON.parse(this.responseText));
	}
	req.send(JSON.stringify(dataToSend));
}