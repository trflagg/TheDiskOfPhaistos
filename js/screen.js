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

    screen.created_platforms = state.game.add.group();
    screen.created_platforms.enableBody = true;

    screen.disks = state.game.add.group();

    // screen[0]
    screen[0] = [];
    screen[0][0] = new Platform(state, 0, 128);
    screen[0][0].scale = new Phaser.Point(0.5, 0.5);
    screen[0][0].activate(screen);
    screen[0][0].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.the = state.game.add.existing(new GameText(this.state, this.x, this.y, 'The', 32));
    }
    screen[0][0].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.the.destroy();
    }

    screen[0][1] = new Platform(state, 64, 128);
    screen[0][1].scale = new Phaser.Point(0.5, 0.5);
    screen[0][1].activate(screen);
    screen[0][1].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.disk = state.game.add.existing(new GameText(this.state, this.x, this.y, 'Disk', 32));
    }
    screen[0][1].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.disk.destroy();
    }

    screen[0][2] = new Platform(state, 128, 128);
    screen[0][2].scale = new Phaser.Point(0.5 * 0.75, 0.5);
    screen[0][2].activate(screen);
    screen[0][2].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen[0][4].activate(this.state.screen);
      this.state.screen.of = state.game.add.existing(new GameText(this.state, this.x, this.y, 'of', 32));
    }
    screen[0][2].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen[0][4].deactivate(this.state.screen);
      this.state.screen.of.destroy();
    }

    screen[0][3] = new Platform(state, screen[0][2].x + screen[0][2].width, 128);
    screen[0][3].scale = new Phaser.Point(0.5 * 2, 0.5);
    screen[0][3].activate(screen);
    screen[0][3].on_leave = function() {
      this.state.screen[0][5].activate(this.state.screen);
      this.state.screen[0][10].activate(this.state.screen);
      this.state.Phaistos = state.game.add.existing(new GameText(this.state, this.x, this.y, 'Phaistos', 32))
      screen[0][11] = new Disk(state, screen[0][10]);
      screen[0][11].scale = new Phaser.Point(0.5 * 0.5, 0.5 * 0.5);
      screen.disks.add(screen[0][11]);
      this.deactivate(this.state.screen);
    }
    screen[0][3].on_unleave = function() {
      this.state.screen[0][5].deactivate(this.state.screen);
      this.state.screen[0][10].deactivate(this.state.screen);
      this.state.Phaistos.destroy();
      this.activate(this.state.screen);
    }

    screen[0][4] = new Platform(state, 6.5 * 64, 384);
    screen[0][4].scale = new Phaser.Point(0.5 * 1.5, 0.5);
    screen[0][4].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.by = state.game.add.existing(new GameText(this.state, this.x, this.y, 'by hi-scor.es', 32));
    }
    screen[0][4].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.by.destroy();
    }

    screen[0][5] = new Platform(state, 10 * 64, 640);
    screen[0][5].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][5].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.what = state.game.add.existing(new GameText(this.state, this.x, this.y, 'what?', 32));
    }
    screen[0][5].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.what.destroy();
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
      this.deactivate(this.state.screen);
      this.state.screen.is = state.game.add.existing(new GameText(this.state, this.x, this.y, 'is', 32));
    }
    screen[0][6].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.is.destroy();
    }

    screen[0][7] = new Platform(state, 6 * 64, 640);
    screen[0][7].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][7].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.this = state.game.add.existing(new GameText(this.state, this.x, this.y, 'this', 32));
    }
    screen[0][7].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.this.destroy();
    }

    screen[0][8] = new Platform(state, 5 * 64, 640);
    screen[0][8].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][8].on_leave = function() {
      this.deactivate(this.state.screen);
    }
    screen[0][8].on_unleave = function() {
      this.activate(this.state.screen);
    }
    screen[0][9] = new Platform(state, 4 * 64, 640);
    screen[0][9].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][9].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.diskText = state.game.add.existing(new GameText(this.state, this.x, this.y, 'disk?', 32));
    }
    screen[0][9].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.diskText.destroy();
    }
    screen[0][10] = new Platform(state, 1 * 64, 640);
    screen[0][10].scale = new Phaser.Point(0.5 * 1, 0.5);
    screen[0][10].on_leave = function() {
    }
    screen[0][10].on_enter = function() {
      screen[0][12].activate(this.state.screen);
    }

    screen[0][12] = new Platform(state, 15 * 64, 128, 'platform_white');
    screen[0][12].scale = new Phaser.Point(0.5, 0.5);
    screen[0][12].on_enter = function() {
      // I have no idea why
      // but it helps to run it several times
      for (var i=0; i<4; i++) {
        this.state.screen.platforms.forEach(function(platform) {
            if (platform && platform.make_current === false) {
              platform.deactivate();
            }
          }, this);
      }

      screen[1][0].activate(this.state.screen);
      screen[1][1].activate(this.state.screen);
      screen[1][2].activate(this.state.screen);
      screen[1][3].activate(this.state.screen);
      screen[1][4].activate(this.state.screen);
      screen[1][5] = new Disk(state, screen[1][3]);
      screen[1][5].scale = new Phaser.Point(0.5 * 0.5, 0.5 * 0.5);
      screen.disks.add(screen[1][5]);
    }

    screen[1] = [];
    screen[1][0] = new Platform(state, 10 * 64, 128);
    screen[1][0].scale = new Phaser.Point(0.5, 0.5);
    screen[1][0].on_leave = function() {
      this.deactivate(this.state.screen);
    }
    screen[1][0].on_unleave = function() {
      this.activate(this.state.screen);
    }

    screen[1][1] = new Platform(state, 8 * 64, 128);
    screen[1][1].scale = new Phaser.Point(0.5, 0.5);
    screen[1][1].on_leave = function() {
      this.deactivate(this.state.screen);
    }
    screen[1][1].on_unleave = function() {
      this.activate(this.state.screen);
    }

    screen[1][2] = new Platform(state, 6 * 64, 128);
    screen[1][2].scale = new Phaser.Point(0.5, 0.5);
    screen[1][2].on_leave = function() {
      this.deactivate(this.state.screen);
    }
    screen[1][2].on_unleave = function() {
      this.activate(this.state.screen);
      screen[2][0].deactivate();
    }
    screen[1][2].on_enter = function() {
      screen[2][0].activate(this.state.screen);
    }

    screen[1][3] = new Platform(state, 5 * 64, 128);
    screen[1][3].scale = new Phaser.Point(0.5, 0.5);
    screen[1][3].on_leave = function() {
    }
    screen[1][3].on_unleave = function() {
    }
    screen[1][3].on_enter = function() {
    }


    screen[1][4] = new Platform(state, 12 * 64, 128);
    screen[1][4].scale = new Phaser.Point(0.5, 0.5);
    screen[1][4].on_leave = function() {
      this.deactivate(this.state.screen);
    }
    screen[1][4].on_unleave = function() {
      this.activate(this.state.screen);
    }

    screen[2] = [];
    screen[2][0] = new Platform(state, 15 * 64, 640, 'platform_white');
    screen[2][0].scale = new Phaser.Point(0.5, 0.5);
    screen[2][0].on_enter = function() {
      // I have no idea why
      // but it helps to run it several times
      for (var i=0; i<4; i++) {
        this.state.screen.platforms.forEach(function(platform) {
            if (platform && platform.make_current === false) {
              platform.deactivate();
            }
          }, this);
      }
      screen[2][1].activate(this.state.screen);
      screen[2][2].activate(this.state.screen);
      screen[2][3].activate(this.state.screen);
      screen[2][4].activate(this.state.screen);
      screen[2][5].activate(this.state.screen);
      screen[2][6].activate(this.state.screen);
      screen[2][7].activate(this.state.screen);
      screen[2][8].activate(this.state.screen);
    }

    screen[2][1] = new Platform(state, 16 * 64, 512);
    screen[2][1].scale = new Phaser.Point(0.5, 0.5);
    screen[2][1].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.but = state.game.add.existing(new GameText(this.state, this.x, this.y, 'but', 32));
    }
    screen[2][1].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.but.destroy();
    }

    screen[2][2] = new Platform(state, 16 * 64, 386);
    screen[2][2].scale = new Phaser.Point(0.5, 0.5);
    screen[2][2].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.the2 = state.game.add.existing(new GameText(this.state, this.x, this.y, 'the', 32));
    }
    screen[2][2].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.the2.destroy();
      screen[2][0].deactivate();
    }

    screen[2][3] = new Platform(state, 16 * 64, 256);
    screen[2][3].scale = new Phaser.Point(0.5, 0.5);
    screen[2][3].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.soul = state.game.add.existing(new GameText(this.state, this.x, this.y, 'soul', 32));
    }
    screen[2][3].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.soul.destroy();
    }
    screen[2][3].on_enter = function() {
    }


    screen[2][4] = new Platform(state, 16 * 64, 128);
    screen[2][4].scale = new Phaser.Point(0.5, 0.5);
    screen[2][4].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.remains = state.game.add.existing(new GameText(this.state, this.x, this.y, 'remains', 32));
    }
    screen[2][4].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.remains.destroy();
    }


    screen[2][5] = new Platform(state, 15 * 64, 576);
    screen[2][5].scale = new Phaser.Point(0.5, 0.5);
    screen[2][5].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.transformed = state.game.add.existing(new GameText(this.state, this.x, this.y, 'transformed', 32));
    }
    screen[2][5].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.transformed.destroy();
    }

    screen[2][6] = new Platform(state, 15 * 64, 448);
    screen[2][6].scale = new Phaser.Point(0.5, 0.5);
    screen[2][6].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.is1 = state.game.add.existing(new GameText(this.state, this.x, this.y, 'is', 32));
    }
    screen[2][6].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.is1.destroy();
    }

    screen[2][7] = new Platform(state, 15 * 64, 320);
    screen[2][7].scale = new Phaser.Point(0.5, 0.5);
    screen[2][7].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.body = state.game.add.existing(new GameText(this.state, this.x, this.y, 'body', 32));
    }
    screen[2][7].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.body.destroy();
    }

    screen[2][8] = new Platform(state, 15 * 64, 192);
    screen[2][8].scale = new Phaser.Point(0.5, 0.5);
    screen[2][8].on_leave = function() {
      this.deactivate(this.state.screen);
      this.state.screen.the1 = state.game.add.existing(new GameText(this.state, this.x, this.y, 'the', 32));
    }
    screen[2][8].on_unleave = function() {
      this.activate(this.state.screen);
      this.state.screen.the1.destroy();
    }


    return screen;
  }
})
