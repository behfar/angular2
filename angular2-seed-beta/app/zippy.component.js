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
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isOpen = false;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    console.log("toggled", this.isOpen);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n    \t\t\t<h3 class=\"panel-title\"> {{ title }}\n    \t\t\t\t<i class=\"glyphicon zippy-toggle\"\n    \t\t\t\t\t[ngClass]=\"{\n    \t\t\t\t\t\t'glyphicon-chevron-up': isOpen,\n    \t\t\t\t\t\t'glyphicon-chevron-down': !isOpen}\"\n    \t\t\t\t\t(click)=\"toggle()\"></i>\n    \t\t\t</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\" [hidden]=\"!isOpen\">\n    \t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.zippy-toggle {\n\t\t\tfloat: right\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map