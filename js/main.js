require.config({
    paths: {
        'phaser': '../bower_components/phaser/build/phaser'
    }

    , shim: {
    }
});


require(['phaser'], function() {
    console.log('The Disk of Phaistos');
    console.log('by hi-scor.es');
})
