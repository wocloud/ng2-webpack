/**
 * Created by sophia.wang on 17/3/1.
 */
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ThemeConfig } from '../../theme.config';
import { GlobalState } from '../../../global.state';

@Component({
    selector: 'sf-sidebar',
    templateUrl: './aside.html'
})
export class AsideComponent {

    private app:any = {};
    private isMenuCollapsed: boolean = false; //default is open.

    constructor(private _config: ThemeConfig,
                private _state:GlobalState) {

        this.app = this._config.app;

        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public menuExpand():void {
        this.menuCollapseStateChange(true);
    }

    public menuCollapse():void {
        this.menuCollapseStateChange(false);
    }

    public menuCollapseStateChange(isCollapsed:boolean):void {
        //console.log('menuCollapseStateChange(still not add styles, just function): ' + isCollapsed);
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }
}