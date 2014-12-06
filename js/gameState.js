define(['phaser'
        , './screen'
        , './platform'
        ], function(phaser
                    , Screen) {

  var GameState = function(game) {
  }

  GameState.prototype.preload = function() {
    this.load.image('platform', 'img/platform.png');
    this.load.image('pedestrian', 'img/pedestrian.png');
  };

  GameState.prototype.create = function() {
    console.log('GameState create()');
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.pageAlignHorizontally = true;

    this.position_scale_factor = this.game.height / 768;
    this.sprite_scale_factor = this.position_scale_factor / 2;

    this.game.debug.geom(new Phaser.Rectangle(0, 0, this.game.width - 1, this.game.height), '#ffff00', false);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;

    // add controls
    this.left = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.right = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.input.onDown.add(this.click, this);


    var pedestrian = this.add.existing(new Phaser.Sprite(this.game, 0, 0, 'pedestrian'));
    pedestrian.scale = new Phaser.Point(this.sprite_scale_factor / 2, this.sprite_scale_factor / 2);
    this.game.physics.enable(pedestrian, Phaser.Physics.ARCADE);

    pedestrian.body.maxVelocity.y = 500;
    pedestrian.body.collideWorldBounds = true;

    this.pedestrian = pedestrian;

    // make screen array
    this.screen = Screen(this);
  }

  GameState.prototype.update = function() {

    this.pedestrian.body.velocity.x = 0;

    if (this.left.isDown) {
      this.pedestrian.body.velocity.x = -150;
    }
    else if (this.right.isDown) {
      this.pedestrian.body.velocity.x = 150;
    }
    this.game.physics.arcade.collide(this.pedestrian, this.screen.platforms, this.collide_pedestrian_platform, null, this);
  }

  GameState.prototype.collide_pedestrian_platform = function(pedestrian, platform) {
    platform.pedestrian_collision();
  };

  GameState.prototype.click = function() {
    this.pedestrian.body.velocity.y = -400;
  };

  return GameState;
})
