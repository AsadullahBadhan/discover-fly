function updateCount(ticketClass, isIncrease) {
    let countNumber = toNumber(ticketClass + '-count');
    if (isIncrease === true) {
        countNumber++;
    }
    if (isIncrease === false && countNumber > 0) {
        countNumber--;
    }
    document.getElementById(ticketClass + '-count').value = countNumber;
    calculatePrice();
}

function toNumber(id) {
    const element = document.getElementById(id);
    let number = parseInt(element.value);
    return number;
}

function calculatePrice() {
    let firstClassCount = toNumber('first-class-count');
    let economyCount = toNumber('economy-count');
    const firstClassPrice = firstClassCount * 150;
    const economyPrice = economyCount * 100;
    let subtotal = firstClassPrice + economyPrice;
    let vat = subtotal * 0.1;
    let grandTotal = vat + subtotal;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = grandTotal;
    document.getElementById('totalFirstClass').innerText = firstClassCount;
    document.getElementById('totalEconomy').innerText = economyCount;
    document.getElementById('total-price').innerText = grandTotal;
}

const bookingBtn = document.getElementById('booking-btn');
const bookingSection = document.getElementById('booking-section');
const checkOut = document.getElementById('check-out');
bookingBtn.addEventListener('click', () => {
    bookingSection.style.display = 'none';
    checkOut.style.display = 'block';
})