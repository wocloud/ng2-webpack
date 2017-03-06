import { Component, OnInit } from '@angular/core';
import { GlobalState } from './global.state';
import { MenuService } from './theme/services/menu.service';
import { MENU } from './app.menu';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'sf-app',
    template: `
    <div class="app">
        <sf-header class="app-header navbar"></sf-header>
        <div class="app-aside">
            <sf-sidebar></sf-sidebar>
        </div>
        <div class="app-content">
            <a href class="off-screen-toggle hide" ui-toggle-class="off-screen" data-target=".app-aside" ></a>
            <div class="app-content-body fade-in-up">
                <sf-pages></sf-pages>
            </div>
        </div>
    </div>
  `,
})

export class AppComponent implements OnInit{

    constructor(private _state: GlobalState, private _menuService: MenuService) {
        this._menuService.updateMenuByRoutes(<Routes>MENU);
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    ngOnInit() { }
}
