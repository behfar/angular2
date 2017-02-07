System.register(['angular2/core', './favorite.component', './like.component', './vote.component', './tweets.component', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, like_component_1, vote_component_1, tweets_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.vote = {
                        voteCount: 9,
                        myVote: -1
                    };
                    this.post = {
                        isFavorite: false
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<div *ngIf=\"false\">\n\t\t\t<favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n\t\t\t<like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n\t\t\t<vote [myVote]=\"vote.myVote\" [voteCount]=\"vote.voteCount\" (vote)=\"onVoteChange($event)\"></vote>\n\t\t\t<tweets></tweets>\n\t\t</div>\n\t\t<zippy title=\"This is the title\">\n\t\t\tHere is the content.\n\t\t</zippy>\n\t\t<zippy title=\"Another zippy, another title...\">\n\t\t\tShumbabla should never have run for president of Gambonia because he is a hutu!\n\t\t</zippy>\n\t\t",
                        directives: [favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, tweets_component_1.TweetsComponent, zippy_component_1.ZippyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map