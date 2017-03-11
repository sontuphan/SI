"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var close_price_component_1 = require("./close_price.component");
var angular2_highcharts_1 = require("angular2-highcharts");
var router_1 = require("@angular/router");
var close_price_service_1 = require("./../../../services/close_price/close_price.service");
var socket_service_1 = require("./../../../services/socket/socket.service");
var ClosePriceModule = (function () {
    function ClosePriceModule() {
    }
    return ClosePriceModule;
}());
ClosePriceModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, angular2_highcharts_1.ChartModule],
        declarations: [close_price_component_1.ClosePriceComponent],
        providers: [close_price_service_1.ClosePriceService, socket_service_1.SingletonSocket],
        exports: [close_price_component_1.ClosePriceComponent],
    })
], ClosePriceModule);
exports.ClosePriceModule = ClosePriceModule;
//# sourceMappingURL=close_price.module.js.map