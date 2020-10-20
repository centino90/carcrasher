CarCrasher.SelectMap = function() {};

CarCrasher.SelectMap.prototype = {
    create: function() {

    this.bg = this.game.add.image(0,0,'selectMap');
    this.bg.height = this.game.height;
    this.bg.width = this.game.width;

    // map collection
    this.back = this.game.add.button(10,10,'back', this.restart);

    this.map1 = this.game.add.image(this.game.width*0.18,this.game.height*0.25,'beachMap');
    this.map1.height = this.game.height * 0.30;
    this.map1.width = this.game.width * 0.20;
    this.btn1 = this.game.add.button(this.game.width*.24,(this.game.height*0.25)+ this.map1.height,'selectBtn');
    this.btn1.scale.setTo(.5);

    this.map2 = this.game.add.image(this.game.width*.40,this.game.height*0.25,'snowMap');
    this.map2.height = this.game.height * 0.30;
    this.map2.width = this.game.width * 0.20;
    this.btn2 = this.game.add.button(this.game.width*0.46,(this.game.height*0.25) + this.map2.height,'selectBtn');
    this.btn2.scale.setTo(.5);

    this.map3 = this.game.add.image(this.game.width*.62,this.game.height*0.25,'midnight');
    this.map3.height = this.game.height * 0.30;
    this.map3.width = this.game.width * 0.20;
    this.btn3 = this.game.add.button(this.game.width*0.68,(this.game.height*0.25) + this.map3.height,'selectBtn');
    this.btn3.scale.setTo(.5);

    this.btn1.onInputDown.add(this.selectMap1, this);
    this.btn2.onInputDown.add(this.selectMap2, this);
    this.btn3.onInputDown.add(this.selectMap3, this);
    
    // star earned
    this.curMap = this.game.add.bitmapText(this.game.width/2 -400,110,'minecraftia','Current map selected: ' + this.game.global.bg,16);
    this.start = this.game.add.button(this.game.width*0.42,this.game.height*.75,'startGame', this.startGame);
    this.start.scale.setTo(1);
        
    this.selectMap = this.game.add.audio('noNitro');
    },
    update: function() {
        this.curMap.text = 'Current map selected: ' + this.game.global.bg;
    },
    restart: function() {
        this.game.state.start('MainMenu', true, false);
    },
    selectMap1: function() {
        this.game.global.bg = 'beach';
        this.selectMap.play();      
    },
    selectMap2: function() {
        this.game.global.bg = 'snow';
        this.selectMap.play();
    },
    selectMap3: function() {
        this.game.global.bg = 'midnight';
        this.selectMap.play();
    },
    startGame: function() {
        this.game.state.start('Game'); //call the start state when the condition above is met
    }

}; 
