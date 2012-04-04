require.config({
                   paths: {
                       order: 'libs/require/order',
                       text: 'libs/require/text',
                       loader: 'libs/backbone/loader',
                       jquery: 'libs/jquery/jquery-1.7.1.min',
                       underscore: 'libs/underscore/underscore',
                       backbone: 'libs/backbone/backbone',
                       templates: 'templates'
                   }
               });

require([
            'router',
            'order!libs/jquery/jquery-1.7.1.min',
            'order!libs/underscore/underscore-min',
            'order!libs/backbone/backbone-min'
        ], function(Router){
    Router.initialize();
});
