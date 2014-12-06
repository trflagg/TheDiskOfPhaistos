define(['phaser'], function(phaser) {

  var Platform = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'platform');
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.body.gravity = 0;
  }
  Platform.prototype = Object.create(Phaser.Sprite.prototype);
  Platform.prototype.constructor = Platform;

  return Platform;


})
