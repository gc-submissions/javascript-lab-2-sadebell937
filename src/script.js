
const randomDamage = () => {
    return Math.floor(Math.random() * 11);
}
 

const chooseOption = (opt1,opt2)  => {
    const randNum =  Math.random();
    if (randNum == 0) {
        return opt1;
    }else{
        return opt2;
    }  
}

function attackPlayer(health) {
    return  (health - randomDamage());

}

const logHealth = (player,health) => {
    console.log("player health:" + health);
}

const logDeath = (winner, loser) => {
    console.log( winner + "defeated" + loser)
}

const isDead = (health) => { health <=0;
    Boolean

}
function fight(player1, player2, player1Health, player2Health) {
    const attacker = chooseOption
}
