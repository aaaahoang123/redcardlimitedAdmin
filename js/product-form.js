var productApi = "https://rlcapi.herokuapp.com/api/products";
//var productApi = 'http://localhost:3000/api/products';
var FILE_UPLOAD_URL = "https://api.cloudinary.com/v1_1/fpt-aptech/image/upload";

// Chờ dom load hết.
$(document).ready(function(){	
	// Bắt sự kiện click vào nút btn-submit
	$('[name="btn-submit"]').click(function(){				
		var dataToSend = {
			'name': document.forms['product-form']['name'].value,
			'productCode': document.forms['product-form']['code'].value,
			'brandId': document.forms['product-form']['brandId'].value,
			'categoryId': document.forms['product-form']['categoryId'].value,
			'shortDetail': document.forms['product-form']['shortDetail'].value,
			'description': document.forms['product-form']['description'].value,
			'images': {
				'bigImgs': [document.forms['product-form']['big1Url'].value,document.forms['product-form']['big2Url'].value],
				'smallImgs': [document.forms['product-form']['small1Url'].value,document.forms['product-form']['small2Url'].value]
			},
			'price': document.forms['product-form']['price'].value
		};
		var req = new XMLHttpRequest();
		req.open('POST', productApi, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.setRequestHeader('token', '3g3a3p3o3b.23423e1128473j3b3a112e2x37112k4a3d30');
		req.onload = function() {
			alert('Add new product success');
			console.log(JSON.parse(this.responseText));
			$('[name=product-form]').trigger("reset");
		};
		req.onerror = function() {
			alert('Error');
			console.log(JSON.parse(this.responseText));
		}
		req.send(JSON.stringify(dataToSend));
	});

	$("#bigImg1").change(function (e){						
		// var img = new FormData();
		// img.append('file', e.target.files[0]);
		// img.append('upload_preset', 'gwq6ik7v')
		// $.ajax({
		// 	url: FILE_UPLOAD_URL,
		// 	type: "POST",
		// 	data: img,
		// 	cache: false,
		//     contentType: false,
		//     processData: false,
		// 	success: function(response){										
		// 		console.log(response)
		// 	},
		// 	error: function(response, message){
		// 		console.log(response);
		// 	}
		// });
		uploadImg(e, document.getElementById('viewBig1'), document.forms["product-form"]["big1Url"]);
	});
	$("#bigImg2").change(function(e) {
		uploadImg(e, document.getElementById('viewBig2'), document.forms['product-form']['big2Url']);
	});
	$("#smallImg1").change(function(e) {
		uploadImg(e, document.getElementById('viewSmall1'), document.forms['product-form']['small1Url']);
	})
	$("#smallImg2").change(function(e) {
		uploadImg(e, document.getElementById('viewSmall2'), document.forms['product-form']['small2Url']);
	})
});


function uploadImg(e, target1, target2) {
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
			previewImg(response.secure_url, target1);
			bindValueUrl(response.secure_url, target2);
		},
		error: function(response, message){
			console.log(response);
		}
	});
}

function previewImg(url, target) {
	target.src = url;
}
function bindValueUrl(url, target) {
	target.value = url;
}