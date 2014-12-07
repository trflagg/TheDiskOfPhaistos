define(['fsm'
        , './floating_disk']
        , function(fsm
                    , FloatingDisk) {
  var GameFSM = function(state) {
    this.state = state;
  }

  GameFSM.prototype.onplatform = function(event, from, to) {
    console.log('platform');

    if (from != 'none') {
      var stage = this.state.game.stage;
      stage.backgroundColor = '#FFFFFF';
      setTimeout(function() {
        stage.backgroundColor = '#FFFF00'
      }, 300);
      setTimeout(function() {
        stage.backgroundColor = '#000000'
      }, 700);
    }
    if (from === 'shoot') {
      this.state.floating_disk.destroy();
      this.state.bees.setAll('alive', false);
    }

  };

  GameFSM.prototype.onshoot = function(event, from, to) {
    console.log('shoot');

    var stage = this.state.game.stage;
    stage.backgroundColor = '#FFFF00';
    setTimeout(function() {
      stage.backgroundColor = '#FFFFFF'
    }, 300);
    setTimeout(function() {
      stage.backgroundColor = '#000000'
    }, 700);

    var floating_disk = new FloatingDisk(this.state);
    this.state.floating_disk = floating_disk;
    this.state.next_bee = 1000;
  };

  fsm.create({
    target: GameFSM.prototype

    , events: [
      { name: 'startup', from:'none', to:'platform'}
      , { name: 'platformer', from:'shoot', to: 'platform'}
      , { name: 'shooter', from:'platform', to: 'shoot'}
    ]
  });

  return GameFSM;
})
