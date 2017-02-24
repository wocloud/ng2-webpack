import { Component } from '@angular/core';

import { GlobalState } from '../../global.state';

import { ThemeConfig } from '../theme.config';

/*
 * Header Component
 */
@Component({
    selector: 'my-header',
    templateUrl: './header.html'
})

export class HeaderComponent {

    private app:any = {};
    public isScrolled:boolean = false;
    public isMenuCollapsed:boolean = false;

    constructor(private _state:GlobalState, private _config:ThemeConfig) {
        //this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        //    this.isMenuCollapsed = isCollapsed;
        //});

        this.app = this._config.app;
    }

    public asideFoldedChanged() {
        this.app.settings.asideFolded = !this.app.settings.asideFolded;
        this._state.notifyDataChanged('app.settings.asideFolded', this.app.settings.asideFolded);
        return false;
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }
}