define(['fsm'], function(fsm) {
  var GameFSM = function(state) {
    this.state = state;
  }

  GameFSM.prototype.onplatform = function(event, from, to) {
    console.log('platform');

  };

  GameFSM.prototype.onshoot = function(event, from, to) {
    console.log('shoot');
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
