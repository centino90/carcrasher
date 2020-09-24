ZenvaRunner.Game = function() {
    this.playerMinAngle = -20;
    this.playerMaxAngle = 20;
};

ZenvaRunner.Game.prototype = {
    create: function() {
        // Moving Background: our asset key for this are 'background' 'foreground', and ground
        this.ground = this.game.add.tileSprite(360, 0, this.game.width-745,this.game.height, 'ground');
        this.ground.autoScroll(0, 100); 

        this.grass = this.game.add.tileSprite(0, 0, this.game.width-1080,this.game.height, 'grass');
        this.grass.autoScroll(0, 100); //this will move the backround to the left

        this.grass2 = this.game.add.tileSprite(1052, 0, this.game.width-999,this.game.height, 'grass');
        this.grass2.autoScroll(0, 100); //this will move the backround to the left

        // Adding the player
        this.player = this.add.sprite(360,this.game.height/2,'player');
        this.player.anchor.setTo(0.2); 
        this.player.scale.setTo(.5);

        this.player.animations.add('fly', [0,1,2,3,2,1]); //[0,1,2,3] are image frames found in our asset player,
        this.player.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

        // enable physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // this.game.physics.arcade.gravity.y = 400;

        this.game.physics.arcade.enableBody(this.ground); //add gravity to our ground (remember the ground key value we set in preload.js?)
        this.ground.body.allowGravity = false; //we dont want our ground affeced by gravity
        this.ground.body.immovable = true; //this will keep the ground stay in place

        this.game.physics.arcade.enableBody(this.player); //apply physics to our player
        this.player.body.collideWorldBounds = true; //mahulog ang player(mawala sa screen) kung dili i-enable
        this.player.body.bounce.set(0.25);

        // declare controlls
        // arrow keys
        this.arrows = this.input.keyboard.createCursorKeys();
        
        // letter keys
        this.up = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.down = this.input.keyboard.addKey(Phaser.Keyboard.S);
        this.left = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.right = this.input.keyboard.addKey(Phaser.Keyboard.D);
    },
    update: function() {
        if(this.arrows.up.isDown || this.up.isDown) {
            this.player.body.velocity.y -= 10;
        }
        else if(this.arrows.down.isDown || this.down.isDown) {
            this.player.body.velocity.y += 10;
        }
        else if(this.arrows.left.isDown || this.left.isDown) {
            this.player.body.velocity.x -= 10;
            this.player.angle -= 0.5; //lean left
            
        }
        else if(this.arrows.right.isDown || this.right.isDown) {
            this.player.body.velocity.x += 10;
            this.player.angle += 0.5; //lean right
            if(this.player.angle == 25) {
                if(!this.arrows.left.isDown || !this.left.isDown) {
                    isClicked = false;
                    var i = 0;
                    while(isClicked != true && i == 5) {
                        if(this.arrows.left.isDown || this.left.isDown) {
                            this.game.add.tween(this.player).to({angle: 0}, 2400, Phaser.Easing.Cubic.In, true, 1000 + 400 * i, 0);
                            isClicked == true;
                        }
                    i++;
                    }
                }
                
                    // this.player.angle += 0 ; //reset angle
                    // this.game.add.tween(this.player).to({x: data.x, y: data.y}, 250, Phaser.Easing.Quadratic.In, true, 0);
                    // this.game.add.tween(this.player).to({y:this.player.y-16}, 500,Phaser.Easing.Linear.NONE, true,0,Infinity,true);
                    // this.game.add.tween(this.player).to( { y: 245 }, 2400, Phaser.Easing.Bounce.Out, true);
                    // this.game.add.tween(this.player).to({angle: 0}, 2400, Phaser.Easing.Cubic.In, true, 1000 + 400 * i, 0);
                    // if(this.player.angle <= 0) {
                    //     isHigh = true;
                    // 
                }
                
            }

       
    },
    shutdown: function() {
        
    },
    groundHit: function() {

    }
};