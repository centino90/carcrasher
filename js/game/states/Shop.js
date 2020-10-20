CarCrasher.Shop = function() {

this.price1 = 50;
this.price2 = 40;
this.price3 = 30;
this.price4 = 60;

// this.checkCars = function(car, temp) {
//     return car == temp;
// }
};

CarCrasher.Shop.prototype = {
    create: function() {

        this.bg = this.game.add.image(0,0,'shopBg');
        this.bg.height = this.game.height;
        this.bg.width = this.game.width;

        this.back = this.game.add.button(10,10,'back', this.restart);

        this.car1 = this.game.add.sprite(this.game.width/2 - 300,this.game.height*0.5,'van');
        this.car1.scale.setTo(.5,-.5);
        this.car1.animations.add('carSmoke', [0,1,2,1,0]);
        this.car1.animations.play('carSmoke',8,true);
        this.twc = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
        this.twc.loop();
        this.buy1 = this.game.add.button(this.game.width/2 - 289,(this.game.height*0.75) + this.car1.height,'buy');
        this.buy1.scale.setTo(.5);
        this.priceText1 = this.game.add.bitmapText(this.game.width/2 - 289,(this.game.height*0.80) + this.car1.height,'minecraftia','Price: ' + this.price1,16);

        this.car2 = this.game.add.sprite(this.game.width/2 - 100,this.game.height*0.5,'police');
        this.car2.scale.setTo(.5,-.5);
        this.car2.animations.add('carSmoke', [0,1,2,1,0]);
        this.car2.animations.play('carSmoke',8,true);
        this.twc2 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
        this.twc2.loop();
        this.buy2 = this.game.add.button(this.game.width/2 - 96,(this.game.height*0.75) + this.car1.height,'buy');
        this.buy2.scale.setTo(.5);
        this.priceText2 = this.game.add.bitmapText(this.game.width/2 - 96,(this.game.height*0.80) + this.car1.height,'minecraftia','Price: ' + this.price2,16);

        this.car3 = this.game.add.sprite(this.game.width/2 + 100,this.game.height*0.5,'car');
        this.car3.scale.setTo(.5,-.5);
        this.car3.animations.add('carSmoke', [0,1,2,1,0]);
        this.car3.animations.play('carSmoke',8,true);
        this.twc3 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
        this.twc3.loop();
        this.buy3 = this.game.add.button(this.game.width/2 + 106,(this.game.height*0.75) + this.car1.height,'buy');
        this.buy3.scale.setTo(.5);
        this.priceText3 = this.game.add.bitmapText(this.game.width/2 + 106,(this.game.height*0.80) + this.car1.height,'minecraftia','Price: ' + this.price3,16);

        this.car4 = this.game.add.sprite(this.game.width/2 + 300,this.game.height*0.5,'truck');
        this.car4.scale.setTo(.5,-.5);
        this.car4.animations.add('carSmoke', [0,1,2,1,0]);
        this.car4.animations.play('carSmoke',8,true);
        this.twc4 = this.game.add.tween(this.car1).from({x: this.car1.position.x, y: this.car1.position.y - 1}, 200, Phaser.Easing.Bounce.In, true);
        this.twc4.loop();
        this.buy4 = this.game.add.button(this.game.width/2 + 315,(this.game.height*0.75) + this.car1.height,'buy');
        this.buy4.scale.setTo(.5);
        this.priceText4 = this.game.add.bitmapText(this.game.width/2 + 315,(this.game.height*0.80) + this.car1.height,'minecraftia','Price: ' + this.price4,16);

        this.buy1.onInputDown.add(this.buyCar1, this);
        this.buy2.onInputDown.add(this.buyCar2, this);
        this.buy3.onInputDown.add(this.buyCar3, this);
        this.buy4.onInputDown.add(this.buyCar4, this);
        // this.game.add.bitmapText(this.game.width/2 -400,110,'minecraftia',this.game.global.cars,16);

        this.noCash = this.game.add.audio('noCash');
        this.hasCash = this.game.add.audio('hasCash');
    },
    update: function() {
        if (this.game.global.cars.find(this.checkVan) == 'vanF' ) {
            this.car1.destroy();
            this.buy1.destroy();
            this.priceText1.text = '';
        }
        if (this.game.global.cars.find(this.checkPolice) == 'policeF' ) {
            this.car2.destroy();
            this.buy2.destroy();
            this.priceText2.text = '';
        }
        if (this.game.global.cars.find(this.checkCar) == 'carF' ) {
            this.car3.destroy();
            this.buy3.destroy();
            this.priceText3.text = '';
        }
        if (this.game.global.cars.find(this.checkTruck) == 'truckF' ) {
            this.car4.destroy();
            this.buy4.destroy();
            this.priceText4.text = '';
        }
    },
    restart: function() {
        this.game.state.start('MainMenu', true, false);
    },
    buyCar1: function() {
        if (this.price1 <= this.game.global.star) {
            this.game.global.cars.push('vanF');
            this.game.global.star = this.game.global.star - this.price1;
            this.buy1.destroy();
            this.car1.destroy();
            this.priceText1.text = 'Car Bought';
            this.hasCash.play();
        }
        else if (this.price1 > this.game.global.star){
            this.ins1 = this.game.add.bitmapText(this.game.width/2 - 80,this.game.height/2 + 100,'minecraftia','insufficient star',16);
            game.add.tween(this.ins1).to( { alpha:  0}, 1800, Phaser.Easing.Linear.None, true);
            this.noCash.play();
        }
    },
    buyCar2: function() {
        
        if (this.game.global.star >= this.price2) {
            this.game.global.cars.push('policeF');
            this.game.global.star = this.game.global.star - this.price2;
            this.buy2.destroy();
            this.car2.destroy();
            this.priceText2.text = 'Car Bought';
            this.hasCash.play();
        }
        else if (this.game.global.star < this.price2){
            this.ins2 = this.game.add.bitmapText(this.game.width/2 - 80,this.game.height/2 + 100,'minecraftia','insufficient star',16);
            game.add.tween(this.ins2).to( { alpha:  0}, 1800, Phaser.Easing.Linear.None, true);
            this.noCash.play();
        }
    },
    buyCar3: function() {
        
        if (this.game.global.star >= this.price3) {
            this.game.global.cars.push('carF');
            this.game.global.star = this.game.global.star - this.price3;
            this.buy3.destroy();
            this.car3.destroy();
            this.priceText3.text = 'Car Bought';
            this.hasCash.play();
        }
        else if (this.game.global.star < this.price3){
            this.ins3 = this.game.add.bitmapText(this.game.width/2 - 80,this.game.height/2 + 100,'minecraftia','insufficient star',16);
            game.add.tween(this.ins3).to( { alpha:  0}, 1800, Phaser.Easing.Linear.None, true);
            this.noCash.play();
        }
    },
    buyCar4: function() {
        
        if (this.game.global.star >= this.price4) {
            this.game.global.cars.push('truckF');
            this.game.global.star = this.game.global.star - this.price4;
            this.buy4.destroy();
            this.car4.destroy();
            this.priceText4.text = 'Car Bought';
            this.hasCash.play();
        }
        else if (this.game.global.star < this.price4){
            this.ins4 = this.game.add.bitmapText(this.game.width/2 - 80,this.game.height/2 + 100,'minecraftia','insufficient star',16);
            game.add.tween(this.ins4).to( { alpha:  0}, 1800, Phaser.Easing.Linear.None, true);
            this.noCash.play();
    
        }
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
