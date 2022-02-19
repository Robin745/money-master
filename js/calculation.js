//custom function for collect input values
function getInput(id){
    const inputFieldValue = document.getElementById(id + '-input');
    const inputValue = parseInt(inputFieldValue.value);
    return inputValue

}
//custom function for collect html element
function getElement(id){
    const theElement = document.getElementById(id);
    return theElement

}
//custom function for calculate percentage
function getPercentage(percent, total) {
    return parseInt(((percent/ 100) * total).toFixed(2))
}

//click button Calculation to do something
document.getElementById('calculate-button').addEventListener('click',function(){   
    //hide previous erros messages after clicking calculate again
    getElement('input-error').style.display = 'none'
    getElement('cost-error').style.display = 'none'
    getElement('negetive-error').style.display = 'none'

    // total income 
    const incomeAmount = getInput('income')
    //mothly expenditures
    const foodExpennseAmount = getInput('food')
    const rentExpeseAmount = getInput('rent')
    const clothExpeseAmount = getInput('cloth')
    //set condition for NaN or negitive inputs
    if(isNaN(incomeAmount)==true||isNaN(rentExpeseAmount)==true||isNaN(foodExpennseAmount)==true||isNaN(clothExpeseAmount)==true|| incomeAmount<0||rentExpeseAmount<0||foodExpennseAmount<0|| clothExpeseAmount<0){
        getElement('input-error').style.display = 'block'
    }else{
        //total expense
        const totalExpense = foodExpennseAmount + rentExpeseAmount + clothExpeseAmount;
        const remainnigBalance = incomeAmount - totalExpense
        if(totalExpense > incomeAmount){
            getElement('cost-error').style.display = 'block'
        }else if(incomeAmount < 0 || rentExpeseAmount < 0 || foodExpennseAmount < 0 ||clothExpeseAmount < 0){
            getElement('negetive-error').style.display = 'block'
        }else{
             // set total expense 
            const setTotalExpense = getElement('total-expense').innerText = totalExpense;
            //set total balance
            getElement('total-balance').innerText = remainnigBalance;
        }
    }


})

//click save button
document.getElementById('save-button').addEventListener('click', function(){
    //hide previous erros messages after clicking calculate again
    getElement('savings-error').style.display = 'none'
    getElement('input-error').style.display = 'none'
    // total income 
    const incomeAmount = getInput('income')
    //mothly expenditures
    const foodExpennseAmount = getInput('food')
    const rentExpeseAmount = getInput('rent')
    const clothExpeseAmount = getInput('cloth')
    //total expenses
    const totalExpense = foodExpennseAmount + rentExpeseAmount + clothExpeseAmount;
    const remainnigBalance = incomeAmount - totalExpense
    //setting percentage calculations
    const percent = getInput('percentage');
    const percentage = getPercentage(percent , incomeAmount);
    //after all remainning balance
    const totalRemainningBalance = remainnigBalance - percentage
    if(isNaN(percent)==true ||percent<0){
        getElement('input-error').style.display = 'block'
    }else{
        if(percentage > remainnigBalance){
            getElement('savings-error').style.display = 'block'
        }else{
            getElement('saving-amount').innerText = percentage;
            getElement('remainning-balance').innerText = totalRemainningBalance ;
        }
        
    }
    
})