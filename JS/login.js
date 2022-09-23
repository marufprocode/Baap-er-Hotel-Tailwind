document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    
    //Danger!: Do not verify email pass on the client side
    if(email === 'sontan@baap.com' && userPass === 'secretPass'){
        location.href = 'bank.html';
    }
    else{
        alert ('You typed worng pass, please input valid info');
        
    }
})

