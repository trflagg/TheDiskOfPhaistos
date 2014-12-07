require.config({
    paths: {
        'phaser': '../phaser/build/phaser'
        , 'jquery': '//code.jquery.com/jquery-2.1.1.min'
        , 'fsm': '../javascript-state-machine/state-machine'
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

    var game = new Phaser.Game(($(window).height() - 20) * 1.618, $(window).height() - 20
                                , Phaser.AUTO, 'game');

    game.state.add('Game', GameState);

    game.state.start('Game');
})
