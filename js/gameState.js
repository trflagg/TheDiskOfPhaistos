define(['phaser'], function(phaser) {

  var GameState = function(game) {
  }

  GameState.prototype.create = function() {
    console.log('GameState create()');
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.pageAlignHorizontally = true;
  }
  return GameState;
})
