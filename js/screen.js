define(['phaser'
        , './platform']
        , function(phaser
                  , Platform) {

  return function(state) {
    var screen = [];

    screen.platforms = state.game.add.group();
    screen.platforms.enableBody = true;

    // screen[0]
    screen[0] = [];
    screen[0][0] = new Platform(state.game, 0, 128 * state.position_scale_factor);
    screen[0][0].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen.platforms.add(screen[0][0]);

    screen[0][1] = new Platform(state.game, 64 * state.position_scale_factor, 128 * state.position_scale_factor);
    screen[0][1].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen.platforms.add(screen[0][1]);

    screen[0][2] = new Platform(state.game, 128 * state.position_scale_factor, 128 * state.position_scale_factor);
    screen[0][2].scale = new Phaser.Point(state.sprite_scale_factor * 0.75, state.sprite_scale_factor);
    screen.platforms.add(screen[0][2]);

    screen[0][3] = new Platform(state.game, screen[0][2].x + screen[0][2].width, 128 * state.position_scale_factor);
    screen[0][3].scale = new Phaser.Point(state.sprite_scale_factor * 2, state.sprite_scale_factor);
    screen.platforms.add(screen[0][3]);

    screen[0][4] = new Platform(state.game, 6.5 * 64 * state.position_scale_factor, 384 * state.position_scale_factor);
    screen[0][4].scale = new Phaser.Point(state.sprite_scale_factor * 1.5, state.sprite_scale_factor);
    screen.platforms.add(screen[0][4]);

    screen[0][5] = new Platform(state.game, 8 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][5].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);
    screen.platforms.add(screen[0][5]);

    screen[0][6] = new Platform(state.game, 7 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][6].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);
    screen.platforms.add(screen[0][6]);

    screen[0][7] = new Platform(state.game, 6 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][7].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);
    screen.platforms.add(screen[0][7]);

    screen[0][8] = new Platform(state.game, 5 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][8].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);
    screen.platforms.add(screen[0][8]);

    return screen;
  }
})
