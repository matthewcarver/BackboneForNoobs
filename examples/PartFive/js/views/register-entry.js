define(['jquery', 'underscore', 'backbone', 'text!templates/register-entry.html', 'models/registerItem'],
function ($, _, Backbone, EntryView, RegisterItem) {

    var view = Backbone.View.extend({
        template: _.template(EntryView),
        events: {
            "click #add": "addTransaction"
        },
        initialize:function () {
            this.render();
        },
        render:function () {
            this.el.html(this.template());
        },
        addTransaction:function(){
            var item = new RegisterItem();
            var thisModel = this.model;
            item.save({
                    merchant: $('#transaction').val(),
                    date: new Date($('#date').val()),
                    amount: $('#amount').val(),
                    balance: 99},
                {
                    error: function(model, error){
                        // this is to make it seem to work with gh-pages
                        // in a normal circumstance this would not be needed
                        if(error.status === 405){
                           thisModel.add(model)
                           return;
                        }
                        alert(error.statusText);
                    },
                    success: function(model){
                        thisModel.add(model);
                    }
                }
            );
        }
    });
    return view;
});
