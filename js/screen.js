define(['phaser'
        , './platform']
        , function(phaser
                  , Platform) {

  return function(state) {
    var screen = [];

    // screen[0]
    screen[0] = [];
    screen[0][0] = state.game.add.existing(new Platform(state.game, 0, 128));
    screen[0][1] = state.game.add.existing(new Platform(state.game, 128, 128));

    return screen;
  }
})
