define(['phaser'], function(phaser) {
  var Pedestrian = function(state) {
    Phaser.Sprite.call(this, state.game, 0, 0, 'pedestrian');
    this.scale = new Phaser.Point(0.25, 0.25);
    state.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.maxVelocity.y = 500;
    this.events.onKilled.add(this.killed, this);
    this.state = state;
  }
  Pedestrian.prototype = Object.create(Phaser.Sprite.prototype);
  Pedestrian.constructor = Pedestrian;

  Pedestrian.prototype.killed = function() {
    console.log('killed');
    this.state.current_platform.on_unleave();
    this.x = this.state.current_platform.x + 10;
    this.y = this.state.current_platform.y - this.state.current_platform.height;
    this.alive = true;
    this.exists = true;
    this.visible = true;
  };
  return Pedestrian
})
