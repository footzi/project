$(document).ready(function(){
      $(".not-aviable").on("click", function(){
        $("#b-popup").css({"display":"table"})
      })
      $(".button-popup").on("click", function(){
        $("#b-popup").css({"display":"none"})
      })
    })