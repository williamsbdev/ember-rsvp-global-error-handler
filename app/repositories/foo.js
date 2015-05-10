import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

var FooRepo = Ember.Object.extend({
    findAll: function() {
        var all = Ember.A([]);
        PromiseMixin.xhr("/api/all", "GET").then(function(json){
            json.forEach(function(item){
                all.pushObject(item);
            });
        });
        return all;
    }
});

export default FooRepo;
