define([
    "js/util",
    "framework/Connector"
],function (
    util,
    Connector
) { "use strict";

    function GithubConnector(net) {
         Connector.call(this);
         
         this.net = net;
    }
    
    GithubConnector.prototype = Object.create(Connector.prototype);
    
    util.extend(GithubConnector.prototype, {
        fetchIssues: function (name, repo, callback) {
            var url = "https://api.github.com/repos/" + name + "/" + repo + "/issues";
            
            return this.net.get(url, {
                useCORS: true,
                dataType: "jsonp"
            });
        }
    });
    
    return GithubConnector;
});