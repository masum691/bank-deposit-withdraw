
// function
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function updateTotal(fieldId, amount) {
    const total = getInnerTextValue(fieldId);
    const newTotal = total + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueText = fieldTag.innerText;
    const value = parseFloat(fieldValueText);
    fieldTag.innerText = value;
    return value;
}

function updateBalance(amount, isAdding) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

// event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
    else{
        alert('Unvalid number.')
    }
});


// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
    else if(amount > balance){
        alert('You can withdraw dollars equal to or less than the total balance.')
    }
    else{
        alert('Unvalid number.')
    }
})



