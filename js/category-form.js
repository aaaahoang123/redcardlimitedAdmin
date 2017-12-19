var CATEGORY_API_URL = "http://localhost:3000/_api/v1/categories";
var FILE_UPLOAD_URL = "http://localhost:3000/_api/v1/images";
// Chờ dom load hết.
$(document).ready(function(){	
	// Bắt sự kiện click vào nút btn-submit
	$('[name="btn-submit"]').click(function(){				
		var name = $('[name="name"]').val();
		var description = $('[name="description"]').val();		
		var imageUrl = $('[name="imageUrl"]').val();

		var category = {
			'name': name,
			'description': description,					
			'imageUrl': imageUrl			
		};
		var api_url = CATEGORY_API_URL;
		var method = 'POST';		
		$.ajax({
			url: api_url,
			type: method,
			data: category,
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
