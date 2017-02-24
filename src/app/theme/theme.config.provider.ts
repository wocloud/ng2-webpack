import { Injectable } from '@angular/core';
import { colorHelper } from './theme.constant';
import * as _ from 'lodash';

@Injectable()
export class ThemeConfigProvider {

    // basic color
    basic = {
        default: '#ffffff',
        defaultText: '#ffffff',
        border: '#dddddd',
        borderDark: '#aaaaaa',
    };

    // main functional color scheme
    colorScheme = {
        primary: '#7266ba',
        info:    '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger:  '#f05050'
    };

    // main component color scheme
    settings = {
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: false,
        asideFixed: false,
        asideFolded: false,
        asideDock: false,
        container: false
    };

    config = {
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

    get() {
        return this.config;
    }
}