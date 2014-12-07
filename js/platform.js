define(['phaser'], function(phaser) {

  var Platform = function(state, x, y) {
    Phaser.Sprite.call(this, state.game, x, y, 'platform');
    this.state = state;
    state.game.add.existing(this);
    state.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.body.allowGravity = false;

    this.body.checkCollision.right = false;
    this.body.checkCollision.left = false;
    this.body.checkCollision.down = false;

    this.pedestrian_standing_on = false;
    this.visible = false;
  }
  Platform.prototype = Object.create(Phaser.Sprite.prototype);
  Platform.prototype.constructor = Platform;

  Platform.prototype.activate = function(screen) {
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    screen.platforms.add(this);
    this.visible = true;
  };

  Platform.prototype.deactivate = function() {
    this.state.screen.platforms.remove(this);
    this.visible = false;
  };

  Platform.prototype.pedestrian_collision = function() {
    if (!this.pedestrian_standing_on) {
      this.pedestrian_standing_on = true;
      this.state.current_platform = this;
      this.on_enter();
    }
    return true;
  };

  Platform.prototype.pedestrian_left = function() {
    this.on_leave();
  };

  Platform.prototype.on_enter = function() {
    // noop
    // to be customized on platform-by-platform basis;
  }

  Platform.prototype.on_leave = function() {
    // noop
    // to be customized on platform-by-platform basis;
  };

  Platform.prototype.on_unleave = function() {
    // noop
    // to be customized on platform-by-platform basis;
  };

  Platform.prototype.update = function() {
    if (this.pedestrian_standing_on) {
      if (!this.body.touching.up) {
        // he left?
        this.pedestrian_left();
        this.pedestrian_standing_on = false;
      }
    }
  };

  return Platform;


})
