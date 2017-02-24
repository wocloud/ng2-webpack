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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var global_state_1 = require("../../global.state");
var theme_config_1 = require("../theme.config");
/*
 * Header Component
 */
var HeaderComponent = (function () {
    function HeaderComponent(_state, _config) {
        //this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        //    this.isMenuCollapsed = isCollapsed;
        //});
        this._state = _state;
        this._config = _config;
        this.app = {};
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this.app = this._config.app;
    }
    HeaderComponent.prototype.asideFoldedChanged = function () {
        this.app.settings.asideFolded = !this.app.settings.asideFolded;
        this._state.notifyDataChanged('app.settings.asideFolded', this.app.settings.asideFolded);
        return false;
    };
    HeaderComponent.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'my-header',
        templateUrl: './header.html'
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState, theme_config_1.ThemeConfig])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map