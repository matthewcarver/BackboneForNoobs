define(['jquery', 'underscore', 'backbone', 'text!templates/register.html', 'views/register-chart', 'views/register-entry', 'views/register-list'],
    function ($, _, Backbone, RegisterTemplate, ChartView, EntryView, ListView) {

    var view = Backbone.View.extend({
        template: _.template(RegisterTemplate),
        subViews: [],
        initialize:function () {
            this.render();
            this.model.fetch();
        },
        render:function () {
            this.el.html(this.template());
            this.subViews.push(new ChartView({el:$('#chart'),model:this.model}));
            this.subViews.push(new EntryView({el:$('#entry'),model:this.model}));
            this.subViews.push(new ListView({el:$('#list'),model:this.model}));
        }
    });
    return view;
});
