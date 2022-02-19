// collect input values
function getInput(id){
    const inputFieldValue = document.getElementById(id + '-input');
    const inputValue = parseInt(inputFieldValue.value);
    return inputValue

}
function getElement(id){
    const theElement = document.getElementById(id);
    return theElement

}
function getPercentage(percent, total) {
    return parseInt(((percent/ 100) * total).toFixed(2))
}

//click button Calculation to do something
document.getElementById('calculate-button').addEventListener('click',function(){
    // total income 
    const incomeAmount = getInput('income')
    //mothly expenditures
    const foodExpennseAmount = getInput('food')
    const rentExpeseAmount = getInput('rent')
    const clothExpeseAmount = getInput('cloth')

    if(isNaN(incomeAmount)==true || isNaN(rentExpeseAmount)==true || isNaN(foodExpennseAmount)==true || isNaN(clothExpeseAmount)==true){
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
    // total income 
    const incomeAmount = getInput('income')
    //mothly expenditures
    const foodExpennseAmount = getInput('food')
    const rentExpeseAmount = getInput('rent')
    const clothExpeseAmount = getInput('cloth')

    const totalExpense = foodExpennseAmount + rentExpeseAmount + clothExpeseAmount;
    const remainnigBalance = incomeAmount - totalExpense

    const percent = getInput('percentage');

    const percentage = getPercentage(percent , incomeAmount);

    getElement('saving-amount').innerText = percentage;


})