define(['jquery', 'underscore', 'backbone', 'text!templates/register.html', 'views/register-chart', 'views/register-entry', 'views/register-list'],
    function ($, _, Backbone, RegisterTemplate, ChartView, EntryView, ListView) {

    var view = Backbone.View.extend({
        el:$("#content"),
        template: _.template(RegisterTemplate),
        subViews: [],
        initialize:function () {
            this.render();
        },
        render:function () {
            this.el.html(this.template());
            this.subViews.push(new ChartView({el:$('#chart')}));
            this.subViews.push(new EntryView({el:$('#entry')}));
            this.subViews.push(new ListView({el:$('#list')}));
        }
    });
    return view;
});
