var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,'');

game.state.add('Boot', ZenvaRunner.Boot);
game.state.add('Preloader', ZenvaRunner.Preload);
game.state.add('MainMenu', ZenvaRunner.MainMenu);
game.state.add('Game', ZenvaRunner.Game);

game.state.start('Boot');
