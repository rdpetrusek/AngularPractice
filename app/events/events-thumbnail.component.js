"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EventsThumbnail = (function () {
    function EventsThumbnail() {
        this.somethingLoggedEvent = new core_1.EventEmitter();
    }
    EventsThumbnail.prototype.loggingClickHandler = function () {
        console.log("We've logged something from \"" + this.event.name + "\"");
    };
    return EventsThumbnail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventsThumbnail.prototype, "event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventsThumbnail.prototype, "somethingLoggedEvent", void 0);
EventsThumbnail = __decorate([
    core_1.Component({
        selector: 'events-thumbnail',
        templateUrl: 'app/events/events-thumbnail.component.html'
    }),
    __metadata("design:paramtypes", [])
], EventsThumbnail);
exports.EventsThumbnail = EventsThumbnail;
//# sourceMappingURL=events-thumbnail.component.js.map