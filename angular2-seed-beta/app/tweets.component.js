System.register(['angular2/core', './tweet.service', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1, like_component_1;
    var TweetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(tweetService) {
                    this.tweets = [];
                    this.tweets = tweetService.getTweets();
                }
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        template: "\n\t\t<div *ngFor=\"#tweet of tweets\">\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<a href=\"#\"><img class=\"media-object\" src={{tweet.imgUrl}} alt={{tweet.name}}></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\"> {{ tweet.name }} <span class=\"tweet-handle\">{{ tweet.handle }}</span>\n\t\t\t\t\t</h4>\n\t\t\t\t\t{{ tweet.body }}\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.tweet-handle {\n\t\t\tcolor: #ccc;\n\t\t}\n\t"],
                        directives: [like_component_1.LikeComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map