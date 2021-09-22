function updateCount(ticketClass, isIncrease){
    const classCount = document.getElementById(ticketClass + '-count');
    let countNumber = parseInt(classCount.value);
    if(isIncrease === true){
        countNumber++;
    }
    if(isIncrease === false && countNumber > 0){
        countNumber--;
    }
    document.getElementById(ticketClass + '-count').value = countNumber; 
}