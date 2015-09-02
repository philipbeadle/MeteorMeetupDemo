/**
 * Created by PhilBeadle on 4/08/15.
 */
module.exports = function () {
    this.Before(function (done) {
        var client = this.client;
        this.Home = {
            clickButton: function (text) {
                return client.waitForExist('button').click('button');
            },
            getMessage: function () {
                return client.waitForExist('p').getText('p');
            }
        };
        done();
    });
};
