"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var stackchart_component_1 = require("./stackchart.component");
var angular2_highcharts_1 = require("angular2-highcharts");
var router_1 = require("@angular/router");
var tracking_service_1 = require("./../../../services/tracking/tracking.service");
var StackChartModule = (function () {
    function StackChartModule() {
    }
    return StackChartModule;
}());
StackChartModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, angular2_highcharts_1.ChartModule],
        declarations: [stackchart_component_1.StackChartComponent],
        providers: [tracking_service_1.TrackingService],
        exports: [stackchart_component_1.StackChartComponent],
    })
], StackChartModule);
exports.StackChartModule = StackChartModule;
//# sourceMappingURL=stackchart.module.js.map