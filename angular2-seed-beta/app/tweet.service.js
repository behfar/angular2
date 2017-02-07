System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [{
                            imgUrl: "http://lorempixel.com/100/100/people?1",
                            name: "Captain Beefheart",
                            handle: "@beefheart",
                            body: "We'll attack at dawn. Those maggots won't know what hit them. Take extra ammo.",
                            totalLikes: 5,
                            iLike: true
                        },
                        {
                            imgUrl: "http://lorempixel.com/100/100/people?2",
                            name: "Seattle Bookworm",
                            handle: "@seattlebokworm",
                            body: "I love independent bookstores, but Amazon is killing them. Let's all write to our congressmen!",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            imgUrl: "http://lorempixel.com/100/100/people?3",
                            name: "Alpha Centauri Visitor",
                            handle: "@alphacentaurivisitor",
                            body: "The planet is mostly harmless, but intelligence varies widely. The lowest are apparently referred to as Liberals.",
                            totalLikes: 10,
                            iLike: true
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map