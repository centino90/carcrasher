var Star = function(game,x,y,key,frame) { //the same parameters as sprite does
    key = 'star';
    Phaser.Sprite.call(this,game,x,y,key,frame);

    this.scale.setTo(.5);
    // this.anchor.setTo(0.5);

    this.animations.add('jump', [0,1,2,1,0]); 

    this.game.physics.arcade.enableBody(this); //enable physics
    // this.body.allowGravity = true; //not allow coins to fall   

    this.checkWorldBounds = true; //Phaser will check if coins are inside the gameworld or not
    this.onOutOfBoundsKill = true; //hide or kill the coin when it goes off screen

    this.events.onKilled.add(this.onKilled,this); //see functions below
    this.events.onRevived.add(this.onRevived, this);    // see functions below
};

//standard javascript inheritance
Star.prototype = Object.create(Phaser.Sprite.prototype);
Star.prototype.constructor = Star;

Star.prototype.onRevived = function() {
    this.body.velocity.y = 350; //horizontal speed of the coin
    this.animations.play('jump',8,true); //spin animations at 10fps
};

Star.prototype.onKilled = function() {
    this.animations.frame = 0; //the coin will face the screen when it spin
};