import { Injectable } from '@angular/core';
import { colorHelper } from './theme.constant';
import * as _ from 'lodash';

@Injectable()
export class ThemeConfigProvider {

    // main component color scheme
    settings = {
        navbarHeaderColor: 'bg bg-black',
        headerColor: 'bg-lt bg-white-only',
        asideColor: 'bg bg-black',
        headerFixed: false,
        asideFixed: false,
        asideFolded: true,
        asideDock: false,
        container: false
    };

    config = {
        name: 'Angular',
        version: '2.4.0',
        settings: {
            navbarHeaderColor: this.settings.navbarHeaderColor,
            headerColor: this.settings.headerColor,
            asideColor: this.settings.asideColor,
            headerFixed: this.settings.headerFixed,
            asideFixed: this.settings.asideFixed,
            asideDock: this.settings.asideDock,
            container: this.settings.container
        }
    };

    get() {
        return this.config;
    }
}