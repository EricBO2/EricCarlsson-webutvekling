const showeDisclaimer=document.getElementById('Show-disclaimer');
const disclaimer=document.getElementById('Disclaimer');

showeDisclaimer.addEventListener('click', function(){
    disclaimer.classList.toggle('Display-off')
});