System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.upVote = function () {
                    if (this.myVote == 1)
                        return;
                    this.myVote++;
                    this.vote.emit({ newValue: this.myVote });
                };
                VoteComponent.prototype.downVote = function () {
                    if (this.myVote == -1)
                        return;
                    this.myVote--;
                    this.vote.emit({ newValue: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n\t\t<div class=\"voteDiv\">\n\t\t\t<i\n\t\t\t\tclass=\"glyphicon glyphicon-menu-up vote-button\"\n\t\t\t\t[class.highlighted]=\"myVote == 1\"\n\t\t\t\t(click)=\"upVote()\"></i>\n\n\t\t\t<span>{{ voteCount + myVote }}</span>\n\t\t\t\n\t\t\t<i\n\t\t\t\tclass=\"glyphicon glyphicon-menu-down vote-button\"\n\t\t\t\t[class.highlighted]=\"myVote == -1\"\n\t\t\t\t(click)=\"downVote()\"></i>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.voteDiv {\n\t\t\twidth: 20px;\n\t\t\ttext-align: center;\n\t\t\tcolor: #999;\n\t\t}\n\t\t.vote-button {\n\t\t\tcolor: #ccc;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.highlighted {\n\t\t\tcolor: orange;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map