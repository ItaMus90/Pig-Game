var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

/*//Math.floor return int nuber because Math.random() retrun decimal number
//Math.random() return decimal number between 1 to 0 and so we multiply in 6 then the number is
// be between  0 to 6 decimal number
// The + 1 is be between  0 to 6 in int
dice = Math.floor(Math.random() * 6) + 1;*/

/*document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2.Display the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'resources/css/image/dice-' + dice + '.png';
    
    //3.Update the round score If the rolled number was NOT a 1
    if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else if(dice === 1){
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        
        /*      
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        */
        
        //Instead to using remove and add and replace between 2 Players  wite if Stetment the class 'active'.
        //We can use in toggle that mean if the active doesnt appear add in this case 'active' else remove
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //hide the dice image 
        document.querySelector('.dice').style.display = 'none';
        
        
    }
    
});














