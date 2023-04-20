//javascript file

function makeSuggestion(params) {
    $.ajax({
     url: "https://localhost:7253/swagger/index.html",
     method: "GET",
     dataType: "json",
     success: function(data) {
         // Do something with the data
     },
     error: function(error) {
         console.log(error);
     }
 }); 
 }
 

