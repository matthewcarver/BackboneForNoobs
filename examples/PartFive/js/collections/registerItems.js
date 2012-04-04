define(['backbone', 'models/registerItem', 'underscore'],function(Backbone, RegisterItem, _){
    var collection = Backbone.Collection.extend({
                                                    model: RegisterItem,
                                                    url: '/registeritems',
                                                    balancedAndSorted:function(){
                                                        var unsortedModel = this.mappedItems();

                                                        var sortedModel = _.sortBy(unsortedModel, function(x){return x.date.getTime();});
                                                        var previousBalance = 0;
                                                        _.each(sortedModel, function(value){
                                                            value.balance = previousBalance +value.amount;
                                                            previousBalance = value.balance;
                                                        });

                                                        return sortedModel.reverse();
                                                    },
                                                    mappedItems:function(){
                                                        return this.map(function(i){
                                                            return {
                                                                merchant: i.get('merchant'),
                                                                date: new Date(new Date(i.get('date')).getTime() + 86400000),
                                                                amount: parseFloat(i.get('amount')),
                                                                balance: parseFloat(i.get('balance'))
                                                            }});
                                                    }
                                                });

    return collection;
});