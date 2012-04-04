define(['jquery', 'underscore', 'backbone'],
       function ($, _, Backbone) {

           var view = Backbone.View.extend({
                                               el:$("#content"),

                                               initialize:function () {
                                                   this.render();
                                               },
                                               render:function () {
                                                   this.el.html('<h1>Bill Stuff.</h1>')
                                               }
                                           });
           return view;
       });