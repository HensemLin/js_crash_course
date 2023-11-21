let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "per", 
    chips: "125"
}

let messageEL = document.getElementById("message-el")
let cardEL = document.getElementById("card-el")
let cardELcontext = cardEL.textContent
let sumEL = document.getElementById("sum-el")
let sumELcontext = sumEL.textContent
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": $" + player.chips

function getRandomCards() {
    let randomCard = Math.floor(Math.random()*13) + 1

    if (randomCard > 10) {
        return 10
    }
    else if (randomCard === 1) {
        return 11
    }
    return randomCard
}

function startGame() {
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards.push(firstCard, secondCard)
    sum += firstCard+secondCard
    isAlive = true

    renderGame()
}

function renderGame() {
    if (sum<=20){
        message = "Do you want a new card?"
    } else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else{
        message = "You're out of the game!"
        isAlive = false
    }

    let multipleCards = ""
    for (let i=0; i<cards.length; i++) {
        multipleCards += " " + cards[i]
    }

    cardEL.textContent = cardELcontext + multipleCards
    sumEL.textContent = sumELcontext + " " + sum
    messageEL.textContent = message;
}; 

function newCard() {
    if (isAlive && !hasBlackJack) {
        console.log("draw a new card from deck")
        let card = getRandomCards()
        cards.push(card)
        sum += card
        renderGame()
    }
}