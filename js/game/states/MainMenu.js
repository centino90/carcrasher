ZenvaRunner.MainMenu = function() {};

ZenvaRunner.MainMenu.prototype = {
    create: function() {

        // Moving Background: our asset key for this are 'background' 'foreground', and ground
        // Moving Background: our asset key for this are 'background' 'foreground', and ground
        this.mountain = this.game.add.image(0,0,'mountain');
        this.mountain.height = this.game.height;
        this.mountain.width = this.game.width;
 
        this.logo = this.game.add.sprite(this.game.world.centerX-190.75,this.game.world.centerY, 'carcrasher');
        this.logo.scale.setTo(0.5);
        this.logoA = this.logo.animations.add('fade', [0,0,1,1,2,2,3,3,4,4]);
        this.logo.animations.play('fade',12,false);
        

        this.logoA.onComplete.add(this.renderTap, this);
    
        //to make our character more interesting, tween is added.
        // this.game.add.tween(this.player).to({y:this.player.y-16}, 500,Phaser.Easing.Linear.NONE, true,0,Infinity,true);

        // adding our logo at the first part of our game
        // this.splash = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'logo');
        // this.splash.anchor.setTo(0.5);

        // // adding our text menu: position, asset key, text to show, pixel size
        // this.startText = this.game.add.bitmapText(0,0, 'minecraftia','tap to start',32);

        // // calculating the text positioning
        // this.startText.x = this.game.width / 2-this.startText.textWidth/2;
        // this.startText.y = this.game.height /2 + this.splash.height / 2;
    },
    update: function() {
        // if(this.game.input.activePointer.justPressed()){ //this line is the trigger, 'activePointer' in phaser can be the mouse or touch depends on the device
        //     this.game.state.start('Game'); //call the start state when the condition above is met
        // }
    },
    renderTap: function() {
        this.tap = this.game.add.button(this.game.world.centerX - 112.5,this.game.height - 150, 'tap', this.startGame);
        this.tap.animations.add('multiply', [0,0,1,1,2,2,3,3,2,2,1,1,0,0]);
        this.tap.animations.play('multiply',14,true);
        this.tap.scale.setTo(0.75);

        this.inventory = this.game.add.button(this.game.world.centerX + this.tap.width,this.game.height - 126, 'inventory', this.triggerInventory);
        this.inventory.scale.setTo(0.75);

        this.shop = this.game.add.button(this.game.world.centerX + this.tap.width + (this.inventory.width * 1.25),this.game.height - 126, 'shop');
        this.shop.scale.setTo(0.75);

        this.mechanics = this.game.add.button(this.game.world.centerX - (this.tap.width * 2.2) ,this.game.height - 126, 'mechanics');
        this.mechanics.scale.setTo(0.75);

        this.smoke = this.game.add.sprite(this.game.world.centerX - 375,this.game.world.centerY - 50, 'carSmoke');
        this.smoke.animations.add('multiply', [0,0,1,1,2,2,3,3,4,4,5,5,4,4,3,3,4,4,5,5]);
        this.smoke .animations.play('multiply',10,true);
        this.smoke.scale.setTo(.5);
        this.tq = this.game.add.tween(this.smoke).from({x: this.smoke.position.x, y: this.smoke.position.y - 2}, 200, Phaser.Easing.Bounce.In, true);
        this.tq.loop();

        this.tw = this.game.add.tween(this.logo).from({x: this.logo.position.x, y: this.logo.position.y - 2}, 200, Phaser.Easing.Bounce.In, true);
        this.tw.loop();
    }, 
    startGame: function() {
        this.game.state.start('Game'); //call the start state when the condition above is met
    },
    triggerInventory: function() {
        var inventory = new Inventory(this.game);
        inventory.show();
    }

}; 
