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
                        console.log(error);
                        alert(error);
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
