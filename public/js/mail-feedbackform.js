(function(){
      emailjs.init("user_jmnF1YC49paVFwkbJRipP");
   })();

var orderform = $("#feedbackform");
orderform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "mail_ru";
  var template_id = "feedback";

  orderform.find("button").text("Отправляется...");
  emailjs.sendForm(service_id,template_id,"feedbackform")
  	.then(function(){ 
    	console.log("Sent!");
       orderform.find("button").text("Отправлено");
    }, function(err) {
       console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       orderform.find("button").text("Oщибка");
    });
  return false;
});