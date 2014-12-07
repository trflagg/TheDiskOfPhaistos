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
    screen[0][0] = new Platform(state, 0, 128 * state.position_scale_factor);
    screen[0][0].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen[0][0].activate(screen);
    screen[0][0].on_leave = function() {
      this.deactivate();
    }

    screen[0][1] = new Platform(state, 64 * state.position_scale_factor, 128 * state.position_scale_factor);
    screen[0][1].scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    screen[0][1].activate(screen);
    screen[0][1].on_leave = function() {
      this.deactivate();
    }

    screen[0][2] = new Platform(state, 128 * state.position_scale_factor, 128 * state.position_scale_factor);
    screen[0][2].scale = new Phaser.Point(state.sprite_scale_factor * 0.75, state.sprite_scale_factor);
    screen[0][2].activate(screen);
    screen[0][2].on_leave = function() {
      this.deactivate();
      this.state.screen[0][4].activate(this.state.screen);
    }

    screen[0][3] = new Platform(state, screen[0][2].x + screen[0][2].width, 128 * state.position_scale_factor);
    screen[0][3].scale = new Phaser.Point(state.sprite_scale_factor * 2, state.sprite_scale_factor);
    screen[0][3].activate(screen);
    screen[0][3].on_leave = function() {
      this.state.screen[0][5].activate(this.state.screen);
      this.deactivate();
    }

    screen[0][4] = new Platform(state, 6.5 * 64 * state.position_scale_factor, 384 * state.position_scale_factor);
    screen[0][4].scale = new Phaser.Point(state.sprite_scale_factor * 1.5, state.sprite_scale_factor);
    screen[0][4].on_leave = function() {
      this.deactivate();
    }

    screen[0][5] = new Platform(state, 8 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][5].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);
    screen[0][5].on_leave = function() {
      this.deactivate();
    }

    screen[0][6] = new Platform(state, 7 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][6].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);

    screen[0][7] = new Platform(state, 6 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][7].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);

    screen[0][8] = new Platform(state, 5 * 64 * state.position_scale_factor, 640 * state.position_scale_factor);
    screen[0][8].scale = new Phaser.Point(state.sprite_scale_factor * 1, state.sprite_scale_factor);

    return screen;
  }
})
