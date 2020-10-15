var Booster = function(game,x,y,key,frame) { //the same parameters as sprite does
    key = 'booster';
    Phaser.Sprite.call(this,game,x,y,key,frame);

    this.scale.setTo(.7);
    this.anchor.setTo(0.5);

    this.animations.add('spin'); //name this animation as 'spin', see preload.js

    this.game.physics.arcade.enableBody(this); //enable physics
    this.body.allowGravity = true; //not allow coins to fall   

    this.checkWorldBounds = true; //Phaser will check if coins are inside the gameworld or not
    this.onOutOfBoundsKill = true; //hide or kill the coin when it goes off screen

    this.events.onKilled.add(this.onKilled,this); //see functions below
    this.events.onRevived.add(this.onRevived, this);    // see functions below
};

//standard javascript inheritance
Booster.prototype = Object.create(Phaser.Sprite.prototype);
Booster.prototype.constructor = Booster;

Booster.prototype.onRevived = function() {
    this.body.velocity.y = 350; //horizontal speed of the coin
    this.animations.play('spin',8,true); //spin animations at 10fps
};

Booster.prototype.onKilled = function() {
    this.animations.frame = 0; //the coin will face the screen when it spin
};