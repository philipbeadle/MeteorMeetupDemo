/**
 * Created by PhilBeadle on 2/09/15.
 */
(function () {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');

    module.exports = function () {

        this.When(/^I (click|press) the "([^"]*)" button$/, function (arg1) {
            return this.client.waitForExist('button').click('button=' + arg1)
        });

        this.Then(/^the message will say "([^"]*)"$/, function (arg1, callback) {
            return this.Home.getMessage().should.become(arg1).and.notify(callback);
        });

    }

})();
