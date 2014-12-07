define(['phaser'
        , 'platform'
        ], function(phaser
                    , Platform) {
  var Bee = function(state) {
    Phaser.Sprite.call(this, state.game, 0, 0, 'bee_white');
    this.alive = false;
    this.visible = false;
    this.state = state;
    this.events.onKilled.add(this.killed, this);
  }
  Bee.prototype = Object.create(Phaser.Sprite.prototype);
  Bee.constructor = Bee;

  Bee.prototype.killed = function() {
    var platform = new Platform(this.state, this.x, this.y);
    platform.scale = new Phaser.Point(this.state.sprite_scale_factor, this.state.sprite_scale_factor);
    platform.activate(this.state.screen);
  };
  return Bee;
})
