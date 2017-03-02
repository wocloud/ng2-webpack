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
var global_state_1 = require("./global.state");
var menu_service_1 = require("./theme/services/menu.service");
var app_menu_1 = require("./app.menu");
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(_state, _menuService) {
        var _this = this;
        this._state = _state;
        this._menuService = _menuService;
        this._menuService.updateMenuByRoutes(app_menu_1.MENU);
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'sf-app',
        template: "\n    <div class=\"app\">\n        <div class=\"app-header navbar\">\n            <sf-header></sf-header>\n        </div>\n        <div class=\"app-aside hidden-xs\">\n            <sf-sidebar></sf-sidebar>\n        </div>\n        <div class=\"app-content\">\n            <a href class=\"off-screen-toggle hide\" ui-toggle-class=\"off-screen\" data-target=\".app-aside\" ></a>\n            <div class=\"app-content-body fade-in-up\">\n                <sf-pages></sf-pages>\n            </div>\n        </div>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState, menu_service_1.MenuService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map