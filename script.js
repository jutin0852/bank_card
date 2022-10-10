var cardForm=document.forms['card'];
//**************card inputs
  function numInput(){
    var cardNumber=document.getElementById('number').value;
    document.getElementById("cardnum").textContent=cardNumber;   
}
function nameInput(){
    var cardName=document.getElementById("name").value;
    document.getElementById("cardname").textContent=cardName;
}
var cvc=cardForm['cvc'];
cvc.addEventListener('input',function(){
   var cvvvalue= cvc.value;
   document.getElementById('cvv').textContent=cvvvalue;

})
function monthInput(){
    var cardMonth=document.getElementById("month").value;
    document.getElementById("M").textContent=cardMonth;
}
function yearInput(){
    var cardYear=document.getElementById('year').value;
    document.getElementById('Y').textContent=cardYear;
}