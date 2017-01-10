$(document).ready(function(){
      $(".not-aviable").on("click", function(){
        $("#b-popup").css({"display":"table"})
      })
      $("button").on("click", function(){
        $("#b-popup").css({"display":"none"})
      })
    })