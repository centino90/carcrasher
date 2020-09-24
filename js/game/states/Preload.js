ZenvaRunner.Preload = function() {
    this.ready = false;
};

ZenvaRunner.Preload.prototype = {
    preload: function() {

        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('grass', 'assets/images/grass.png');

        this.load.spritesheet('player', 'assets/images/player.png', 129.2, 316, 3);
        this.load.spritesheet('police', 'assets/images/police.png', 119, 291, 3);
        this.load.spritesheet('truck', 'assets/images/truck.png', 159.5, 498, 3);
        this.load.spritesheet('van', 'assets/images/van.png', 139.5, 319, 3);
        this.load.spritesheet('car', 'assets/images/car.png', 130, 292, 3);
        this.load.spritesheet('booster', 'assets/images/booster.png', 46, 48, 7);
        this.load.spritesheet('explode', 'assets/images/explode.png', 57.3, 52, 6);

        this.load.audio('gameMusic', ['assets/audio/Pamgaea.mp3', 'assets/audio/Pamgaea.ogg']);
        this.load.audio('rocket', 'assets/audio/rocket.wav');
        this.load.audio('bounce', 'assets/audio/bounce.wav');
        this.load.audio('coin', 'assets/audio/coin.wav');
        this.load.audio('death', 'assets/audio/death.wav');

        this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');
        
        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function() {
        this.preloadBar.cropEnabled = false;
    },
    update: function() {
        if(this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
            this.state.start('MainMenu');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};