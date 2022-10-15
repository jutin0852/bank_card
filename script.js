var cardForm=document.forms['card'];
var cardNumber=document.getElementById('number');
var cardName=document.getElementById("name");
var cvc=document.getElementById('cvc');
var cardMonth=document.getElementById("month");
var cardYear=document.getElementById('year');
var complete=document.getElementById('complete');
var second=document.getElementById("second")

//**************card inputs
  function numInput(){
    document.getElementById("cardnum").textContent=cardNumber.value;   
    blank[1].textContent="";
    if(isNaN(cardNumber.value)){
        blank[1].textContent="Wrong format, numbers only";
    }
    

}
function nameInput(){
    document.getElementById("cardname").textContent=cardName.value.toUpperCase();
    blank[0].textContent="";

}

cvc.addEventListener("input",function(e){
   document.getElementById('cvv').textContent=cvc.value;
   blank[3].textContent="";
   if(isNaN(cvc.value)){
    blank[3].textContent="Numbers only";
}})


function monthInput(){

    document.getElementById("M").textContent=cardMonth.value;
    blank[2].textContent="";
    if(isNaN(cardMonth.value||cardYear.value)){
        blank[2].textContent="Numbers only";
    }
    
}
function yearInput(){
   
    document.getElementById('Y').textContent=cardYear.value;
        blank[2].textContent=""
    
    if(isNaN(cardYear.value||cardMonth.value)){
        blank[2].textContent="Numbers only";
    }
}


//card validation
var blank=document.getElementsByClassName('blank');
cardForm.addEventListener('submit',function(e){

    e.preventDefault();
    if(cardNumber.value.length<16){
        blank[1].textContent="Card number is 16-digits"}
     if(cardMonth.value.length<2 || cardYear.value.length<2){
            blank[2].textContent="Wrong format"}
     if(cvc.value.length<2){
        blank[3].textContent="Wrong format"}
        
    if(cardNumber.value==""||cardNumber.value==null){
       blank[1].textContent="Can't be blank";
       }
    if(cardName.value==""||cardName.value==null){
        blank[0].textContent="Can't be blank";}
       
     if(cvc.value==""||cvc.value==null){
        blank[3].textContent="Can't be blank";  
     }
     if(cardMonth.value==""||cardMonth.value==null || cardYear.value==""||cardYear.value==null){
        blank[2].textContent="Can't be blank";}
     if(isNaN(cardNumber.value)){
        blank[1].textContent="Wrong format, numbers only";
       
    }
    if(isNaN(cvc.value)){
        blank[3].textContent="Numbers only";
       
    }
    if(isNaN(cardMonth.value||cardYear.value)){
        blank[2].textContent="Numbers only";}
       
    
if(blank[0].textContent=="" && blank[1].textContent=="" && blank[2].textContent=="" && blank[3].textContent=="" ){
  complete.style.display="block";
  card.style.display="none"    
} 
})
