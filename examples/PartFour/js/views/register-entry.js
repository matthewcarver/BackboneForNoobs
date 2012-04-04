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
            var item = new RegisterItem({
                merchant: $('#transaction').val(),
                date: new Date($('#date').val()),
                amount: $('#amount').val(),
                balance: 99
            });

            item.save();
            this.model.add(item);
        }
    });
    return view;
});