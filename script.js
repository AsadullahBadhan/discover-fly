const firstClassPlusBtn = document.getElementById('first-class-plus-btn');
firstClassPlusBtn.addEventListener('click',()=> plusBtnHandler("first-class-count"));

const firstClassMinusBtn = document.getElementById('first-class-minus-btn');
firstClassMinusBtn.addEventListener('click', function(){
    const firstClassCount = document.getElementById('first-class-count');
    let countNumber = parseInt(firstClassCount.value);
    countNumber--;
    document.getElementById('first-class-count').value = countNumber; 
});

const economyPlusBtn = document.getElementById('economy-plus-btn');
economyPlusBtn.addEventListener('click', ()=> plusBtnHandler('economy-count'))

function plusBtnHandler(id){
    const count = document.getElementById(id);
    let countNumber = parseInt(count.value);
    countNumber++;
    document.getElementById(id).value = countNumber;
}