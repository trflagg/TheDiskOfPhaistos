define(['phaser'], function(phaser) {
  var Disk = function(state, platform) {
    Phaser.Sprite.call(this, state.game, platform.x + platform.width /4, platform.y - platform.height /2, 'disk');
    state.game.add.existing(this);
    state.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.state = state;
    this.body.allowGravity = false;
    this.collided = false;
  }
  Disk.prototype = Object.create(Phaser.Sprite.prototype);
  Disk.constructor = Disk;

  Disk.prototype.pedestrian_collision = function(pedestrian) {
    if (this.state.fsm.current === 'platform' && !this.collided) {
      this.state.fsm.shooter();
      this.collided = true;
    }
  };

  return Disk;
})
