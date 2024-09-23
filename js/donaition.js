// frist section donation function
document.getElementById('donate-now-btn').addEventListener('click', function(){
    // event.preventDefault();
    const inputAmount = getInputValueById('input-amount-field');
    
    const mainBalance = getTextValueById('my-balance');
    // console.log(inputAmount, amount);
    
    if(inputAmount < 0 || isNaN(inputAmount) || inputAmount >mainBalance){
        alert('valid a perfect amount');
    }
    else{
        const donation = mainBalance - inputAmount;
        document.getElementById('my-balance').innerText = donation;
        const donatedBalance = getTextValueById('donated-balance')
        const donationAdd = inputAmount + donatedBalance;
        document.getElementById('donated-balance').innerText = donationAdd;
    }
});

// secound section donation function 

document.getElementById('flood-btn').addEventListener('click', function(){
    // event.preventDefault();
    const inputAmount = getInputValueById('input-amount');
    
    const mainBalance = getTextValueById('my-balance');
    // console.log(inputAmount, amount);
    
    if(inputAmount < 0 || isNaN(inputAmount) || inputAmount >mainBalance){
        alert('valid a perfect amount');
    }
    else{
        const donation = mainBalance - inputAmount;
        document.getElementById('my-balance').innerText = donation;
        const donatedBalance = getTextValueById('donated-balance-feni')
        const donationAdd = inputAmount + donatedBalance;
        document.getElementById('donated-balance-feni').innerText = donationAdd;
    }
});

// third section donation function 
document.getElementById('quota-btn').addEventListener('click', function(){
    // event.preventDefault();
    const inputAmount = getInputValueById('input-amount-for-studend');
    
    const mainBalance = getTextValueById('my-balance');
    // console.log(inputAmount, amount);
    
    if(inputAmount < 0 || isNaN(inputAmount) || inputAmount >mainBalance){
        alert('valid a perfect amount');
    }
    else{
        const donation = mainBalance - inputAmount;
        document.getElementById('my-balance').innerText = donation;
        const donatedBalance = getTextValueById('donated-balance-student')
        const donationAdd = inputAmount + donatedBalance;
        document.getElementById('donated-balance-student').innerText = donationAdd;
    }
});