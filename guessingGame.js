$(document).ready(function () { 

 
$(".GuessedBtn").click(function(){
let numberGuessed = $(".numberGuessed").val();
 
if (numberGuessed === 8){
 let ifCorrect = $(".ifCorrect")
 ifCorrect.text("correct!!");
} else if(numberGuessed < 8){
    let ifCorrect = $(".ifCorrect")
    ifCorrect.text("You Guessed to low")
}else if (numberGuessed > 8){
    let ifCorrect = $(".ifCorrect")
    ifCorrect.text(" you Guessed to High!!")
};


//
//$(document).ready(function(){
  //  $('#TextBoxId').keypress(function(e){
    //  if(e.keyCode==13)
      //$('#linkadd').click();
    //});
//});

//


    });
//change color of page if clicked
});