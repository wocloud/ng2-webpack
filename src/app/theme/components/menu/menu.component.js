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
var index_1 = require("../../services/index");
var global_state_1 = require("../../../global.state");
/*
 * Menu Component
 */
var MenuComponent = (function () {
    function MenuComponent(_router, _service, _state) {
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new core_1.EventEmitter();
    }
    /**
     * event when the page was just init.
     */
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.menuItems) {
                    //notify others and update the menu
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
    };
    /**
     * unsubscribe all subscription
     */
    MenuComponent.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    };
    /**
     * update the menu .
     * @param newMenuItems
     */
    MenuComponent.prototype.updateMenu = function (newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    };
    /**
     * select menu event and notify others
     * get current menu item
     */
    MenuComponent.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    /**
     * hover the menu item
     * @param $event
     */
    MenuComponent.prototype.hoverMenuItem = function ($event) {
        this.showHoverElem = true;
    };
    /**
     * toggle menu event: to expand the selected menu
     * @param $event
     * @returns {boolean}
     */
    MenuComponent.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
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
        return false;
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
        selector: 'sf-menu',
        templateUrl: './menu.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.MenuService,
        global_state_1.GlobalState])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map