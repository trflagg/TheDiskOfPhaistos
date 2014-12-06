define(['phaser'
        , './platform']
        , function(phaser
                  , Platform) {

  return function(state) {
    var screen = [];

    screen.platforms = state.game.add.group();

    // screen[0]
    screen[0] = [];
    screen[0][0] = new Platform(state.game, 0, 128 * state.position_scale_factor);
    screen[0][0].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen.platforms.add(screen[0][0]);
    screen[0][1] = new Platform(state.game, 64 * state.position_scale_factor, 128 * state.position_scale_factor);
    screen[0][1].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen.platforms.add(screen[0][1]);

    return screen;
  }
})
