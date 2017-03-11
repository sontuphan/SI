"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var trend_component_1 = require("./trend.component");
var router_1 = require("@angular/router");
var trend_service_1 = require("./../../../services/trend/trend.service");
var socket_service_1 = require("./../../../services/socket/socket.service");
var TrendModule = (function () {
    function TrendModule() {
    }
    return TrendModule;
}());
TrendModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule],
        declarations: [trend_component_1.TrendComponent],
        providers: [trend_service_1.TrendService, socket_service_1.SingletonSocket],
        exports: [trend_component_1.TrendComponent],
    })
], TrendModule);
exports.TrendModule = TrendModule;
//# sourceMappingURL=trend.module.js.map