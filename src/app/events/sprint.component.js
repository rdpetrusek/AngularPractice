"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Sprint = (function () {
    function Sprint() {
        this.allEvents = [{
                id: 1,
                name: 'Some Name',
                date: '1/2/2016',
                price: 350,
                points: 13
            }, {
                id: 2,
                name: 'Some other Name',
                date: '1/2/2016',
                price: 3500,
                points: 5
            }];
    }
    return Sprint;
}());
Sprint = __decorate([
    core_1.Component({
        selector: 'sprint',
        templateUrl: 'app/events/sprint.component.html'
    })
], Sprint);
exports.Sprint = Sprint;
//# sourceMappingURL=sprint.component.js.map