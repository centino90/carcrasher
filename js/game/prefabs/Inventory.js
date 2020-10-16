var Inventory = function(game){
    Phaser.Group.call(this, game); //Group is inheritance of Phaser with reference to the 'game'
};
Inventory.prototype = Object.create(Phaser.Group.prototype);
Inventory.prototype.constructor = Inventory;

//Two scoreboard function: show and restart
//scoreboard show will display a gameover text, the score, the high score and the the tap to play again text
Inventory.prototype.show = function(){
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

    this.x = 0; //starting position of scoreboard at the bottom of the screen

    // car collection
    this.game.add.bitmapText(this.game.world.centerX - 25,50,'minecraftia','My Cars',24);
    this.back = this.game.add.button(10,10,'back', this.restart);

    this.car1 = this.game.add.sprite(this.game.width/2 - 100,this.game.height*0.25,'black');
    this.car1.scale.setTo(.5);
    this.car1.animations.add('carSmoke', [0,1,2,1,0]);
    this.car1.animations.play('carSmoke',8,true);
    this.twc = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc.loop();
    this.use1 = this.game.add.button(this.game.width/2 - 111,(this.game.height*0.25) + this.car1.height,'useCar',this.useCar1);
    this.use1.scale.setTo(.5);

    this.car2 = this.game.add.sprite(this.game.width/2 + 100,this.game.height*0.25,'taxi');
    this.car2.scale.setTo(.5);
    this.car2.animations.add('carSmoke', [0,1,2,1,0]);
    this.car2.animations.play('carSmoke',8,true);
    this.twc2 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc2.loop();
    this.use2 = this.game.add.button(this.game.width/2 + 91,(this.game.height*0.25) + this.car1.height,'useCar', this.useCar2);
    this.use2.scale.setTo(.5);

    // star earned
    this.star = this.game.add.bitmapText(this.game.width/2 + 300,50,'minecraftia','Stars earned: ' + this.game.global.star,24);

    this.game.add.tween(this).from({x:this.game.width}, 1000, Phaser.Easing.Bounce.Out, true);

    this.curCar = this.game.add.bitmapText(this.game.world.centerX - 160,this.game.height/2 + 100,'minecraftia','Current car in use: ' + this.game.global.carKey,24);

    //restart the game
    // this.game.input.onDown.addOnce(this.restart, this);
};
Inventory.prototype.restart = function(){
    this.game.state.start('MainMenu', true, false);
};
Inventory.prototype.useCar1 = function() {
    this.game.global.carKey = 'black';
    // this.curCar = this.game.add.bitmapText(this.game.width/2 - 111,(this.game.height*0.5),'minecraftia','Car Used',24);
    // this.curCar2.visible = false;
    
};
Inventory.prototype.useCar2 = function() {
    this.game.global.carKey = 'taxi';
    // this.curCar2 = this.game.add.bitmapText(this.game.width/2 + 91,(this.game.height*0.5),'minecraftia','Car Used',24);
   
};