let clickValue = 1
let totalClicks = 0
let clickPoints = 0

const upgradePrice = 5
const money = document.getElementById('money')
const clickerButton = document.getElementById('clicker')
const showTotal = document.getElementById('totalClicks')
clickerButton.addEventListener('click', () => {
    totalClicks += clickValue
    clickPoints += clickValue
    showTotal.innerHTML = `${totalClicks}`;
    money.innerHTML = `${clickPoints}`
})

const shopButton = document.getElementById('upgrade')
shopButton.addEventListener('click', () => {
    if (clickPoints >= upgradePrice) {
        clickPoints -= upgradePrice
        clickValue += 1
    }
    money.innerHTML = `${clickPoints}`
})