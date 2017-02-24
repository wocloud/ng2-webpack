"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var theme_config_1 = require("./theme.config");
var theme_config_provider_1 = require("./theme.config.provider");
var index_1 = require("./components/index");
var THEME_COMPONENTS = [
    index_1.HeaderComponent,
    index_1.MenuComponent
];
var ThemeModule = ThemeModule_1 = (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: [
                theme_config_1.ThemeConfig,
                theme_config_provider_1.ThemeConfigProvider
            ]
        };
    };
    return ThemeModule;
}());
ThemeModule = ThemeModule_1 = __decorate([
    core_1.NgModule({
        declarations: THEME_COMPONENTS.slice(),
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
        ],
        exports: THEME_COMPONENTS.slice()
    })
], ThemeModule);
exports.ThemeModule = ThemeModule;
var ThemeModule_1;
//# sourceMappingURL=theme.module.js.map