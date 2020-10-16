ZenvaRunner.Game = function() {

    this.boosterRate = 1500; //generate booster every 1000ms
    this.boosterTimer = 0; //create a booster every game loop

    this.healthBoxRate = 22000;
    this.healthBoxTimer = 0;

    this.timePointRate = 3500;
    this.timePointTimer = 0;

    this.starRate = 3500;
    this.starTimer = 0;

    this.policeRate = 2500;
    this.policeTimer = 0;

    this.carRate = 1500;
    this.carTimer = 0;

    this.truckRate = 2500;
    this.truckTimer = 0;

    this.vanRate = 1800;
    this.vanTimer = 0;

    this.starCount = 0;
    this.healthPoint = 100;

    this.hasBooster = false;
    this.isBoostMode = false;

    this.hasLost = false;

    // this.dynamicScroll = 350;
};

ZenvaRunner.Game.prototype = {
    create: function() {
        // Moving Background: our asset key for this are 'ground' 'grass', and grass2
        this.ground = this.game.add.tileSprite(this.game.width/2, 0, 692,this.game.height, 'ground');
        this.ground.autoScroll(0, 350); 
        this.ground.anchor.setTo(.5,0);
         
        this.grass = this.game.add.tileSprite(this.game.width/2 - this.ground.width * 1.5,0,this.ground.width*2,this.game.height,'grass');
        this.grass.autoScroll(0,350); //this will scroll the backround forward creating the illusion of the player moving forward
        this.grass.anchor.setTo(.5,0);

        this.sideroad = this.game.add.tileSprite(this.game.width/2 - this.ground.width * 1.15,0,this.ground.width*.65,this.game.height,'sideroad');
        this.sideroad.autoScroll(0,350); //this will scroll the backround forward creating the illusion of the player moving forward
        
        this.grass2 = this.game.add.tileSprite(this.game.width/2 + this.ground.width * 1.5,0,this.ground.width*2,this.game.height,'sea');
        this.grass2.autoScroll(0,350); //this will move the backround to the left
        this.grass2.anchor.setTo(.5,0);

        this.beachside = this.game.add.tileSprite(this.game.width/2 + this.ground.width * .505,0,this.ground.width*.65,this.game.height,'beachside');
        this.beachside.autoScroll(0,350); //this will scroll the backround forward creating the illusion of the player moving forward
        this.beachside.animations.add('fly', [0,1,2,3,2,1,0]); //[0,1,2,3] are image frames found in our asset player,
        this.beachside.animations.play('fly',1,true); //this line will play our animation in 8fps and will loop th animaton(true)

        // Adding the player
        this.player = this.add.sprite(this.game.width/2,this.game.height,this.game.global.carKey);
        this.player.scale.setTo(.5);

        this.player.animations.add('fly', [0,1,2,0,1,2]); //[0,1,2,3] are image frames found in our asset player,
        this.player.animations.play('fly',8,true); //this line will play our animation in 8fps and will loop th animaton(true)

        // enable physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //left grass
        this.game.physics.arcade.enableBody(this.grass); //apply physics to this object
        this.grass.body.immovable = true; //this will keep the grass stay in place

        //right grass
        this.game.physics.arcade.enableBody(this.grass2); 
        this.grass2.body.immovable = true; //this will keep the grass stay in place

        // our car
        this.game.physics.arcade.enableBody(this.player);
        this.player.body.collideWorldBounds = true; //mahulog ang player(mawala sa screen) kung dili i-enable

        // declare all other objects
        //intangibles
        this.healthBar = this.game.add.group();
        this.boosterCount = this.game.add.group();
        this.fadedPlayer = this.game.add.group();
        //cars
        this.police = this.game.add.group(); //
        this.car = this.game.add.group();
        this.van = this.game.add.group();
        this.truck = this.game.add.group();
        // consumables
        this.healthBox = this.game.add.group();
        this.timePoint = this.game.add.group();
        this.star = this.game.add.group();
        this.booster = this.game.add.group(); //

         // set audio
         this.gameMusic = this.game.add.audio('gameMusic');
         this.gameMusic.play('',0,true);
         this.lostSound = this.game.add.audio('lost');
         this.explode = this.game.add.audio('carExplode');
         this.manuever = this.game.add.audio('manuever')
         this.siren = this.game.add.audio('siren')
         this.beatRecord = this.game.add.audio('beatRecord');
         this.boostSoundTrack = this.game.add.audio('boostSoundtrack')
         this.boostPickup = this.game.add.audio('boostPickup')
         this.wallCrash = this.game.add.audio('wallCrash');
         this.nitro = this.game.add.audio('nitro');
         this.noNitro = this.game.add.audio('noNitro');

        // set score
        this.starText = this.game.add.bitmapText(this.game.world.width-150,6,'minecraftia','Star: 0',24);

         // set timer
         this.timeInSeconds = 60;
         this.timeText = this.game.add.bitmapText(this.game.world.centerX, 6,'minecraftia','1:00',24);  //  this.timeText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "0:00",{font: '15px Arial', fill: '#FFFFFF', align: 'center'});
         this.timeText.anchor.set(0.5, 0);
         this.timer = this.game.time.events.repeat(Phaser.Timer.SECOND, this.timeInSeconds, this.updateTimer, this);
         
         // set elapsed time (intangible and hidden)
         this.elapsedTime = 0;
         this.elapsedTimeTimer = this.game.time.events.loop(Phaser.Timer.SECOND, this.incrementElapsedTime, this);
         // debugger
         //  this.elapsedTimeText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.height/2,'minecraftia','0:00',24);  

        // set hastLost changer
        this.changeVal = this.game.time.events.add(Phaser.Timer.SECOND * .1, this.changeValue, this);

         // set healthBar
        var x = 10;
        var y = 10;
        this.health = new HealthBar(this.game, 0,0,'healthHigh'); //x,y
        this.healthBar.add(this.health);
        this.healthPointText = this.game.add.bitmapText(10,6,'minecraftia','HP: ' + this.healthPoint,24);
        this.health.reset(x,y); //set sprite
        this.health.setPercent(this.healthPoint);        

        // declare controls
        // arrow keys
        this.arrows = this.input.keyboard.createCursorKeys();
        
        // letter keys
        this.left = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.right = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.useBooster = this.input.keyboard.addKey(Phaser.Keyboard.G);
    },
    update: function() {
        this.exp = ''
        if(this.game.global.carKey == 'black') {
            this.exp = 'fadeBlack';
        }
        else if(this.game.global.carKey == 'taxi') {
            this.exp = 'fadeTaxi';
        }
        
        //lost case
        if (this.healthPoint <= 0 && !this.hasLost || this.timeInSeconds == 0 && !this.hasLost) {
            this.healthPoint = 100; // revert hp
            this.healthPointText.text = 'HP: 0';
            this.hasLost = true;
            this.hasBooster = false;
            this.lostGame();
            this.starCount = 0;
        }

        // update background scroll during boostmode
        if(this.isBoostMode && !this.hasLost) {
            this.ground.autoScroll(0, 750); 
            this.grass.autoScroll(0, 750); 
            this.grass2.autoScroll(0, 750); 
            this.sideroad.autoScroll(0, 750); 
            this.beachside.autoScroll(0, 750); 
            this.police.setAll('body.velocity.y', 950); //we stop police from moving forward
            this.truck.setAll('body.velocity.y', 950); // repeat
            this.car.setAll('body.velocity.y', 950); // repeat
            this.van.setAll('body.velocity.y', 950); // repeat
            this.booster.setAll('body.velocity.y', 790); // repeat
            this.timePoint.setAll('body.velocity.y', 790); // repeat
            this.healthBox.setAll('body.velocity.y', 790); // repeat
            this.star.setAll('body.velocity.y', 790); // repeat
        }
        // revert background scroll after
        if(!this.isBoostMode && !this.hasLost) {
            this.ground.autoScroll(0, 350);
            this.grass.autoScroll(0, 350); 
            this.grass2.autoScroll(0, 350);
            this.sideroad.autoScroll(0, 350); 
            this.beachside.autoScroll(0, 350);
            this.police.setAll('body.velocity.y', 510); //we stop police from moving forward
            this.truck.setAll('body.velocity.y', 510); // repeat
            this.car.setAll('body.velocity.y', 510); // repeat
            this.van.setAll('body.velocity.y', 510); // repeat
            this.booster.setAll('body.velocity.y', 350); // repeat
            this.timePoint.setAll('body.velocity.y', 350); // repeat
            this.healthBox.setAll('body.velocity.y', 350); // repeat
            this.star.setAll('body.velocity.y', 350); // repeat
        }

        // apply approriate physics and sound changes when conditions are meet
        if(this.arrows.left.isDown && !this.hasLost || this.left.isDown && !this.hasLost) {
            if(!this.isBoostMode) {

                this.player.body.velocity.x -= 10;
                this.player.angle -= 0.5; //lean left

                if(this.player.angle < -10) { // play tire sreech sound if it reaches this angle
                    this.manuever.play(); 
                }
                else if(this.player.angle == 0) { // stops the tire screech if the angle reverts back to 0
                    this.manuever.stop();
                }   
            }
            else {
                this.player.body.velocity.x = 0;
                this.player.angle = 0; 
            }
              
        }

        else if(this.arrows.right.isDown && !this.hasLost || this.right.isDown && !this.hasLost) {
            if(!this.isBoostMode) {
                this.player.body.velocity.x += 10;
                this.player.angle += 0.5; //lean right
                if(this.player.angle > 10) {
                    this.manuever.play(); 
                }
                else if(this.player.angle == 0) {
                    this.manuever.stop();
                }
            }
            else {
                this.player.body.velocity.x = 0;
                this.player.angle = 0;
            }
        }
        if(this.useBooster.isDown && this.hasBooster && !this.hasLost) {
            this.boosterUse();
            this.noNitro.stop();
            this.nitro.play();
        }
        if(this.useBooster.isDown && !this.hasBooster && !this.isBoostMode) {
            this.noNitro.play();
        }

        // respawn logic
        // consumables
        if(this.boosterTimer < this.game.time.now) {
            this.createBooster(); //create a coin
            this.boosterTimer = this.game.time.now + this.boosterRate; //increment the booster
        }
        if(this.healthBoxTimer < this.game.time.now) {
            this.createHealthBox(); //create a coin
            this.healthBoxTimer = this.game.time.now + this.healthBoxRate; 
        }
        if(this.timePointTimer < this.game.time.now) {
            this.createTimePoints(); //create a timePoint
            this.timePointTimer = this.game.time.now + this.timePointRate; 
        }
        if(this.starTimer < this.game.time.now) {
            this.createStar(); //create a timePoint
            this.starTimer = this.game.time.now + this.starRate; 
        }

        // cars
        if(this.policeTimer < this.game.time.now) {
            this.createPolice(); //create an enemy
            this.policeTimer = this.game.time.now + this.policeRate; //repeat
        }
        if(this.carTimer < this.game.time.now) {
            this.createCar(); //create an enemy
            this.carTimer = this.game.time.now + this.carRate; //repeat
        }
        if(this.truckTimer < this.game.time.now) {
            this.createTruck(); //create an enemy
            this.truckTimer = this.game.time.now + this.truckRate; //repeat
        }
        if(this.vanTimer < this.game.time.now) {
            this.createVan(); //create an enemy
            this.vanTimer = this.game.time.now + this.vanRate; //repeat
        }

        // we are tellin to the arcade phsics to check for collision and apply appropriate physics
        // when hit the grass (note: overlap is also applicable)
        this.game.physics.arcade.collide(this.player,this.grass,this.grassHit,null,this);
        this.game.physics.arcade.collide(this.player,this.grass2,this.grassHit2,null,this);

        
        // these functions will check when objects are overlapping with each other, then refer to corresponding functions below

        // when hit police cars
        this.game.physics.arcade.overlap(this.player,this.police,this.policeHit,null,this);
  
        // when hit civilian cars
        this.game.physics.arcade.overlap(this.player,this.car,this.carHit,null,this);
        this.game.physics.arcade.overlap(this.player,this.van,this.vanHit,null,this);
        this.game.physics.arcade.overlap(this.player,this.truck,this.truckHit,null,this);
        this.game.physics.arcade.overlap(this.player,this.booster,this.boosterHit,null,this);

        // check uninteded collision between police and civillian cars
        this.game.physics.arcade.overlap(this.police,this.car,this.policeCar,null,this);
        this.game.physics.arcade.overlap(this.police,this.truck,this.policeTruck,null,this);
        this.game.physics.arcade.overlap(this.police,this.van,this.policeVan,null,this);
        this.game.physics.arcade.overlap(this.car,this.police,this.carTruck,null,this);
        this.game.physics.arcade.overlap(this.car,this.van,this.carVan,null,this);
        this.game.physics.arcade.overlap(this.car,this.truck,this.carTruck,null,this);
        this.game.physics.arcade.overlap(this.truck,this.police,this.truckPolice,null,this);
        this.game.physics.arcade.overlap(this.truck,this.van,this.truckVan,null,this);
        this.game.physics.arcade.overlap(this.truck,this.car,this.truckCar,null,this);
        this.game.physics.arcade.overlap(this.van,this.police,this.vanPolice,null,this);
        this.game.physics.arcade.overlap(this.van,this.car,this.vanCar,null,this);
        this.game.physics.arcade.overlap(this.van,this.truck,this.vanTruck,null,this);

        // collision physics with timepoint
        this.game.physics.arcade.overlap(this.player,this.timePoint,this.timePointHit,null,this);

        // collision physics with healthbox
        this.game.physics.arcade.overlap(this.player,this.healthBox,this.healthBoxHit,null,this);

        // collision physics with star
        this.game.physics.arcade.overlap(this.player,this.star,this.starHit,null,this);

    },
    changeValue: function() {
        if (this.car.countDead() == 0 || this.van.countDead() == 0 || this.truck.countDead() == 0 || this.timePoint.countDead() == 0) {
        this.hasLost = false;
        
        }
    },
    incrementElapsedTime: function() {
        this.elapsedTime++;
        // this.elapsedTimeText.text = this.elapsedTime;
    },
    updateTimer: function() {
        this.timeInSeconds--;
        if (this.timeInSeconds != Number.MAX_VALUE) {
            var minutes = Math.floor(this.timeInSeconds / 60);
            var seconds = this.timeInSeconds - (minutes * 60);
            var timeString = minutes + ":" + this.addZeros(seconds);
            this.timeText.text = timeString;
        }
        else {
            var timeString = '0' + ":" + '00';   
            this.timeText.text = timeString; 
        }
    },
    addZeros: function(num) {
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    }, 
    createBooster: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0; // y position                                                    // this.ground.x = this.game.width/2

        var booster = this.booster.getFirstExists(false);
        if(!booster) {
            booster = new Booster(this.game, 0,0); //x,y
            this.booster.add(booster); //a dd booster if not exist
        }

        booster.reset(x,y); //set sprite
        booster.revive();
    },
    createHealthBox: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0; // y position                                                    // this.ground.x = this.game.width/2

        var healthBox = this.healthBox.getFirstExists(false);
        if(!healthBox) {
            healthBox = new HealthBox(this.game, 0,0);
            this.healthBox.add(healthBox); 
        }

        healthBox.reset(x,y); //set sprite
        healthBox.revive();
    },
    createTimePoints: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0; // y position 
        var y2 = -40;                                                   // this.ground.x = this.game.width/2
        var y3 = -80;
        var y4 = -120;
        var y5 = -160;
        
        var timePoint = this.timePoint.getFirstExists(false);
        var timePoint2 = this.timePoint.getFirstExists(false);
        var timePoint3 = this.timePoint.getFirstExists(false);
        var timePoint4 = this.timePoint.getFirstExists(false);
        var timePoint5 = this.timePoint.getFirstExists(false);

        
        timePoint = new TimePoint(this.game,0,0); //x,y
        this.timePoint.add(timePoint);
        timePoint2 = new TimePoint(this.game,0,0); //x,y
        this.timePoint.add(timePoint2); 
        timePoint3 = new TimePoint(this.game,0,0); //x,y
        this.timePoint.add(timePoint3); 
        timePoint4 = new TimePoint(this.game,0,0); //x,y
        this.timePoint.add(timePoint4); 
        timePoint5 = new TimePoint(this.game,0,0); //x,y
        this.timePoint.add(timePoint5); 
           
        timePoint.reset(x,y);
        timePoint2.reset(x,y2);
        timePoint3.reset(x,y3);
        timePoint4.reset(x,y4);
        timePoint5.reset(x,y5);
    
        timePoint.revive();
        timePoint2.revive();
        timePoint3.revive();
        timePoint4.revive();
        timePoint5.revive();
      
    },
    createStar: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0; // y position 
        var y2 = -40;                                                   // this.ground.x = this.game.width/2
        var y3 = -80;
        var y4 = -120;
        var y5 = -160;
        
        var star = this.star.getFirstExists(false);
        var star2 = this.star.getFirstExists(false);
        var star3 = this.star.getFirstExists(false);
        var star4 = this.star.getFirstExists(false);
        var star5 = this.star.getFirstExists(false);

        
        star = new Star(this.game,0,0); //x,y
        this.star.add(star);
        star2 = new Star(this.game,0,0); //x,y
        this.star.add(star2); 
        star3 = new Star(this.game,0,0); //x,y
        this.star.add(star3); 
        star4 = new Star(this.game,0,0); //x,y
        this.star.add(star4); 
        star5 = new Star(this.game,0,0); //x,y
        this.star.add(star5); 
           
        star.reset(x,y);
        star2.reset(x,y2);
        star3.reset(x,y3);
        star4.reset(x,y4);
        star5.reset(x,y5);
    
        star.revive();
        star2.revive();
        star3.revive();
        star4.revive();
        star5.revive();
      
    },
    createPolice: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0;

        var police = this.police.getFirstExists(false);
        if(!police) {
            police = new Police(this.game, 0,0);
            this.police.add(police); 
        }
        // this.siren.play();
        police.reset(x,y); 
        police.revive();
     
    },
    createTruck: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0;

        var truck = this.truck.getFirstExists(false);
        if(!truck) {
            truck = new Truck(this.game, 0,0); 
            this.truck.add(truck);
        }
        
        truck.reset(x,y); 
        truck.revive();
    },
    createVan: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0;

        var van = this.van.getFirstExists(false);
        if(!van) {
            van = new Van(this.game, 0,0); 
            this.van.add(van); 
        }

        van.reset(x,y);
        van.revive();
    },
    createCar: function() {
        var x = this.game.rnd.integerInRange(this.game.world.centerX - (this.ground.width * .45), this.game.world.centerX + (this.ground.width * .45)); //dictates the range (x or horizontally) of the width where the object will respawn
        var y = 0;

        var car = this.car.getFirstExists(false);
        if(!car) {
            car = new Car(this.game, 0,0); 
            this.car.add(car); 
        }

        car.reset(x,y);
        car.revive();
    },
    grassHit: function(player, grass) {
        this.healthPoint = this.healthPoint - 5;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);

        player.body.velocity.x = 50; //bounce the player to the right when hit the grass
        player.angle = 0; // straighten the car back
        this.wallCrash.play();

    },
    grassHit2: function(player, grass2) {
        this.healthPoint = this.healthPoint - 5;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);
        player.body.velocity.x = -50; //bounce the player to the left when hit the grass
        player.angle = 0;        
        this.wallCrash.play();
    },
    boosterHit: function(player, booster) {

        this.hasBooster = true;
        this.boosterCount.removeAll();  // remove all existing child of boosterCount so that we can insure that booster count will remain 1 even if we picked booster 2 times
    
         // set booster count
        var x = 20;
        var y = 60;
 
        boosterIcon = new Booster(this.game, x,y); //x,y
        this.boosterCount.add(boosterIcon);
     
        this.boostPickup.play(); //play the 'boostPickup' sound when player hits booster, no need to loop
        // this.boostSoundTrack.play(); //same with the soundtrack
        booster.kill(); // will hide the booster

        // add animation
        var dummyBooster = new Booster(this.game, booster.x, booster.y) //get the position of the boosters and save it to dummyBooster
        this.game.add.existing(dummyBooster);

        dummyBooster.animations.play('spin',40,true); //animation when the booster get hit, "animation name", 'speed', 'loop'

        // transition to upper left when the booster get hit
        var scoreTween = this.game.add.tween(dummyBooster).to({x: 20, y: 60}, 300, Phaser.Easing.Linear.NONE, true);

        scoreTween.onComplete.add(function() {
            // dummyBooster.destroy(); //destroy booster
            dummyBooster.destroy();
        }, this);
    },
    boosterUse: function() {
        // this.player.body.enable = false;
        this.boostSoundTrack.play();
        this.hasBooster = false; 
        this.isBoostMode = true;
        this.gameMusic.pause();
        this.boosterCount.getTop().kill();;

        this.player.kill();
        xp = this.player.position.x;
        yp = this.player.position.y;

        var fade = this.game.add.sprite(xp,yp, this.exp);
        this.fadedPlayer.add(fade);
        fade.scale.setTo(.5);
        fade.animations.add('fade', [0,1,2]); 
        fade.animations.play('fade',3,true);

        var scoreTween = this.game.add.tween(fade).to({x: xp, y: yp}, 14000, Phaser.Easing.Linear.NONE,true);
        scoreTween.onComplete.add(function() {
            this.isBoostMode = false;
            fade.animations.stop();
            fade.destroy();
            if (!this.hasLost) {
            this.player.reset(xp, yp);
            this.player.angle = 0;
            this.player.body.velocity.x = 0;
            // this.boosterCount.reset(20,60);
            this.gameMusic.resume();
            // boost.reset(boost.position.x,boost.position.y);
            this.boosterCount.removeAll(); 
            }
        }, this);
        
    },
    healthBoxHit: function(player, healthBox) {

        this.healthPoint = 100;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);

        this.boostPickup.play(); //play the 'boostPickup' sound when player hits booster, no need to loop
        healthBox.kill(); // will hide the booster

        // add animation
        var dummyhealthBox = new HealthBox(this.game, healthBox.x, healthBox.y) //get the position of the boosters and save it to dummyBooster
        this.game.add.existing(dummyhealthBox);

        // transition to upper left when the booster get hit
        var scoreTween = this.game.add.tween(dummyhealthBox).to({x: 50, y: 50}, 300, Phaser.Easing.Linear.NONE, true);

        scoreTween.onComplete.add(function() {
            dummyhealthBox.destroy(); //destroy booster
        }, this);
    },
    timePointHit: function(player, timePoint) {
        this.timeInSeconds = this.timeInSeconds + 1;
        var minutes = Math.floor(this.timeInSeconds / 60);
        var seconds = this.timeInSeconds - (minutes * 60);
        var timeString = minutes + ":" + this.addZeros(seconds);
        this.timeText.text = timeString;

        this.boostPickup.play(); 
        timePoint.kill(); 

        // add animation
        var dummyTimePoint = new TimePoint(this.game, timePoint.x, timePoint.y) //get the position of the boosters and save it to dummyBooster
        this.game.add.existing(dummyTimePoint);

        dummyTimePoint.animations.play('spin',40,true); 

        
        var scoreTween = this.game.add.tween(dummyTimePoint).to({x: this.game.world.centerX, y: 50}, 300, Phaser.Easing.Linear.NONE, true);

        scoreTween.onComplete.add(function() {
            dummyTimePoint.destroy(); 
        }, this);
    },
    starHit: function(player, star) {
        this.starCount = this.starCount + 1;
        this.starText.text = 'Star: ' + this.starCount;
        this.boostPickup.play(); 
        star.kill(); 

        // add animation
        var dummyStar = new Star(this.game, star.x, star.y) //get the position of the boosters and save it to dummyBooster
        this.game.add.existing(dummyStar);

        dummyStar.animations.play('spin',40,true); 

        
        var scoreTween = this.game.add.tween(dummyStar).to({x: this.game.width * .92, y: 50}, 300, Phaser.Easing.Linear.NONE, true);

        scoreTween.onComplete.add(function() {
            dummyStar.destroy(); 
        }, this);
    },
    policeHit: function (player, police) {
        this.healthPoint = this.healthPoint - 20;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);
        this.explode.play();

        police.kill(); //will kill the player

        // create a dummy of the police for the explosion sprite
        var x = police.position.x; // checks the x pos value of the police
        var y = police.position.y; // checks the y pos value of the police

        this.exp = this.game.add.sprite(x*.94,y*.98, 'explode'); // create the explosion sprite using the dummy's x and y position
        this.exp.scale.setTo(1.5); 
        this.exp.animations.add('fly', [0,1,2,3,4,5,6]); 
        this.exp.animations.play('fly',8,false); 
        this.game.add.tween(this.exp).to({y: this.game.height * 1.5}, 1000, Phaser.Easing.Default, true, 0); 
    },
    carHit: function (player, car) {
        this.healthPoint = this.healthPoint - 1;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);
        this.explode.play();
        car.kill(); 

        var dummyCar = new Car(this.game, car.x, car.y) //get the position of the car and save it to dummyCar
    
        this.exp = this.game.add.sprite(dummyCar.x*.94,dummyCar.y*.98, 'explode');
        this.exp.scale.setTo(1.4); // resize explosion
        this.exp.animations.add('fly', [0,1,2,3,4,5,6]); 
        this.exp.animations.play('fly',8,false); 
        this.game.add.tween(this.exp).to({y: this.game.height * 1.5}, 1000, Phaser.Easing.Default, true, 0); 
    },
    vanHit: function (player, van) {
        this.healthPoint = this.healthPoint - 5;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);
        this.explode.play();
        van.kill(); 

        var dummyVan = new Van(this.game, van.x, van.y) 
    
        this.exp = this.game.add.sprite(dummyVan.x*.94,dummyVan.y*.98, 'explode');
        this.exp.scale.setTo(1.5); 
        this.exp.animations.add('fly', [0,1,2,3,4,5,6]); 
        this.exp.animations.play('fly',8,false); 
        this.game.add.tween(this.exp).to({y: this.game.height * 1.5}, 1000, Phaser.Easing.Default, true, 0); 
        
    },
    truckHit: function (player, truck) {
        this.healthPoint = this.healthPoint - 10;
        this.healthPointText.text = 'HP: ' + this.healthPoint;
        this.health.setPercent(this.healthPoint);
        this.explode.play();
        truck.kill(); 

        var dummyTruck = new Car(this.game, truck.x, truck.y);
    
        this.exp = this.game.add.sprite(dummyTruck.x*.94,dummyTruck.y*.98, 'explode');
        this.exp.scale.setTo(1.7); 
        this.exp.animations.add('fly', [0,1,2,3,4,5,6]); 
        this.exp.animations.play('fly',8,false);
        this.game.add.tween(this.exp).to({y: this.game.height * 1.5}, 1000, Phaser.Easing.Default, true, 0); 
        
    },
    // tinamban style
    // corresponding methods for the unintended collisions between civilian cars and police cars
    policeCar: function (police, car) {
        police.kill();
        this.siren.stop();
    },
    policeVan: function (police, van) {
        police.kill();
        this.siren.stop();
    },
    policeTruck: function (police, truck) {
        police.kill();
        this.siren.stop();
    },
    carPolice: function (car, police) {
        car.kill();
    },
    carVan: function (car, van) {
        car.kill();
    },
    carTruck: function (car, truck) {
        car.kill();
    },
    truckPolice: function (truck, police) {
        truck.kill();
    },
    truckVan: function (truck, van) {
        truck.kill();
    },
    truckCar: function (truck, car) {
        truck.kill();
    },
    vanPolice: function (van, police) {
        van.kill();
    },
    vanTruck: function (van, truck) {
        van.kill();
    },
    vanCar: function (van, car) {
        van.kill();
    },
    lostGame: function() {
        this.lostSound.play();

        this.game.global.star = this.game.global.star + this.starCount;
        this.booster.kill();
        this.police.kill();
        this.player.kill();
        this.van.kill();
        this.car.kill();
        this.truck.kill();
        this.timePoint.kill();
        this.star.kill();

        this.gameMusic.stop(); // end the game music
        this.boostSoundTrack.stop(); // end the game music
        this.siren.stop();

        this.ground.stopScroll(); // will stop road from scrolling
        this.grass.stopScroll();  // repeat
        this.grass2.stopScroll(); // repeat    
        this.sideroad.stopScroll();  // repeat
        this.beachside.stopScroll(); // repeat    

        this.police.setAll('body.velocity.y', 0); //we stop police from moving forward
        this.booster.setAll('body.velocity.y', 0); // repeat
        this.truck.setAll('body.velocity.y', 0); // repeat
        this.car.setAll('body.velocity.y', 0); // repeat
        this.van.setAll('body.velocity.y', 0); // repeat
        this.timePoint.setAll('body.velocity.y', 0); // repeat
        this.star.setAll('body.velocity.y', 0); // repeat

        // this.starTimer = Number.MAX_VALUE;
        this.timeInSeconds = Number.MAX_VALUE;
        // this.boosterTimer = Number.MAX_VALUE;
        // this.timePointTimer = Number.MAX_VALUE;
        // this.vanTimer = Number.MAX_VALUE;
        // this.policeTimer = Number.MAX_VALUE;
        // this.carTimer = Number.MAX_VALUE;
        // this.truckTimer = Number.MAX_VALUE;
        this.healthBoxTimer = Number.MAX_VALUE;  
        
        var scoreboard = new Scoreboard(this.game);
        scoreboard.show(this.starCount, this.elapsedTime);
    },
    shutdown: function() {
        // destroy all objects
    }
};