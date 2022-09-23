// Bank.html Page Starts 
const btnDeposit = document.getElementById('btn-deposit');

btnDeposit.addEventListener('click', function(){
    const depositField = document.getElementById('deposit-fld');
    const depositAmount = depositField.value;
    const deposited = document.getElementById('deposit');
    const depositedAmount = deposited.innerText;
    const currentDepositTotal = parseFloat(depositAmount)+parseFloat(depositedAmount);

    deposited.innerText = currentDepositTotal;
    const balance = document.getElementById('balance');
    const balanceCurrent = balance.innerText;
    const currentBalanceTotal = parseFloat(balanceCurrent)+parseFloat(depositAmount);
    balance.innerText = currentBalanceTotal;
    
    depositField.value = '';
})