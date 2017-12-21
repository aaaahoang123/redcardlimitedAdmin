var categoryApi = "https://rlcapi.herokuapp.com/api/categories";

// Chờ dom load hết.
$(document).ready(function(){	
	// Bắt sự kiện click vào nút btn-submit
	$('[name="btn-submit"]').click(function(){				

		var dataToSend = {
			'name': document.forms["category-form"]["name"].value,
			'description': document.forms["category-form"]["description"].value		
		};
		var req = new XMLHttpRequest();
		req.open('POST', categoryApi, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.setRequestHeader('token', '3g3a3p3o3b.23423e1128473j3b3a112e2x37112k4a3d30');
		req.onload = function() {
			alert('Success!');
			$('[name=category-form]').trigger("reset");
			console.log(JSON.parse(this.responseText));
		};
		req.onerror = function() {
			alert('Error!')
			console.log(JSON.parse(this.responseText));
		};
		req.send(JSON.stringify(dataToSend));

	});
});
