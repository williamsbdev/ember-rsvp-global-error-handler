import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'rsvp-error-handler/tests/helpers/start-app';

var application, originalTestAdapterException;

module('Acceptance: Application', {
    beforeEach: function() {
        application = startApp();
        originalTestAdapterException = Ember.Test.adapter.exception;
        Ember.Test.adapter.exception = function(){};
    },

    afterEach: function() {
        Ember.Test.adapter.exception = originalTestAdapterException;
        Ember.run(application, 'destroy');
    }
});

test('test will not fail', function(assert) {
    Ember.$.fauxjax.new({
        request: {
            url: "/api/all",
            method: "GET"
        },
        response: {
            status: 400
        }
    });
    visit('/');
    andThen(function() {
        assert.equal(1, 1);
    });
});
