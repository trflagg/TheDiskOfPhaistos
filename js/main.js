require.config({
    paths: {
        'phaser': '../bower_components/phaser/build/phaser'
        , 'jquery': '//code.jquery.com/jquery-2.1.1.min'
    }

    , shim: {
    }
});


require(['phaser'
          , 'jquery'
          , './gameState']
          , function(phaser
                      , $
                      , GameState) {
    console.log('The Disk of Phaistos');
    console.log('by hi-scor.es');

    var game = new Phaser.Game(($(window).height() - 30) * 1.618, $(window).height() - 30
                                , Phaser.AUTO, 'game');

    game.state.add('Game', GameState);

    game.state.start('Game');
})
