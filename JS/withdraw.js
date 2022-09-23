const btnWithdraw = document.getElementById('btn-withdraw');

btnWithdraw.addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const inputWithdrawAmount = withdrawField.value;
    const currentWithdraw = document.getElementById('withdraw');
    const currentWithdrawAmount = parseFloat(currentWithdraw.innerText)+parseFloat(inputWithdrawAmount);


    const currentBalance = document.getElementById('balance');
    const previousBalance = currentBalance.innerText;
    withdrawField.value = '';
    if (parseFloat(inputWithdrawAmount)>parseFloat(previousBalance)){
        alert ("You Do not Have Sufficient Balance");
        return;
    }
    else if (parseFloat(inputWithdrawAmount)<0 || isNaN(parseFloat(inputWithdrawAmount))){
        alert ("Please input currect amount you want to withdraw");
        return;
    }
    
    currentWithdraw.innerText = currentWithdrawAmount;
    
    const currentBalanceTotal = parseFloat(previousBalance)-parseFloat(inputWithdrawAmount);
    currentBalance.innerText = currentBalanceTotal;

    
})
