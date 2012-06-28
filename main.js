define([
	"framework/Application", 
	"./controllers/GithubController",
	"./connectors/GithubConnector"
], function (
	Application, 
	GithubController, 
	GithubConnector
) { "use strict";

    var application = new Application(function (environment) {
        var connector = new GithubConnector(environment.net);
        var controller = new GithubController(environment, connector);
        
        controller.defaultRoute(controller.index);
    });

    return application;
});
