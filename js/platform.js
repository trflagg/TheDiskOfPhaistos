define(['phaser'], function(phaser) {

  var Platform = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'platform');
  }
  Platform.prototype = Object.create(Phaser.Sprite.prototype);
  Platform.prototype.constructor = Platform;

  return Platform;


})
