"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var realtime_component_1 = require("./realtime.component");
var close_price_module_1 = require("./close_price/close_price.module");
var stackchart_module_1 = require("./stackchart/stackchart.module");
var piechart_module_1 = require("./piechart/piechart.module");
var trend_module_1 = require("./trend/trend.module");
var RealtimeModule = (function () {
    function RealtimeModule() {
    }
    return RealtimeModule;
}());
RealtimeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, close_price_module_1.ClosePriceModule, stackchart_module_1.StackChartModule,
            piechart_module_1.PiechartModule, trend_module_1.TrendModule
        ],
        declarations: [realtime_component_1.RealtimeComponent],
        exports: [realtime_component_1.RealtimeComponent],
    })
], RealtimeModule);
exports.RealtimeModule = RealtimeModule;
//# sourceMappingURL=realtime.module.js.map