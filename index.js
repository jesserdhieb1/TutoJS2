let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let player={
    name: "jes",
    chips: 145,
    full:function (){
        return this.name+": "+this.chips+" $";
    }
};

let playerEl=document.querySelector("#player-el");
playerEl.textContent=player.full();

function getRandomCard(){
    let rnd = Math.floor(Math.random()*13)+1;
    if(rnd===11||rnd===12||rnd===13){
        rnd=10;
    }else if (rnd===1){
        rnd=11;}
    return rnd;
}

function startGame(){
    if(isAlive===false && sum<=21) {
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard, secondCard);
        sum = firstCard + secondCard;
        console.log(cards);
        renderGame();
    }
}

function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent=message;
    sumEl.textContent= "Sum: "+sum ;
    cardEl.textContent= "Cards: ";
    for (let i=0;i<cards.length;i++){
        cardEl.textContent+= cards[i]+", ";
    }
}

function newCard(){
    if(isAlive===true && sum<=21){
        let card = getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}
