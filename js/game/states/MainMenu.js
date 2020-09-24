ZenvaRunner.MainMenu = function() {};

ZenvaRunner.MainMenu.prototype = {
    create: function() {

        // Moving Background: our asset key for this are 'background' 'foreground', and ground
        this.ground = this.game.add.tileSprite(360, 0, this.game.width-745,this.game.height, 'ground');
        this.ground.autoScroll(0, 100); //this will move the backround to the left

        this.grass = this.game.add.tileSprite(0, 0, this.game.width-1080,this.game.height, 'grass');
        this.grass.autoScroll(0, 100); //this will move the backround to the left

        this.grass2 = this.game.add.tileSprite(1052, 0, this.game.width-999,this.game.height, 'grass');
        this.grass2.autoScroll(0, 100); //this will move the backround to the left

        // this.foreground = this.game.add.tileSprite(0,470,this.game.width,this.game.height - 533, 'foreground');
        // // this.foreground.autoScroll(-100,0); // this will move the foreground to the left

        // this.ground = this.game.add.tileSprite(0,this.game.height-73,this.game.width,73,'background');
        // // this.ground.autoScroll(-400,0); //this will move the ground faster than the foreground and background assets

        // Adding the player
        this.player = this.add.sprite(360,this.game.height/2,'player');
        this.player.anchor.setTo(-0.2); //this will position our player at the vertical center
        this.player.scale.setTo(.5); //this will resize the size of our asset player, try to play around this value to see how it works

        this.player.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
        this.player.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

        // adding the police
        this.police = this.add.sprite(510,this.game.height/2,'police');
        this.police.anchor.setTo(1); //this will position our player at the vertical center
        this.police.scale.setTo(.5); //this will resize the size of our asset player, try to play around this value to see how it works

        this.police.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
        this.police.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

         // adding the civillian cars
         //  truck
         this.truck = this.add.sprite(650,this.game.height/2,'truck');
         this.truck.anchor.setTo(1.4); //this will position our player at the vertical center
         this.truck.scale.setTo(.5); //this will resize the size of our asset player, try to play around this value to see how it works
         
         this.truck.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
         this.truck.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

        //  van
         this.van = this.add.sprite(515,this.game.height/2,'van');
         this.van.anchor.setTo(2.1); //this will position our player at the vertical center
         this.van.scale.setTo(.5); //this will resize the size of our asset player, try to play around this value to see how it works
 
         this.van.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
         this.van.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

        //  red car
         this.car = this.add.sprite(600,this.game.height/2,'car');
         this.car.anchor.setTo(.5); //this will position our player at the vertical center
         this.car.scale.setTo(.5); //this will resize the size of our asset player, try to play around this value to see how it works
 
         this.car.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
         this.car.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

        //  booster
         this.booster = this.add.sprite(915,this.game.height/2,'booster');
         this.booster.anchor.setTo(.5); //this will position our player at the vertical center
         this.booster.scale.setTo(.8); //this will resize the size of our asset player, try to play around this value to see how it works
 
         this.booster.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
         this.booster.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

          //  explode
          this.explode = this.add.sprite(900,this.game.height/2,'explode');
          this.explode.anchor.setTo(1.7); //this will position our player at the vertical center
          this.explode.scale.setTo(2); //this will resize the size of our asset player, try to play around this value to see how it works
  
          this.explode.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
          this.explode.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)



        //to make our character more interesting, tween is added.
        // this.game.add.tween(this.player).to({y:this.player.y-16}, 500,Phaser.Easing.Linear.NONE, true,0,Infinity,true);

        // adding our logo at the first part of our game
        this.splash = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'logo');
        this.splash.anchor.setTo(0.5);

        // adding our text menu: position, asset key, text to show, pixel size
        this.startText = this.game.add.bitmapText(0,0, 'minecraftia','tap to start',32);

        // calculating the text positioning
        this.startText.x = this.game.width / 2-this.startText.textWidth/2;
        this.startText.y = this.game.height /2 + this.splash.height / 2;
    },
    update: function() {
        if(this.game.input.activePointer.justPressed()){ //this line is the trigger, 'activePointer' in phaser can be the mouse or touch depends on the device
            this.game.state.start('Game'); //call the start state when the condition above is met
        }
    }

};
