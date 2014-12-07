define(['phaser'], function(phaser) {
  var FloatingDisk = function(state) {
    Phaser.Sprite.call(this, state.game, state.game.width / 3, state.game.height / 2, 'disk_white');
    this.scale = new Phaser.Point(state.sprite_scale_factor, state.sprite_scale_factor);
    state.game.physics.enable(this, Phaser.Physics.ARCADE);
    state.game.add.existing(this);
    this.body.allowGravity = false;
    this.speed = 500;
    this.body.drag.set(1000);
    this.anchor.set(0.5);
    this.state = state;
  }
  FloatingDisk.prototype = Object.create(Phaser.Sprite.prototype);
  FloatingDisk.constructor = FloatingDisk;

  return FloatingDisk;
})
