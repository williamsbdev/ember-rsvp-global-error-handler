import Ember from "ember";
import FooRepo from "rsvp-error-handler/repositories/foo";

var ApplicationRoute = Ember.Route.extend({
    model: function() {
        var repo = FooRepo.create();
        return repo.findAll();
    }
});

export default ApplicationRoute;
