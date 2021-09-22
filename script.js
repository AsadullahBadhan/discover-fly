function updateCount(ticketClass, isIncrease){
    let countNumber = toNumber(ticketClass + '-count');
    if(isIncrease === true){
        countNumber++;
    }
    if(isIncrease === false && countNumber > 0){
        countNumber--;
    }
    document.getElementById(ticketClass + '-count').value = countNumber;
    calculatePrice();
}

function toNumber(id){
    const element = document.getElementById(id);
    let number = parseInt(element.value);
    return number;
}

function calculatePrice(){
    let firstClassPrice = toNumber('first-class-count') * 150;
    let economyPrice = toNumber('economy-count') * 100;
    let subtotal = firstClassPrice + economyPrice;
    let vat = subtotal * 0.1;
    let grandTotal = vat + subtotal;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = grandTotal;
}