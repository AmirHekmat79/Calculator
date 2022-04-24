let $ = document;
let inputElem = $.querySelector('input');
let calcButtons = $.querySelectorAll('.arthimethicBtn');
let AcBtnElem = $.querySelector('.AcBtn');
let cBtnElem = $.querySelector('.clearBtn');
let equalBtn = $.querySelector('.equalBtn');
//this code makes input disabled
inputElem.setAttribute('disabled' ,'true');
//add click event on calculator's buttons
calcButtons.forEach(function(Btn){
    Btn.addEventListener('click',function(event){
        inputElem.value  += event.target.innerHTML;
    })
})
//add click event on calculator's AC button
AcBtnElem.addEventListener('click' , function(){
    inputElem.value = '';
})
//add click event on calculator's C(clear) button
cBtnElem.addEventListener('click' , function(){
   inputElem.value = inputElem.value.slice(0,-1);
})
//add click event on calculator's equal button
equalBtn.addEventListener('click' , function(){
    if(inputElem.value){
        inputElem.value = eval(inputElem.value);
    }
})