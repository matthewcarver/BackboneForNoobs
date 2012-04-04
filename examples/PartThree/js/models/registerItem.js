define(['backbone'], function(Backbone){

    var model =  Backbone.Model.extend({
                                             defaults: {
                                                 merchant:"linens 'n BEYoooonnnnnnnd",
                                                 date:new Date(2000,5,23),
                                                 amount: -1000000,
                                                 balance: 9999999
                                             }
                                         });

    return model;
});