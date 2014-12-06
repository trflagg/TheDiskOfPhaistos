define(['phaser'
        , './platform']
        , function(phaser
                  , Platform) {

  return function(state) {
    var screen = [];

    // screen[0]
    screen[0] = [];
    screen[0][0] = state.game.add.existing(new Platform(state.game, 0, 128 * state.position_scale_factor));
    screen[0][0].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen[0][1] = state.game.add.existing(new Platform(state.game, 64 * state.position_scale_factor, 128 * state.position_scale_factor));
    screen[0][1].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);

    return screen;
  }
})
