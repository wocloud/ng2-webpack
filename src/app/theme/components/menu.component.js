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
var router_1 = require("@angular/router");
//import { MenuService } from '../services/index';
var theme_config_1 = require("../theme.config");
var global_state_1 = require("../../global.state");
var pages_menu_1 = require("../../pages/pages.menu");
/*
 * Menu Component
 */
var MenuComponent = (function () {
    function MenuComponent(_router, 
        //private _service: MenuService,
        _config, _state) {
        this._router = _router;
        this._config = _config;
        this._state = _state;
        this.app = {};
        this.menus = pages_menu_1.PAGES_MENU;
        this.sidebarCollapsed = false;
        this.expandMenu = new core_1.EventEmitter();
        this.app = this._config.app;
    }
    MenuComponent.prototype.OnInit = function () { };
    MenuComponent.prototype.toggleSubMenu = function ($event) {
        console.log('toggleSubMenu');
        debugger;
        var submenu = jQuery($event.currentTarget.nextElementSibling);
        this.sidebarCollapsed = !this.sidebarCollapsed;
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
    };
    return MenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MenuComponent.prototype, "sidebarCollapsed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "expandMenu", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'my-menu',
        templateUrl: './menu.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        theme_config_1.ThemeConfig,
        global_state_1.GlobalState])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map