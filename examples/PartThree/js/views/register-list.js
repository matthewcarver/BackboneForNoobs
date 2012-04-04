define(['jquery', 'underscore', 'backbone', 'text!templates/register-list.html'],
function ($, _, Backbone,RegisterList) {
    var view = Backbone.View.extend({
        template: _.template(RegisterList),
        initialize:function () {
            this.model.bind('reset',this.render,this);
        },
        render:function () {
            var model = this.model.map(function(i){
                return {
                    merchant: i.get('merchant'),
                    date: new Date(Date.parse(i.get('date'))),
                    amount: i.get('amount'),
                    balance: i.get('balance')
                }});

            this.el.html(this.template({RegisterItems:model.reverse()}));
        }
    });
    return view;
});