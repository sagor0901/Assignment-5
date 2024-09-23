// history part 
const donationButton =document.getElementById('donation-button');
const historyTab = document.getElementById('history-button');
historyTab.addEventListener('click', function(){

historyTab.classList.add("font-bold","text-xl", "bg-[#B4F461]");
donationButton.classList.remove("font-bold","text-xl", "bg-[#B4F461]");

document.getElementById('history-container').classList.remove('hidden');
document.getElementById('donaition-container').classList.add('hidden');

});
donationButton.addEventListener('click', function(){
    historyTab.classList.remove("font-bold","text-xl", "bg-[#B4F461]");
    donationButton.classList.add("font-bold","text-xl", "bg-[#B4F461]");

    document.getElementById('donaition-container').classList.remove('hidden')
    document.getElementById('history-container').classList.add('hidden')
});

// faq part 
const faqSection =document.getElementById('blog-btn');
faqSection.addEventListener('click', function(){
    document.getElementById('donaition-container').classList.add('hidden');
    document.getElementById('btn-container').classList.add('hidden');
    document.getElementById('faq-container').classList.remove('hidden');
})