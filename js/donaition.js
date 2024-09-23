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
        
                // add history line 
                const historyItem = document.createElement('div');
                historyItem.className = "bg-white space-y-2 p-5 w-7/12 mx-auto border rounded-lg";
                historyItem.innerHTML=`<h2 class = "text-2xl font-bold mx-auto justify-center">${donationAdd} Taka is donatade for famine 2024 at feni bangladesh</h2>
                <p> ${new Date().toLocaleDateString()}</p>`;
                const historyContainer = document.getElementById('history-container');

                historyContainer.insertBefore(historyItem, historyContainer.firstChild)




                // h2.innerText = `${donationAdd} Taka is donatade for famine -2024 at feni bangladesh`
                // // console.log(h2);
                // document.getElementById('history').appendChild(h2);
                // document.getElementById('history-container').appendChild(historyItem);
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

                        // add history line 
                        const historyItem = document.createElement('div');
                        historyItem.className = "bg-white space-y-2 p-5 w-7/12 mx-auto border rounded-lg";
                        historyItem.innerHTML=`<h2 class = "text-2xl font-bold mx-auto justify-center">${donationAdd}Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
                        <p> ${new Date().toLocaleDateString()}</p>`;
                        const historyContainer = document.getElementById('history-container');
        
                        historyContainer.insertBefore(historyItem, historyContainer.firstChild)
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

                        // add history line 
                        const historyItem = document.createElement('div');
                        historyItem.className = "bg-white space-y-2 p-5 w-7/12 mx-auto border rounded-lg";
                        historyItem.innerHTML=`<h2 class = "text-2xl font-bold mx-auto justify-center">${donationAdd}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
                        <p> ${new Date().toLocaleDateString()}</p>`;
                        const historyContainer = document.getElementById('history-container');
        
                        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
});
