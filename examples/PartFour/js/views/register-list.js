define(['jquery', 'underscore', 'backbone', 'text!templates/register-list.html'],
function ($, _, Backbone,RegisterList) {
    var view = Backbone.View.extend({
        template: _.template(RegisterList),
        initialize:function () {
            this.model.bind('reset',this.render,this);
            this.model.bind('add',this.render,this);
        },
        render:function () {
            var unsortedModel = this.model.map(function(i){
                return {
                    merchant: i.get('merchant'),
                    date: new Date(new Date(i.get('date')).getTime() + 86400000),
                    amount: i.get('amount'),
                    balance: i.get('balance')
                }});

            var sortedModel = _.sortBy(unsortedModel, function(x){return x.date.getTime();}).reverse();
            this.el.html(this.template({RegisterItems:sortedModel}));
        }
    });
    return view;
});