(function(){
      emailjs.init("user_jmnF1YC49paVFwkbJRipP");
   })();

var orderform = $("#orderform");
orderform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "mail_ru";
  var template_id = "order";

  orderform.find("#orderform-button").text("Отправляется...");
  emailjs.sendForm(service_id,template_id,"orderform")
  	.then(function(){ 
    	console.log("Sent!");
       orderform.find("#orderform-button").text("Отправлено");
    }, function(err) {
       console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       orderform.find("#orderform-button").text("Oшибка");
    });
  return false;
});