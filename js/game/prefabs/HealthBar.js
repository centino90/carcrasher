var HealthBar = function(game,x,y,key) { 
    Phaser.Image.call(this,game,x,y,key);
    // this.scale.setTo(0.5);

    this.checkWorldBounds = true; //Phaser will check if coins are inside the gameworld or not
};

//standard javascript inheritance
HealthBar.prototype = Object.create(Phaser.Image.prototype);
HealthBar.prototype.constructor = HealthBar;

HealthBar.prototype.setPercent = function(percent) {
        percent = percent/100;
        this.width=300*percent;
};



