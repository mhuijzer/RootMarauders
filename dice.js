var influenceDiceGroup = document.getElementById('influenceDice');
var influenceBtn = influenceDiceGroup.getElementsByTagName('button')[0];
var influenceDice = influenceDiceGroup.getElementsByClassName('die');

var uprisingDiceGroup = document.getElementById('uprisingDie');
var uprisingBtn = uprisingDiceGroup.getElementsByTagName('button')[0];
var uprisingDice = uprisingDiceGroup.getElementsByClassName('die');

function rollDice(){
    roll = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    return roll.toString();
}

uprisingBtn.onclick = function(){
    Array.prototype.forEach.call(uprisingDice, uprisingDie => {
        Array.prototype.forEach.call(uprisingDie.getElementsByClassName('face'), face => {
            face.style.display = "none";
        });
        uprisingDie.getElementsByClassName(rollDice())[0].style.display = 'flex';
    });
}

influenceBtn.onclick = function(){
    Array.prototype.forEach.call(influenceDice, influenceDie => {
        Array.prototype.forEach.call(influenceDie.getElementsByClassName('face'), face => {
            face.style.display = "none";
        });
        influenceDie.getElementsByClassName(rollDice())[0].style.display = 'flex';
    });
}