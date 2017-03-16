import { Component } from '@angular/core';
import { GlobalState } from './global.state';
import { ThemeConfig } from './theme/theme.config';
import { MenuService } from './theme/services/menu.service';
import { MENU } from './app.menu';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'sf-app',
    template: `
    <div class="app" [ngClass]="{'app-aside-folded': isAsideCollapsed, 'app-aside-expanded': !isAsideCollapsed, 'app-aside-fixed': isAsideFixed}">
        <sf-sidebar></sf-sidebar>
        <div class="app-content app-header-fixed">
            <sf-header></sf-header>
            <a href class="off-screen-toggle hide" ui-toggle-class="off-screen" data-target=".app-aside" ></a>
            <div class="app-content-body app-full-height fade-in-up">
                <router-outlet></router-outlet>
            </div>
            <sf-footer></sf-footer>
        </div>
    </div>
  `
})

export class AppComponent {

    private isAsideFixed: boolean = false;   //default is float
    private isAsideCollapsed: boolean = true;   //default is collapsed

    constructor(private _state: GlobalState, private _config: ThemeConfig, private _menuService: MenuService) {
        this._menuService.updateMenuByRoutes(<Routes>MENU);

        let app = this._config.app;
        this.isAsideCollapsed = app.settings.asideCollapsed;
        this.isAsideFixed = app.settings.asideFixed;

        this._state.subscribe('aside.collapsed', (isCollapsed) => {
            this.isAsideCollapsed = isCollapsed;
        });

        this._state.subscribe('aside.fixed', (isFixed) => {
            this.isAsideFixed = isFixed;
        });
    }
}
