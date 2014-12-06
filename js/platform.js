define(['phaser'], function(phaser) {

  var Platform = function(state, x, y) {
    Phaser.Sprite.call(this, state.game, x, y, 'platform');
    this.state = state;
    state.game.add.existing(this);
    state.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.body.allowGravity = false;

    this.visible = false;
  }
  Platform.prototype = Object.create(Phaser.Sprite.prototype);
  Platform.prototype.constructor = Platform;

  Platform.prototype.activate = function(screen) {
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    screen.platforms.add(this);
    this.visible = true;
  };

  return Platform;


})
