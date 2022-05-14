
// mainCalculator
const loan = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const timeRepay = document.querySelector('#repay');
const totalPay = document.querySelector 
('#totalPayment');
const monthlyPay = document.querySelector('#monthlyPayment');
const totalInt = document.querySelector('#totalInterest');
const calcButton = document.querySelector('.calc');
const card = document.querySelector('.card');
const loader = document.querySelector('#loader');
const results = document.querySelector('.lowerSection')



calcButton.addEventListener('click', eventFunction01)

function eventFunction01(e){
    if(loan.value===""){
        alert("Enter Loan Amount")
    }else
    if(interest.value===""){
        alert("Enter Interest Rate")
    }else
    if(timeRepay.value===""){
        alert("Enter Years to Repay")
    }else{
        
        totalInt.value = parseFloat((loan.value*interest.value*timeRepay.value))/100
        totalPay.value = parseFloat(loan.value)+parseInt(totalInt.value);
        monthlyPay.value = (totalPay.value)/((timeRepay.value)*12)
        
        // loader gif
        loader.style.display="block";
        results.style.display="none";

        //removing padding of card
        card.style.padding.bottom="0";

        setTimeout(calculateResults, 2000);
        //integrating result
        // results.style.display="block";
    }
    e.preventDefault();
}

function calculateResults(e){
    loader.style.display="none";
    results.style.display="block";
    // e.preventDefault();
}














