var occasionApi = "https://rlcapi.herokuapp.com/api/occasions";

// Chờ dom load hết.
$(document).ready(function(){	
	// Bắt sự kiện click vào nút btn-submit
	$('[name="btn-submit"]').click(function(){				

		var dataToSend = {
			'name': document.forms["occasion-form"]["name"].value,
			'description': document.forms["occasion-form"]["description"].value		
		};
		var req = new XMLHttpRequest();
		req.open('POST', occasionApi, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.setRequestHeader('token', '3g3a3p3o3b.23423e1128473j3b3a112e2x37112k4a3d30');
		req.onload = function() {
			alert('Success!');
			$('[name=occasion-form]').trigger("reset");
			console.log(JSON.parse(this.responseText));
		};
		req.onerror = function() {
			alert('Error!')
			console.log(JSON.parse(this.responseText));
		};
		req.send(JSON.stringify(dataToSend));

	});

	$("#fileUpload").change(function (e){						
		var data = new FormData();
		data.append('myFile', e.target.files[0]);
		$.ajax({
			url: FILE_UPLOAD_URL,
			type: "POST",
			data: data,
			cache: false,
		    contentType: false,
		    processData: false,
			success: function(response){										
				$('#preview').attr('src', response);
				$('[name="imageUrl"]').val(response);
			},
			error: function(response, message){
				alert('Có lỗi xảy ra. ' + message);
			}
		});
	});
});
