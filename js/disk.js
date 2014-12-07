define(['phaser'], function(phaser) {
  var Disk = function(x, y) {
    Phaser.Sprite.call(this, x, y, 'disk');
  }
  Disk.prototype = Object.create(Phaser.Sprite.prototype);
  Disk.constructor = Disk;


  return Disk;
})
