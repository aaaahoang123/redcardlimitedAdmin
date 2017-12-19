var STUDENT_API_URL = "http://localhost:3000/_api/v1/students";
var FILE_UPLOAD_URL = "https://api.cloudinary.com/v1_1/fpt-aptech/image/upload";
// Chờ dom load hết.
$(document).ready(function(){	
	// Bắt sự kiện click vào nút btn-submit
	$('[name="btn-submit"]').click(function(){				
		var rollNumber = $('[name="rollNumber"]').val();
		var firstName = $('[name="firstName"]').val();
		var lastName = $('[name="lastName"]').val();
		var gender = $('[name="gender"]').val();
		var birthday = $('[name="birthday"]').val();
		var avatarUrl = $('[name="avatarUrl"]').val();

		var student = {
			'rollNumber': rollNumber,
			'firstName': firstName,					
			'lastName': lastName,
			'gender': gender,
			'birthday': birthday,
			'avatarUrl': avatarUrl
		};
		var api_url = STUDENT_API_URL;
		var method = 'POST';		
		$.ajax({
			url: api_url,
			type: method,
			data: student,
			success: function(response){										
				$('#modal-success').modal();
				$('[name=student-form]').trigger("reset");
			},
			error: function(response, message){
				alert('Có lỗi xảy ra. ' + message);
			}
		});

	});

	$("#fileUpload").change(function (e){						
		var img = new FormData();
		img.append('file', e.target.files[0]);
		img.append('upload_preset', 'gwq6ik7v')
		$.ajax({
			url: FILE_UPLOAD_URL,
			type: "POST",
			data: img,
			cache: false,
		    contentType: false,
		    processData: false,
			success: function(response){										
				console.log(response)
			},
			error: function(response, message){
				console.log(response);
			}
		});
	});
});
