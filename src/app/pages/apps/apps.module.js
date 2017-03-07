"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sophia.wang on 17/2/27.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var theme_module_1 = require("../../theme/theme.module");
var contact_component_1 = require("./contact/contact.component");
var weather_component_1 = require("./weather/weather.component");
var apps_component_1 = require("./apps.component");
var apps_routing_1 = require("./apps.routing");
var AppsModule = (function () {
    function AppsModule() {
    }
    return AppsModule;
}());
AppsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            theme_module_1.ThemeModule,
            apps_routing_1.routing
        ],
        declarations: [
            contact_component_1.ContactComponent,
            weather_component_1.WeatherComponent,
            apps_component_1.AppsComponent
        ]
    })
], AppsModule);
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map