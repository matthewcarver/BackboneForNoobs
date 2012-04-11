define(['backbone', 'models/registerItem'],function(Backbone, RegisterItem){
    var collection = Backbone.Collection.extend({
                                                    model: RegisterItem,
                                                    url: '/BackboneForNoobs/registeritems.json'
                                                });

    return collection;
});
