document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositFieldNumber = inputNumber('deposite-field');
    if (depositFieldNumber > 0) {
        const depositAmountNumber = textNumber('deposit-amount', depositFieldNumber);
        const blanceAmountNumber = textNumber('blance-amount', depositFieldNumber);
    }
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawFieldNumber = inputNumber('withdraw-field');
    const p = parseInt(document.getElementById('blance-amount').innerText)
    if (p < withdrawFieldNumber) {
        alert('মনু তোমার বাপের ব্যাংক পাইছো আই?')
        return;
    }
    else if (withdrawFieldNumber > 0) {
        const withdrawAmountNumber = textNumber('withdraw-amount', withdrawFieldNumber);
        const blanceAmountNumber = substracBlance('blance-amount', withdrawFieldNumber);
    }
});
function inputNumber(inputField) {
    const inputText = document.getElementById(inputField);
    const inputNumber = parseFloat(inputText.value);
    inputText.value = '';
    return inputNumber;
};
function textNumber(previouseAmount, inputAmount) {
    const allText = document.getElementById(previouseAmount);
    const allTextNumber = parseFloat(allText.innerText);
    const cureentAmount = allTextNumber + inputAmount;
    allText.innerText = cureentAmount;
};
function substracBlance(previouseAmount, inputAmount) {
    const previouseBlance = document.getElementById(previouseAmount);
    const previouseBlanceNumber = parseFloat(previouseBlance.innerText);
    const newTotalBlance = previouseBlanceNumber - inputAmount;
    previouseBlance.innerText = newTotalBlance;
};