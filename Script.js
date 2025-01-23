const showeDisclaimer=document.getElementById('Show-disclaimer');
const disclaimer=document.getElementById('Disclaimer');
const switchColor=document.getElementById('Swicth-color');
const teknikMain=document.getElementById('Teknik-main');


showeDisclaimer.addEventListener('click', function(){
    disclaimer.classList.toggle('Display-off')
});
switchColor.addEventListener('click', function(){
    teknikMain.classList.toggle('img-background');
    teknikMain.classList.toggle('black-background');
    
});