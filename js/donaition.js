document.getElementById('donate-now-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = getInputValueById('input-amount-field');
    
    const mainBalance = getTextValueById('my-balance');
    // console.log(inputAmount, amount);
    
    if(inputAmount < 0 || isNaN(inputAmount)){
        alert('valid a perfect amount');
    }
    else{
        const donation = mainBalance - inputAmount;
        document.getElementById('my-balance').innerText = donation;
        const donatedBalance = getTextValueById('donated-balance')
        const donationAdd = donation + donatedBalance;
        document.getElementById('donated-balance').innerText = inputAmount;
    }
});
