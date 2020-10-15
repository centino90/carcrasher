

var Van = function(game,x,y,key,frame) {
    key = 'van';
    Phaser.Sprite.call(this,game,x,y,key,frame);

    this.scale.setTo(0.5);
    this.anchor.setTo(0.5);

    this.animations.add('fly');

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = true;

    this.checkWorldBounds = true;
    this.onOutOfBoundsKill = true;

    this.events.onRevived.add(this.onRevived, this);
};

Van.prototype = Object.create(Phaser.Sprite.prototype);
Van.prototype.constructor = Van;

Van.prototype.onRevived = function() {
    // this.game.add.tween(this).to({y: this.y - 16}, 500, Phaser.Easing.Linear.NONE, true,0,Infinity,true);

    this.body.velocity.y = 510;
    this.animations.play('fly', 8, true);
};