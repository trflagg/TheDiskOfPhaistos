define(['phaser'], function(phaser) {
  var GameText = function(state, x, y, text, size) {
    Phaser.BitmapText.call(this, state.game, x, y, 'Averia', text, size);
  }
  GameText.prototype = Object.create(Phaser.BitmapText.prototype);
  GameText.prototype.constructor = GameText;


  return GameText;
})
