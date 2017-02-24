"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ThemeConfigProvider = (function () {
    function ThemeConfigProvider() {
        // basic color
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#7266ba',
            info: '#23b7e5',
            success: '#27c24c',
            warning: '#fad733',
            danger: '#f05050'
        };
        // main component color scheme
        this.settings = {
            navbarHeaderColor: 'bg-black',
            navbarCollapseColor: 'bg-white-only',
            asideColor: 'bg-black',
            headerFixed: false,
            asideFixed: false,
            asideFolded: false,
            asideDock: false,
            container: false
        };
        this.config = {
            name: 'Angular',
            version: '2.4.0',
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger
            },
            settings: {
                navbarHeaderColor: this.settings.navbarHeaderColor,
                navbarCollapseColor: this.settings.navbarCollapseColor,
                asideColor: this.settings.asideColor,
                headerFixed: this.settings.headerFixed,
                asideFixed: this.settings.asideFixed,
                asideFolded: this.settings.asideFolded,
                asideDock: this.settings.asideDock,
                container: this.settings.container
            }
        };
    }
    ThemeConfigProvider.prototype.get = function () {
        return this.config;
    };
    return ThemeConfigProvider;
}());
ThemeConfigProvider = __decorate([
    core_1.Injectable()
], ThemeConfigProvider);
exports.ThemeConfigProvider = ThemeConfigProvider;
//# sourceMappingURL=theme.config.provider.js.map