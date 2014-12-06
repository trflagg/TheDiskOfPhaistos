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

    this.position_scale_factor = 1;
    this.sprite_scale_factor = 0.5

    this.game.debug.geom(new Phaser.Rectangle(0, 0, this.game.width - 1, this.game.height), '#ffff00', false);

    // make screen array
    this.screen = Screen(this);

    this.pedestrian = this.add.existing(new Phaser.Sprite(this.game, 0, 64, 'pedestrian'));
    this.pedestrian.scale = new Phaser.Point(this.sprite_scale_factor, this.sprite_scale_factor);
  }
  return GameState;
})
