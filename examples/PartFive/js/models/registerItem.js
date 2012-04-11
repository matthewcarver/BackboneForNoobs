define(['backbone'],
function(Backbone){

var model =  Backbone.Model.extend({
    defaults: {
        merchant:"linens 'n BEYoooonnnnnnnd",
        date:new Date(2000,5,23),
        amount: -1000000,
        balance: 9999999
    },
    url: '/BackboneForNoobs/item',
    validate:function(attrs){
        var valid = true;
        var messages = '';
        if(isNaN(attrs.amount)){
            valid = false;
            messages += "Amount must be a number. ";
        }
        var testDate = new Date(attrs.date);
        if(testDate.toString() === 'Invalid Date'){
            valid = false;
            messages += "Date must be a valid date. ";
        }

        if(!valid){
            return messages;
        }
    }
});

    return model;
});
