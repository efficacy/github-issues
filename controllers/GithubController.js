define([
    "js/util", 
    "framework/Controller"
], function (
    util, 
    Controller
) { "use strict";

    function GithubController(environment, connector) {
        Controller.call(this, environment);

        this.connector = connector;
    }

    GithubController.prototype = Object.create(Controller.prototype);

    util.extend(GithubController.prototype, {
        index: function (request, render) {
            var settings = this.environment.siteApplication.getSettings();

            this.connector.fetchIssues(settings.name, settings.repo).done(function(data) {
                render("index", {
                    name: settings.name,
                    repo: settings.repo,
                    issues: data.data
                });
            });
        }
    });

    return GithubController;
});