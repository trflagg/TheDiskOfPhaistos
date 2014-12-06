define(['phaser'
        , './platform']
        , function(phaser
                  , Platform) {

  return function(state) {
    var screen = [];

    // screen[0]
    screen[0] = [];
    screen[0][0] = state.game.add.existing(new Platform(state.game, 0, 128 * state.scale_factor));
    screen[0][0].scale = new Phaser.Point(state.scale_factor, state.scale_factor);
    screen[0][1] = state.game.add.existing(new Platform(state.game, 128 * state.scale_factor, 128 * state.scale_factor));
    screen[0][1].scale = new Phaser.Point(state.scale_factor, state.scale_factor);

    return screen;
  }
})
