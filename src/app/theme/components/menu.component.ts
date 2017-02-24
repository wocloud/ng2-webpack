import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
//import { MenuService } from '../services/index';
import { ThemeConfig } from '../theme.config';
import { GlobalState } from '../../global.state';
import { PAGES_MENU } from '../../pages/pages.menu';

/*
 * Menu Component
 */
@Component({
    selector: 'my-menu',
    templateUrl: './menu.html'
})

export class MenuComponent implements OnInit{
    private app:any = {};
    private menus = PAGES_MENU;

    @Input() sidebarCollapsed: boolean = false;
    @Output() expandMenu = new EventEmitter<any>();
    public menuItems: any[];

    constructor(private _router: Router,
                //private _service: MenuService,
                private _config: ThemeConfig,
                private _state: GlobalState) {
        this.app = this._config.app;
    }

    OnInit() {}

    public toggleSubMenu($event): void {
        console.log('toggleSubMenu');
        debugger;
        let submenu = jQuery($event.currentTarget.nextElementSibling);

        this.sidebarCollapsed = !this.sidebarCollapsed;

        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        } else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
    }
}