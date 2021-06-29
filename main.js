const form = $("#submit-form")

//serializes form data and submits to google sheet
function SubForm(){
	$.ajax({
        url: 'WEB APP URL HERE', //Deploy google script as a web app to obtain url
        type: 'get',
        data: $('#submit-form').serialize(),
        success: function(){
			//On success
        }
    });
}

//Removes form after submission
form.on('submit', function(e) {
    document.getElementById("submit-form").style.display = "none";
    document.getElementById("success-msg").innerHTML = 'SUCCESS MESSAGE HERE';
    e.preventDefault();
    SubForm();
})