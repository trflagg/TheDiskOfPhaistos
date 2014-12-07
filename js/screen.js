define(['phaser'
        , './platform'
        , './gameText'
        , './disk']
        , function(phaser
                  , Platform
                  , GameText
                  , Disk) {

  return function(state) {
    var screen = [];

    screen.platforms = state.game.add.group();
    screen.platforms.enableBody = true;

    screen.disks = state.game.add.group();

    // screen[0]
    screen[0] = [];
    screen[0][0] = new Platform(state, 0, 128);
    screen[0][0].scale = new Phaser.Point(0.5, 0.5);
    screen[0][0].activate(screen);
    screen[0][0].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'The', 32));
    }

    screen[0][1] = new Platform(state, 64, 128);
    screen[0][1].scale = new Phaser.Point(0.5, 0.5);
    screen[0][1].activate(screen);
    screen[0][1].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'Disk', 32));
    }

    screen[0][2] = new Platform(state, 128, 128);
    screen[0][2].scale = new Phaser.Point(0.5 * 0.75, 0.5);
    screen[0][2].activate(screen);
    screen[0][2].on_leave = function() {
      this.deactivate();
      this.state.screen[0][4].activate(this.state.screen);
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'of', 32));
    }

    screen[0][3] = new Platform(state, screen[0][2].x + screen[0][2].width, 128);
    screen[0][3].scale = new Phaser.Point(0.5 * 2, 0.5);
    screen[0][3].activate(screen);
    screen[0][3].on_leave = function() {
      this.state.screen[0][5].activate(this.state.screen);
      this.state.screen[0][10].activate(this.state.screen);
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'Phaistos', 32));
      this.deactivate();
    }

    screen[0][4] = new Platform(state, 6.5 * 64, 384);
    screen[0][4].scale = new Phaser.Point(0.5 * 1.5, 0.5);
    screen[0][4].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'by hi-scor.es', 32));
    }

    screen[0][5] = new Platform(state, 10 * 64, 640);
    screen[0][5].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][5].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'what?', 32));
    }
    screen[0][5].on_enter = function() {
      this.state.screen[0][6].activate(this.state.screen);
      this.state.screen[0][7].activate(this.state.screen);
      this.state.screen[0][8].activate(this.state.screen);
      this.state.screen[0][9].activate(this.state.screen);

    }

    screen[0][6] = new Platform(state, 7 * 64, 640);
    screen[0][6].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][6].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'is', 32));
    }

    screen[0][7] = new Platform(state, 6 * 64, 640);
    screen[0][7].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][7].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'this', 32));
    }

    screen[0][8] = new Platform(state, 5 * 64, 640);
    screen[0][8].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][8].on_leave = function() {
      this.deactivate();
    }
    screen[0][9] = new Platform(state, 4 * 64, 640);
    screen[0][9].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][9].on_leave = function() {
      this.deactivate();
      state.game.add.existing(new GameText(this.state, this.x, this.y, 'disk?', 32));

    }
    screen[0][10] = new Platform(state, 1 * 64, 640);
    screen[0][10].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][10].on_leave = function() {
    }

    screen[0][11] = new Disk(state, screen[0][10]);
    screen[0][11].scale = new Phaser.Point(0.5 * 0.5, 0.5 * 0.5);
    screen.disks.add(screen[0][11]);

    return screen;
  }
})
