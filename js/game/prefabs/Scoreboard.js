var Scoreboard = function(game){
    Phaser.Group.call(this, game); //Group is inheritance of Phaser with reference to the 'game'
};
Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

//Two scoreboard function: show and restart
//scoreboard show will display a gameover text, the score, the high score and the the tap to play again text
Scoreboard.prototype.show = function(star,time){
    //declare local variables
    var bmd, background, gameoverText, highStarText, highTimeText, newHighStarText, newHighTimeText, starText, timeText, returnText;

    //bitmapdata is like a canvass where we can draw or write on them
    //in this game we use game.width and game.height to show our bitmapdata full screen
    bmd = this.game.add.bitmapData(this.game.width, this.game.height);
    bmd.ctx.fillStyle = '#000'; //black color
    bmd.ctx.fillRect(0,0, this.game.width, this.game.height); //draw rectangle

    background = this.game.add.sprite(0,0, bmd);
    background.alpha = 0.9; //opacity

    this.add(background); // our scoreboard

    // change new high star or survival time if true
    var isNewHighSurvival = false;
    var highSurvival = localStorage.getItem('highSurvival');
    if (!highSurvival || highSurvival < time) {
        isNewHighSurvival = true;
        highSurvival = time;
        localStorage.setItem('highSurvival', highSurvival);
    }
    var isNewHighStar = false;
    var highStar = localStorage.getItem('highStar');
    if (!highStar || highStar < star) {
        isNewHighStar = true;
        highStar = star;
        localStorage.setItem('highStar', highStar);
    }

    this.y = this.game.height; //starting position of scoreboard at the bottom of the screen

    gameoverText =  this.game.add.bitmapText(0, 100, 'minecraftia', 'You Lost.', 36);
    gameoverText.x = this.game.width/2 - (gameoverText.textWidth/ 2);
    this.add(gameoverText);

    starText = this.game.add.bitmapText(0, 200, 'minecraftia', 'Stars Collected: ' + star, 24);
    starText.x = this.game.width / 2 - (starText.textWidth/ 2);
    this.add(starText);

    timeText = this.game.add.bitmapText(0, 250, 'minecraftia', 'Survival time: ' + time + ' seconds', 24); 
    timeText.x = this.game.width / 2 - (timeText.textWidth/ 2);
    this.add(timeText);

    highStarText = this.game.add.bitmapText(0, 300, 'minecraftia', 'Your Highest Star count per run: ' + highStar, 24);
    highStarText.x = this.game.width / 2 - (highStarText.textWidth/ 2);
    this.add(highStarText);

    highTimeText = this.game.add.bitmapText(0, 350, 'minecraftia', 'Your Highest Survival time per run: ' + highSurvival + ' seconds', 24);
    highTimeText.x = this.game.width / 2 - (highTimeText.textWidth/ 2);
    this.add(highTimeText);

    this.restart = this.game.add.button(this.game.width * .85,10, 'again', this.restart);
    this.restart.animations.add('none', [0]);
    this.restart.animations.play('none',14,false);
    this.restart.scale.setTo(0.75);

    this.return = this.game.add.button(10,10, 'back', this.backToMenu);
    this.return.animations.add('none', [0]);
    this.return.animations.play('none',14,false);
    this.return.scale.setTo(1);

    if (isNewHighStar) {
        newHighStarText = this.game.add.bitmapText(0, 100, 'minecraftia', 'New High Star count!', 12);
        newHighStarText.tint = 0x4ebef7; //'#4ebef7'
        newHighStarText.x = gameoverText.x + gameoverText.textWidth + 40;
        newHighStarText.angle = 45;
        this.add(newHighStarText);
    }
    if (isNewHighSurvival) {
        newHighTimeText = this.game.add.bitmapText(0, 150, 'minecraftia', 'New High Survival Time!', 12);
        newHighTimeText.tint = 0x4ebef7; //'#4ebef7'
        newHighTimeText.x = gameoverText.x + gameoverText.textWidth + 40;
        newHighTimeText.angle = 45;
        this.add(newHighTimeText);
    }
    this.game.add.tween(this).to({y:0}, 1000, Phaser.Easing.Bounce.Out, true);

    //restart the game
    // this.game.input.onDown.addOnce(this.restart, this);
};
Scoreboard.prototype.restart = function(){
    this.game.state.start('Game', true, false);
};
Scoreboard.prototype.backToMenu = function(){
    this.game.state.start('MainMenu', true, false);
};