const inputBill = document.querySelector('.tip-option__bill-wrapper .input-big');
const errorBill = document.querySelector('.tip-option__bill-wrapper .error');

const inputPeople = document.querySelector('.tip-option__people-wrapper .input-big');
const errorPeople = document.querySelector('.tip-option__people-wrapper .error');

const radioTips = document.querySelectorAll('input[type=radio][name=tip]');

const customTip = document.querySelector('input[type=number][name=tip]');

const resultAmount = document.querySelector('.result-amount');
const resultTotal = document.querySelector('.result-total');
const btnReset = document.querySelector('.btn-reset');

let tipPerson
let totalPerson


/*
// Test Pobranych elementów

     console.log(inputBill);
     console.log(errorBill);
     console.log(inputPeople);
     console.log(errorPeople);
     console.log(radioTips);
     console.log(customTip);
     console.log(resultAmount);
     console.log(resultTotal);
     console.log(btnReset);

*/


const reset = () => {

     resultTotal.textContent = '';
     resultAmount.textContent = '';
     errorBill.classList.remove("show");
     errorPeople.classList.remove("show");
     inputBill.value = '';
     inputPeople.value = '';
     customTip.value = '';
     radioTips.forEach((e) => 
          e.checked = false
     );

}

const selectTip = () => {
     if(customTip.value !== ''){
          radioTips.forEach((e) => {
               e.checked = false; 
          })
     }  
}

const selectTipRadio = () => {
     if(customTip.value !== ''){
          customTip.value = '';
     }
}






// Walidacja
const billValid = () => {
     if(inputBill.value == 0){
          errorBill.classList.add("show");
          inputBill.style.borderColor = "#E17052"
     } else {
          errorBill.classList.remove("show");
          inputBill.style.borderColor = "#26C2AE"
     }
}

const peopleValid = () => {
     if(inputPeople.value == 0){
          errorPeople.classList.add("show");
          inputPeople.style.borderColor = "#E17052"

     } else {
          errorPeople.classList.remove("show");
          inputPeople.style.borderColor = "#26C2AE"
     }
}



// const customValid = () => {
//      if(customTip.value == 0){
//           customTip.style.borderColor = "#E17052";
//      } else{
//           customTip.style.borderColor = "#26C2AE";

//      }
// }
// 





// Kalkulator
// const calculatorTip = () => {

//      if(customTip.value == ''){
//           radioTips.forEach((e) => {
//                if(e.checked){
//                     tipPerson = (inputBill.value * (e.value / 100)) / inputPeople.value;
//                     resultAmount.textContent = '$' + tipPerson.toFixed(2);
//                }
//           })
//      } else {
//          tipPerson = (inputBill.value * (customTip.value / 100)) / inputPeople.value;
//          resultAmount.textContent = '$' + tipPerson.toFixed(2);
         
//      }
// }


const calculatorTip = () => {

     if(customTip.value == ''){
          radioTips.forEach((e) => {
               if(e.checked){
                    tipPerson = (inputBill.value * (e.value / 100)) / inputPeople.value;

                    if(isNaN(tipPerson) || !isFinite(tipPerson)){
                         resultAmount.textContent = 'Error'
                         resultAmount.style.color = "#E17457"
                         
                    } else {
                         resultAmount.textContent = '$' + tipPerson.toFixed(2); 
                         resultAmount.style.color = "#26C2AE"
                    }
               }
          })
     } else {
         tipPerson = (inputBill.value * (customTip.value / 100)) / inputPeople.value;
         if(isNaN(tipPerson) || !isFinite(tipPerson)){
          resultAmount.textContent = 'Error'
          resultAmount.style.color = "#E17457"
          
     } else {
          resultAmount.textContent = '$' + tipPerson.toFixed(2); 
          resultAmount.style.color = "#26C2AE"
     }
        
         
     }
}



const calculatorTotal = () => {

     if(customTip.value == ''){
          radioTips.forEach((e) => {
               if(e.checked){
                    totalPerson = (inputBill.value * (e.value / 100)) / inputPeople.value + (parseFloat(inputBill.value) / inputPeople.value);
                    if(isNaN(tipPerson) || !isFinite(tipPerson)){
                         resultTotal.textContent = 'Error'
                         resultTotal.style.color = "#E17457"
                    }  else {
                         resultTotal.textContent = '$' + totalPerson.toFixed(2);
                         resultTotal.style.color = "#26C2AE"
                    }
                    
               }
          })
     } else {
         totalPerson = (inputBill.value * (customTip.value / 100)) / inputPeople.value + (parseFloat(inputBill.value) / inputPeople.value);
         if(isNaN(tipPerson) || !isFinite(tipPerson)){
          resultTotal.textContent = 'Error'
          resultTotal.style.color = "#E17457"
     }  else {
          resultTotal.textContent = '$' + totalPerson.toFixed(2);
          resultTotal.style.color = "#26C2AE"
     }
        
         
     }
}


const calculator = () => {

     calculatorTip()
     calculatorTotal()
     
}
// 





// if(inputBill.value !== '' && inputPeople.value !== ''){

     inputBill.addEventListener('change', calculator);
     inputPeople.addEventListener('change', calculator);
     radioTips.forEach(radio => {
     radio.addEventListener('change', calculator);
     });
     customTip.addEventListener('change', calculator);

// }




   



btnReset.addEventListener('click', reset);


customTip.addEventListener('keyup', selectTip);
radioTips.forEach((e) => {
     e.addEventListener('click', selectTipRadio);
   });

inputBill.addEventListener('input', billValid);
inputPeople.addEventListener('input', peopleValid);








