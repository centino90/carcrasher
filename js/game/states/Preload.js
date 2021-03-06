CarCrasher.Preload = function() {
    this.ready = false;
};

CarCrasher.Preload.prototype = {
    preload: function() {

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5); 

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('ground', 'assets/images/road.png');
        this.load.image('grass', 'assets/images/grass.png');
        this.load.image('sea', 'assets/images/sea.png');
        this.load.image('healthHigh', 'assets/images/healthFull.png');
        this.load.image('healthLow', 'assets/images/healthLow.png');
        this.load.image('sideroad', 'assets/images/sideroad.png');
        this.load.image('mountain', 'assets/images/mountain.png');
        this.load.image('inventory', 'assets/images/inventory.png');
        this.load.image('shop', 'assets/images/shop.png');
        this.load.image('useCar', 'assets/images/useCar.png');
        this.load.image('back', 'assets/images/back.png');
        this.load.image('mechanics', 'assets/images/mechanics.png');
        this.load.image('again', 'assets/images/playAgain.png');
        this.load.image('buy', 'assets/images/buy.png');
        this.load.image('inventoryBg', 'assets/images/inventory-bg.png');
        this.load.image('shopBg', 'assets/images/shop-bg.png');
        this.load.image('snowLeft', 'assets/images/snowCity.png');
        this.load.image('snowRight', 'assets/images/snowSide.png');
        this.load.image('snowTile', 'assets/images/snowTile.png');
        this.load.image('snowRoad', 'assets/images/snowRoad.png');
        this.load.image('selectMap', 'assets/images/selectMap.png');
        this.load.image('snowMap', 'assets/images/theSnowyMountainMap.png');
        this.load.image('beachMap', 'assets/images/theBeachMap.png');
        this.load.image('selectBtn', 'assets/images/selectBtn.png');
        this.load.image('startGame', 'assets/images/startGame.png');
        this.load.image('nightLeft', 'assets/images/nightLeft.png');
        this.load.image('nightRight', 'assets/images/nightRight.png');
        this.load.image('nightRoad', 'assets/images/nightRoad.png');
        this.load.image('nightTile', 'assets/images/nightTile.png');
        this.load.image('midnight', 'assets/images/theMidnightMap.png');
        
        // this.load.image('healthBox', 'assets/images/healthBox.png');

        // player cars
        this.load.spritesheet('black', 'assets/images/player.png', 129.2, 316, 3);
        this.load.spritesheet('taxi', 'assets/images/taxi.png', 121.5, 325, 3);
        this.load.spritesheet('policeF', 'assets/images/policeFriendly.png', 120.5, 293, 3);
        this.load.spritesheet('carF', 'assets/images/carFriendly.png', 130.2, 292, 3);
        this.load.spritesheet('vanF', 'assets/images/vanFriendly.png', 139.6, 319, 3);
        this.load.spritesheet('truckF', 'assets/images/truckFriendly.png', 159.5, 498, 3);
       
        // faded player cars
        this.load.spritesheet('fadeTaxi', 'assets/images/fadeTaxi.png',121.5, 325, 3);
        this.load.spritesheet('fadeBlack', 'assets/images/fadePlayer.png',129.2, 316, 3);
        this.load.spritesheet('fadePolice', 'assets/images/policeFriendlyFade.png', 120.5, 293, 3);
        this.load.spritesheet('fadeCar', 'assets/images/carFriendlyFade.png', 132.5, 292, 3);
        this.load.spritesheet('fadeVan', 'assets/images/vanFriendlyFade.png', 140, 319, 3);
        this.load.spritesheet('fadeTruck', 'assets/images/truckFriendlyFade.png', 159.5, 498, 3);


        // others
        this.load.spritesheet('police', 'assets/images/police.png', 119, 291, 3);
        this.load.spritesheet('truck', 'assets/images/truck.png', 159.5, 498, 3);
        this.load.spritesheet('van', 'assets/images/van.png', 139.6, 319, 3);
        this.load.spritesheet('car', 'assets/images/car.png', 130, 292, 3);
        this.load.spritesheet('booster', 'assets/images/booster.png', 42.6, 45, 6);
        this.load.spritesheet('hourglass', 'assets/images/hourglass.png', 31, 42, 5);
        this.load.spritesheet('explode', 'assets/images/explode.png', 57.3, 52, 6);
        this.load.spritesheet('healthBox', 'assets/images/healthBox.png',69,49, 0);
        this.load.spritesheet('beachside', 'assets/images/beachside.png',450, 5000, 4);        
        this.load.spritesheet('star', 'assets/images/star.png',66, 80, 3);     
        this.load.spritesheet('carcrasher', 'assets/images/carlogo.png',763, 312, 5);   
        this.load.spritesheet('tap', 'assets/images/taptoplay.png',300, 79.2, 5);   
        this.load.spritesheet('carSmoke', 'assets/images/carSmoke.png',410, 210, 6);   


        this.load.audio('gameMusic', ['assets/audio/background-music.mp3']);
        this.load.audio('beatRecord', 'assets/audio/beat-the-record.mp3');
        this.load.audio('boostSoundtrack', 'assets/audio/booster-soundtrack.mp3');
        this.load.audio('boostPickup', 'assets/audio/pickup-boost.mp3');
        this.load.audio('carExplode', 'assets/audio/car-explosion.mp3');
        this.load.audio('manuever', 'assets/audio/car-manuever.mp3');
        this.load.audio('lost', 'assets/audio/lost-captured.mp3');
        this.load.audio('siren', 'assets/audio/police-siren.mp3');
        this.load.audio('engine', 'assets/audio/start-engine.mp3');
        this.load.audio('wallCrash', 'assets/audio/wall-crash.mp3');
        this.load.audio('nitro', 'assets/audio/nitro.mp3');
        this.load.audio('noNitro', 'assets/audio/noNitro.mp3');
        this.load.audio('noCash', 'assets/audio/unsuccessfulPurchase.mp3');
        this.load.audio('hasCash', 'assets/audio/successfulPurchase.mp3');



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