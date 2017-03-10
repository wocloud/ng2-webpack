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
    private isAsideFixed: boolean = false;   //default is float
    private isAsideCollapsed: boolean = true;   //default is collapsed

    constructor(private _config: ThemeConfig,
                private _state:GlobalState) {

        this.app = this._config.app;

        this._state.subscribe('aside.collapsed', (isCollapsed) => {
            this.isAsideCollapsed = isCollapsed;
        });

        this._state.subscribe('aside.fixed', (isFixed) => {
            this.isAsideFixed = isFixed;
        });
    }

    ///////////////////////////////////////////////
    ////////////       Aside      /////////////////
    ///////////////////////////////////////////////
    public asideExpand():void {
        this.asideCollapseChange(false);
    }

    public asideCollapse():void {
        this.asideCollapseChange(true);
    }

    public asideCollapseChange(isCollapsed:boolean):void {
        this.isAsideCollapsed = isCollapsed;
        console.log(this.isAsideCollapsed);
        this._state.notifyDataChanged('aside.collapsed', this.isAsideCollapsed);
    }

    public asideFixedChanged():void {
        this.isAsideFixed = !this.isAsideFixed;
        console.log(this.isAsideFixed);
        this._state.notifyDataChanged('aside.fixed', this.isAsideFixed);
    }

    ///////////////////////////////////////////////
    ////////////       Menu       /////////////////
    ///////////////////////////////////////////////
    //public menuExpand():void {
    //    this.menuCollapseStateChange(true);
    //}
    //
    //public menuCollapse():void {
    //    this.menuCollapseStateChange(false);
    //}
    //
    //public menuCollapseStateChange(isCollapsed:boolean):void {
    //    //console.log('menuCollapseStateChange(still not add styles, just function): ' + isCollapsed);
    //    this.isMenuCollapsed = isCollapsed;
    //    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    //}
}