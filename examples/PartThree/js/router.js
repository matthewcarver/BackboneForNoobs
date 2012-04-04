define(['backbone', 'views/register', 'views/bills', 'collections/registerItems'],
    function(Backbone, RegisterView, BillsView, RegisterItems){

    var AppRouter = Backbone.Router.extend({
                                               routes: {
                                                   'register': 'register',
                                                   'bills': 'bills',
                                                   '*actions': 'defaultAction'
                                               },
                                               defaultAction: function(actions){
                                                   var v = new RegisterView({el:$("#content"), model: new RegisterItems()}); // if you want to load a view by default
                                               },
                                               register: function(actions){
                                                   var v = new RegisterView({el:$("#content"), model: new RegisterItems()});
                                               },
                                               bills: function(actions){
                                                   var v = new BillsView({el:$("#content")});
                                               }
                                           });

    var initialize = function(){
        var app_router = new AppRouter;

        // applies style to element on all route changes
        app_router.bind('all', function(route) {
            $('.menu_buttons li').removeClass('on_page');
            $('.menu_buttons li a.' + route.replace('route:', '')).parent().addClass('on_page');
        });

        // backbone will remember the history and intercept back/forward actions
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});