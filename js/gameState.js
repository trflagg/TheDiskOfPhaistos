define(['phaser'
        , './platform'
        ], function(phaser
                    , Platform) {

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
    this.game.debug.geom(new Phaser.Rectangle(0, 0, this.game.width - 1, this.game.height), '#ffff00', false);

    this.add.existing(new Platform(this.game, 0, 128));
    this.add.existing(new Platform(this.game, 128, 128));

    this.add.existing(new Phaser.Sprite(this.game, 0, 0, 'pedestrian'));
  }
  return GameState;
})
