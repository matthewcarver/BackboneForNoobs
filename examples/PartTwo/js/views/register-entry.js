define(['jquery', 'underscore', 'backbone'],
       function ($, _, Backbone) {

           var view = Backbone.View.extend({
                                               initialize:function () {
                                                   this.render();
                                               },
                                               render:function () {
                                                   this.el.html('<h3>Date Entry Goes Here.</h3>')
                                               }
                                           });
           return view;
       });