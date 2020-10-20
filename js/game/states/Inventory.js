CarCrasher.Inventory = function() {};

CarCrasher.Inventory.prototype = {
    create: function() {

    this.bg = this.game.add.image(0,0,'inventoryBg');
    this.bg.height = this.game.height;
    this.bg.width = this.game.width;

    this.x = 0; //starting position of scoreboard at the bottom of the screen

    // car collection
    this.back = this.game.add.button(10,10,'back', this.restart);

    this.car1 = this.game.add.sprite(this.game.width/2 - 300,this.game.height*0.25,'black');
    this.car1.scale.setTo(.5);
    this.car1.animations.add('carSmoke', [0,1,2,1,0]);
    this.car1.animations.play('carSmoke',8,true);
    this.twc = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc.loop();
    this.use1 = this.game.add.button(this.game.width/2 - 300,(this.game.height*0.25) + this.car1.height,'useCar',this.useCar1);
    this.use1.scale.setTo(.5);

    this.car2 = this.game.add.sprite(this.game.width/2 - 100,this.game.height*0.25,'taxi');
    this.car2.scale.setTo(.5);
    this.car2.animations.add('carSmoke', [0,1,2,1,0]);
    this.car2.animations.play('carSmoke',8,true);
    this.twc2 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc2.loop();
    this.use2 = this.game.add.button(this.game.width/2 - 104,(this.game.height*0.25) + this.car1.height,'useCar', this.useCar2);
    this.use2.scale.setTo(.5);

    this.car3 = this.game.add.sprite(this.game.width/2 + 100,this.game.height*0.25,'vanF');
    this.car3.scale.setTo(.5);
    this.car3.animations.add('carSmoke', [0,1,2,1,0]);
    this.car3.animations.play('carSmoke',8,true);
    this.twc3 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc3.loop();
    this.use3 = this.game.add.button(this.game.width/2 + 98,(this.game.height*0.25) + this.car1.height,'useCar', this.useCar3);
    this.use3.scale.setTo(.5);

    this.car4 = this.game.add.sprite(this.game.width/2 + 300,this.game.height*0.25,'policeF');
    this.car4.scale.setTo(.5);
    this.car4.animations.add('carSmoke', [0,1,2,1,0]);
    this.car4.animations.play('carSmoke',8,true);
    this.twc4 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc4.loop();
    this.use4 = this.game.add.button(this.game.width/2 + 300,(this.game.height*0.25) + this.car1.height,'useCar', this.useCar4);
    this.use4.scale.setTo(.5);

    this.car5 = this.game.add.sprite(this.game.width/2 - 500,this.game.height*0.25,'carF');
    this.car5.scale.setTo(.5);
    this.car5.animations.add('carSmoke', [0,1,2,1,0]);
    this.car5.animations.play('carSmoke',8,true);
    this.twc5 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc5.loop();
    this.use5 = this.game.add.button(this.game.width/2 - 508,(this.game.height*0.25) + this.car1.height,'useCar', this.useCar5);
    this.use5.scale.setTo(.5);

    this.car6 = this.game.add.sprite(this.game.width/2 + 500,this.game.height*0.1,'truckF');
    this.car6.scale.setTo(.5);
    this.car6.animations.add('carSmoke', [0,1,2,1,0]);
    this.car6.animations.play('carSmoke',8,true);
    this.twc6 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
    this.twc6.loop();
    this.use6 = this.game.add.button(this.game.width/2 + 502,(this.game.height*0.25) + this.car1.height,'useCar', this.useCar6);
    this.use6.scale.setTo(.5);

    this.use1.onInputDown.add(this.useCar1, this);
    this.use2.onInputDown.add(this.useCar2, this);
    this.use3.onInputDown.add(this.useCar3, this);
    this.use4.onInputDown.add(this.useCar4, this);
    this.use5.onInputDown.add(this.useCar5, this);
    this.use6.onInputDown.add(this.useCar6, this);
    
    this.selectCar = this.game.add.audio('noNitro');   
    // status update
    this.game.add.bitmapText(this.game.width/2 - 400, 40,'minecraftia','Status Update ', 20);
    this.tetext = this.game.add.bitmapText(this.game.width/2 - 400,80,'minecraftia','Username: ' + this.game.global.user,16);
    this.star = this.game.add.bitmapText(this.game.width/2 - 400,100,'minecraftia','Stars earned: ' + this.game.global.star,16);
    this.curCar = this.game.add.bitmapText(this.game.width/2 - 400,120,'minecraftia','Current car in use: ' + this.game.global.carKey,16);
    
    },
    update: function() {
        this.car3.kill();
        this.use3.kill();
        this.car4.kill();
        this.use4.kill();
        this.car5.kill();
        this.use5.kill();
        this.car6.kill();
        this.use6.kill();
    
        if (this.game.global.cars.find(this.checkVan) == 'vanF') {
            this.car3.reset(this.car3.position.x, this.car3.position.y);
            this.use3.reset(this.use3.position.x, this.use3.position.y);
            this.car3.animations.add('carSmoke', [0,1,2,1,0]);
            this.car3.animations.play('carSmoke',8,true);
        }
        if (this.game.global.cars.find(this.checkPolice) == 'policeF' ) {
            this.car4.reset(this.car4.position.x, this.car4.position.y);
            this.use4.reset(this.use4.position.x, this.use4.position.y);
            this.car4.animations.add('carSmoke', [0,1,2,1,0]);
            this.car4.animations.play('carSmoke',8,true);
        }
        if (this.game.global.cars.find(this.checkCar) == 'carF' ) {
            this.car5.reset(this.car5.position.x, this.car5.position.y);
            this.use5.reset(this.use5.position.x, this.use5.position.y);
            this.car5.animations.add('carSmoke', [0,1,2,1,0]);
            this.car5.animations.play('carSmoke',8,true);
        }
        if (this.game.global.cars.find(this.checkTruck) == 'truckF' ) {
            this.car6.reset(this.car6.position.x, this.car6.position.y);
            this.use6.reset(this.use6.position.x, this.use6.position.y);
            this.car6.animations.add('carSmoke', [0,1,2,1,0]);
            this.car6.animations.play('carSmoke',8,true);
        }

        // if (this.game.global.carKey == 'black') {
        //     this.use1.kill();
        //     this.use2.reset(this.use2.position.x, this.use2.position.y);
        //     this.use3.reset(this.use3.position.x, this.use3.position.y);
        //     this.use4.reset(this.use4.position.x, this.use4.position.y);
        //     this.use5.reset(this.use5.position.x, this.use5.position.y);
        //     this.use6.reset(this.use6.position.x, this.use6.position.y);
        // }
        // else if (this.game.global.carKey == 'taxi') {
        //     this.use2.kill();
        //     this.use1.reset(this.use1.position.x, this.use1.position.y);
        //     this.use3.reset(this.use3.position.x, this.use3.position.y);
        //     this.use4.reset(this.use4.position.x, this.use4.position.y);
        //     this.use5.reset(this.use5.position.x, this.use5.position.y);
        //     this.use6.reset(this.use6.position.x, this.use6.position.y);
        // }
        // else if (this.game.global.carKey == 'vanF') {
        //     this.use3.kill();
        //     this.use1.reset(this.use1.position.x, this.use1.position.y);
        //     this.use2.reset(this.use2.position.x, this.use2.position.y);
        //     this.use4.reset(this.use4.position.x, this.use4.position.y);
        //     this.use5.reset(this.use5.position.x, this.use5.position.y);
        //     this.use6.reset(this.use6.position.x, this.use6.position.y);
        // }
        // else if (this.game.global.carKey == 'carF') {
        //     this.use4.kill();
        //     this.use1.reset(this.use1.position.x, this.use1.position.y);
        //     this.use2.reset(this.use2.position.x, this.use2.position.y);
        //     this.use3.reset(this.use3.position.x, this.use3.position.y);
        //     this.use5.reset(this.use5.position.x, this.use5.position.y);
        //     this.use6.reset(this.use6.position.x, this.use6.position.y);
        // }
        // else if (this.game.global.carKey == 'policeF') {
        //     this.use5.kill();
        //     this.use1.reset(this.use1.position.x, this.use1.position.y);
        //     this.use2.reset(this.use2.position.x, this.use2.position.y);
        //     this.use3.reset(this.use3.position.x, this.use3.position.y);
        //     this.use4.reset(this.use4.position.x, this.use4.position.y);
        //     this.use6.reset(this.use6.position.x, this.use6.position.y);
        // }
        // else if (this.game.global.carKey == 'truckF') {
        //     this.use6.kill();
        //     this.use1.reset(this.use1.position.x, this.use1.position.y);
        //     this.use2.reset(this.use2.position.x, this.use2.position.y);
        //     this.use3.reset(this.use3.position.x, this.use3.position.y);
        //     this.use4.reset(this.use4.position.x, this.use4.position.y);
        //     this.use5.reset(this.use5.position.x, this.use5.position.y);
        // }
      
        this.curCar.text = 'Current car in use: ' + this.game.global.carKey;
    },
    restart: function() {
        this.game.state.start('MainMenu', true, false);
    },
    useCar1: function() {
        this.game.global.carKey = 'black';
        this.selectCar.play();      
    },
    useCar2: function() {
        this.game.global.carKey = 'taxi';
        this.selectCar.play();
    },
    useCar3: function() {
        this.game.global.carKey = 'vanF';  
        this.selectCar.play();    
    },
    useCar4: function() {
        this.game.global.carKey = 'policeF';
        this.selectCar.play();
    },
    useCar5: function() {
        this.game.global.carKey = 'carF'; 
        this.selectCar.play();     
    },
    useCar6: function() {
        this.game.global.carKey = 'truckF';
        this.selectCar.play();
    },
    checkVan: function(color) {
        return color == 'vanF';
    },
    checkCar: function(color) {
        return color == 'carF';
    },
    checkTruck: function(color) {
        return color == 'truckF';
    },
    checkPolice: function(color) {
        return color == 'policeF';
    }

}; 
