var gameObject = {
  wins: 0,
  losses: 0,
  targetScore: 0,
  userScore: 0,
  cStatus: 'new game',
  dStatus: 'new game',
  gStatus: 'new game',
  rStatus: 'new game',
  crystalValue: 0,
  diamondValue: 0,
  gemstoneValue: 0,
  rubyValue: 0
}


$(document).ready(function() {
    
    var randomNumber = getRandomInt(20, 121);
    
    gameObject.targetScore = randomNumber;
    
    checkScore();
    
    $("#target-score").html(randomNumber);
    $("#crystal").on("click", function() {
    checkCrystal();
    checkScore();
    })
    $("#diamond").on("click", function() {
    checkDiamond();
    checkScore();
    })
    $("#gemstone").on("click", function() {
    checkGemstone();
    checkScore();
    })
    $("#ruby").on("click", function() {
    checkRuby();
    checkScore();
    })
});



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkCrystal() {

  if(gameObject.cStatus === 'new game') {
    
    gameObject.crystalValue = getRandomInt(1, 13);
    
    gameObject.userScore += gameObject.crystalValue;
    
    $("#user-score").html(gameObject.userScore);
    
    gameObject.cStatus = 'playing';
    } else if(gameObject.cStatus === 'playing') {
     
      var static = gameObject.crystalValue;
      
      gameObject.userScore += static;
      
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}


function checkDiamond() {
  
  if(gameObject.dStatus === 'new game') {
   
    gameObject.diamondValue = getRandomInt(1, 13);
    
    gameObject.userScore += gameObject.diamondValue;
    
    $("#user-score").html(gameObject.userScore);
    
    gameObject.dStatus = 'playing';
    } else if(gameObject.dStatus === 'playing') {
      
      var static = gameObject.diamondValue;
      
      gameObject.userScore += static;
      
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}

function checkGemstone() {
  
  if(gameObject.gStatus === 'new game') {
    
    gameObject.gemstoneValue = getRandomInt(1, 13);
    
    gameObject.userScore += gameObject.gemstoneValue;
    
    $("#user-score").html(gameObject.userScore);
    
    gameObject.gStatus = 'playing';
    } else if(gameObject.gStatus === 'playing') {
      
      var static = gameObject.gemstoneValue;
      
      gameObject.userScore += static;
      
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}

function checkRuby() {
  
  if(gameObject.rStatus === 'new game') {
    
    gameObject.rubyValue = getRandomInt(1, 13);
    
    gameObject.userScore += gameObject.rubyValue;
    
    $("#user-score").html(gameObject.userScore);
    
    gameObject.rStatus = 'playing';
    } else if(gameObject.rStatus === 'playing') {
      
      var static = gameObject.rubyValue;
      
      gameObject.userScore += static;
      
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}


function checkScore() {
  
  if(gameObject.userScore > gameObject.targetScore) {
    
    gameObject.losses++;
    $("#losses").html(gameObject.losses);
    resetGame();
  } else if(gameObject.userScore === gameObject.targetScore) {
    
    gameObject.wins++
    $("#wins").html(gameObject.wins);
    resetGame();
  } else {
    return;
  }
}

// Reset game 
function resetGame() {
  gameObject.targetScore = getRandomInt(20, 121);
  $("#target-score").html(gameObject.targetScore);
  gameObject.userScore = 0;
  $("#user-score").html(gameObject.userScore);
  gameObject.cStatus = 'new game';
  gameObject.dStatus = 'new game';
  gameObject.gStatus = 'new game';
  gameObject.rStatus = 'new game';
  crystalValue = 0;
  diamondValue = 0;
  gemstoneValue = 0;
  rubyValue = 0;
}