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
    if (this.inWorld) {
      var platform = new Platform(this.state, this.x, this.y);
      platform.scale = new Phaser.Point(0.5, 0.5);
      platform.activate(this.state.screen);
      platform.make_current = false;
      platform.on_leave = function() {
        this.deactivate(this.state.screen);
      }
    }
  };
  return Bee;
})
