define(['jquery', 'underscore', 'backbone', 'text!templates/register-list.html'],
function ($, _, Backbone,RegisterList) {
    var view = Backbone.View.extend({
        template: _.template(RegisterList),
        initialize:function () {
            this.model.bind('reset',this.render,this);
            this.model.bind('add',this.calculateAndRender,this);
        },
        render:function () {
            this.el.html(this.template({RegisterItems:this.model.mappedItems().reverse()}));
        },
        calculateAndRender:function(){
            this.el.html(this.template({RegisterItems:this.model.balancedAndSorted()}));
        }
    });
    return view;
});