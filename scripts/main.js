var inputNameEl = $('#inputName');
var inputEmailEl= $('#inputEmail');
var inputWebsiteEl = $('#inputWebsite');
var inputMessageEL = $('#inputMessage');
var formEL = $('form');
var formData={};




function storeData(){
	
	formData.name= inputNameEl.val();
	formData.email=inputEmailEl.val();
	formData.website=inputWebsiteEl.val();
	formData.message=inputMessageEL.val();

	
	return formData;
}

function clearFields(){
	inputNameEl.val('');
	inputMessageEL.val('');
	inputEmailEl.val('');
	inputWebsiteEl.val('')


	}
function verification(){

}

Array.prototype.count = function(obj){
    var count = this.length;
    if(typeof(obj) !== "undefined"){
        var array = this.slice(0), count = 0; 
        for(i = 0; i < array.length; i++){
            if(array[i] == obj){
                count++;
            }
        }
    }
    return count;
}

$('#button').mouseover(function(e){
	e.preventDefault();
	var errorArray=[inputNameEl.val()==='', 
	inputEmailEl.val()==='', 
	inputEmailEl.val().indexOf('@')===-1,
	inputWebsiteEl.val()==='',
	inputWebsiteEl.val().substring(0, 7)!==('http://'),
	inputMessageEL.val()===''];
	if(errorArray.count(true)>1){
		$('.btn').fadeIn(1000).css('background-color','#88C470');




	};

});


$('#button').mouseout(function(){
	$('.btn').css('background-color','black');
});


function resetValues(){
	$('#message1').html('');
	$('#message2').html('');
	$('#message3').html('');
	$('#message4').html('');
	$('.form-group').toggleClass('form-group');
}


formEL.on('submit',function(e){
	e.preventDefault();
	resetValues();
	if(inputNameEl.val()===''){
		$('#message1').html('Name cannot be left empty');
		$('#message1').css('color','red');
		$('#nameField').toggleClass('form-group has-error');


		}
			else if(inputEmailEl.val()===''){
				$('#message2').html('Email cannot be left empty');
				$('#message2').css('color','red');
				$('#emailField').toggleClass('form-group has-error');
				}
					else if(inputEmailEl.val().indexOf('@')===-1){
						$('#message2').html('Email must have contain  @');
						$('#message2').css('color','red');
						$('#emailField').toggleClass('form-group has-error');

					}

						else if(inputWebsiteEl.val()===''){
							$('#message3').html('website cannot be left empty');
							$('#message3').css('color','red');
							$('#websiteField').toggleClass('form-group has-error');
							}
								else if(inputWebsiteEl.val().substring(0, 7)!==('http://')) {
									$('#message3').html('website must start with http://');
									$('#message3').css('color','red');
									$('#websiteField').toggleClass('form-group has-error');

								}
									else if(inputMessageEL.val()===''){
										$('#message4').html('Message cannot be left empty');
										$('#message4').css('color','red');
										$('#textAreaField').toggleClass('form-group has-error');
										}
										else{
										storeData();
										clearFields();
}

})


















