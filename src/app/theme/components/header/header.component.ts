import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

import { ThemeConfig } from '../../theme.config';

/*
 * Header Component
 */
@Component({
    selector: 'sf-header',
    templateUrl: './header.html'
})

export class HeaderComponent {

    private app:any = {};
    public isMenuCollapsed:boolean = false;

    constructor(private _state:GlobalState, private _config:ThemeConfig) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });

        this.app = this._config.app;
        this.isMenuCollapsed = this.app.settings.asideFixed;
    }
}