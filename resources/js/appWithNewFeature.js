var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

/*//Math.floor return int nuber because Math.random() retrun decimal number
//Math.random() return decimal number between 1 to 0 and so we multiply in 6 then the number is
// be between  0 to 6 decimal number
// The + 1 is be between  0 to 6 in int
dice = Math.floor(Math.random() * 6) + 1;*/

/*document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';*/

//Function for init parm (Global variable) and other
function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');


}

//Function to toggle between 2 players
function nextPlayer(){
        
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

//Handle in button Roll Dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.Display the result 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'resources/css/image/dice-' + dice + '.png';

        //3.Update the round score If the rolled number was NOT a 1 Or get twice dice 6
        if(dice === 6 && lastDice === 6){
            //Player loose score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }else if(dice !== 1){
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //Next Player
            nextPlayer();
        }
        
        lastDice = dice;
    }
});

//Handle in button Hold
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //Add Current score to Global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Cheack if player won the game 
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Next Player
            nextPlayer();    
        }
    }
});

//Handle in button New Game -> passing the function init
document.querySelector('.btn-new').addEventListener('click', init);




























