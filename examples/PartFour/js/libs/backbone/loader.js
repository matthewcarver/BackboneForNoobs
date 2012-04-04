define(['jquery', 'order!libs/underscore/underscore-min', 'order!libs/backbone/backbone-min'],
       function(jQuery){
           return {
               Backbone: Backbone.noConflict(),
               _: _.noConflict()
           };
       });