define(['phaser'
        , './screen'
        , './platform'
        , './gameFSM'
        ], function(phaser
                    , Screen
                    , Platform
                    , GameFSM) {

  var GameState = function(game) {
  }

  GameState.prototype.preload = function() {
    this.load.image('platform', 'img/platform.png');
    this.load.image('pedestrian', 'img/pedestrian.png');
    this.load.image('disk', 'img/disk.png');
    this.load.image('disk_white', 'img/disk_white.png');
    this.load.image('flower_white', 'img/flower_white.png');
    this.load.bitmapFont('Averia', 'fonts/font.png', 'fonts/font.fnt');
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
    this.up = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.down = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    this.input.onDown.add(this.click, this);


    var pedestrian = this.add.existing(new Phaser.Sprite(this.game, 0, 0, 'pedestrian'));
    pedestrian.scale = new Phaser.Point(this.sprite_scale_factor / 2, this.sprite_scale_factor / 2);
    this.game.physics.enable(pedestrian, Phaser.Physics.ARCADE);

    pedestrian.body.maxVelocity.y = 500;
    pedestrian.body.collideWorldBounds = true;

    this.pedestrian = pedestrian;

    var bullets = this.game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(50, 'flower_white');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('body.allowGravity', false);
    bullets.setAll('scale', new Phaser.Point(this.sprite_scale_factor / 2, this.sprite_scale_factor /2));
    this.next_fire = 0;
    this.bullets = bullets;
    this.fire_rate = 100;

    // make screen array
    this.screen = Screen(this);

    this.fsm = new GameFSM(this);
    this.fsm.startup();
  }

  GameState.prototype.update = function() {

    this.pedestrian.body.velocity.x = 0;

    if (this.fsm.current === 'platform') {
      if (this.left.isDown) {
        this.pedestrian.body.velocity.x = -150;
      }
      else if (this.right.isDown) {
        this.pedestrian.body.velocity.x = 150;
      }
    }
    else if (this.fsm.current === 'shoot') {
      if (this.left.isDown) {
        this.floating_disk.body.velocity.x = -this.floating_disk.speed;
      }
      else if (this.right.isDown) {
        this.floating_disk.body.velocity.x = this.floating_disk.speed;
      }
      else if (this.up.isDown) {
        this.floating_disk.body.velocity.y = -this.floating_disk.speed;
      }
      else if (this.down.isDown) {
        this.floating_disk.body.velocity.y = this.floating_disk.speed;
      }

      if (this.game.input.activePointer.isDown)
      {
        this.fire();
      }
      this.floating_disk.rotation = this.state.game.physics.arcade.angleToPointer(this.floating_disk);
    }

    this.game.physics.arcade.collide(this.pedestrian, this.screen.platforms, this.collide_pedestrian_platform, null, this);
    this.game.physics.arcade.overlap(this.pedestrian, this.screen.disks, this.collide_pedestrian_disks, null, this);
  }

  GameState.prototype.collide_pedestrian_platform = function(pedestrian, platform) {
    platform.pedestrian_collision();
  };

  GameState.prototype.collide_pedestrian_disks = function(pedestrian, disk) {
    disk.pedestrian_collision(pedestrian);
  };

  GameState.prototype.click = function() {
    if (this.fsm.current === 'platform') {
      this.pedestrian.body.velocity.y = -400;
    }
  };

  GameState.prototype.fire = function() {

    if (this.game.time.now > this.next_fire && this.bullets.countDead() > 0)
    {
        this.next_fire = this.game.time.now + this.fire_rate;
        var bullet = this.bullets.getFirstDead();
        bullet.reset(this.floating_disk.x - this.floating_disk.width / 4, this.floating_disk.y - this.floating_disk.height /4);
        this.game.physics.arcade.moveToPointer(bullet, 1000);
    }

}

  return GameState;
})
