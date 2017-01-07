(function(){
      emailjs.init("user_jmnF1YC49paVFwkbJRipP");
   })();

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "mail_ru";
  var template_id = "template_sIOLLdKk";

  myform.find("button").text("Отправляется...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	console.log("Sent!");
       myform.find("button").text("Отправлено");
    }, function(err) {
       console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});