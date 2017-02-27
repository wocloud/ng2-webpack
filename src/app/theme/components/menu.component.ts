import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { MenuService } from '../services/index';
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
    protected _onRouteChange: Subscription;
    public menuItems: any[];

    @Input() sidebarCollapsed: boolean = false;

    @Output() expandMenu = new EventEmitter<any>();
    @Output() itemHover = new EventEmitter<any>();

    constructor(private _router: Router,
                private _service: MenuService,
                private _config: ThemeConfig,
                private _state: GlobalState) {
        this.app = this._config.app;
    }

    public ngOnInit(): void {
        this._onRouteChange = this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (this.menuItems) {
                    this.selectMenuAndNotify();
                }
            }
        });

        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    }

    public updateMenu(newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    }

    public selectMenuAndNotify(): void {
        if (this.menuItems) {
            console.log(this.menuItems);
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            console.log(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    }

    public itemHover($event): void {
        console.log('itemHover');
        this.showHoverElem = true;
    }

    public toggleSubMenu($event): void {
        console.log('toggleSubMenu');
        let submenu = jQuery($event.currentTarget.nextElementSibling);

        //this.sidebarCollapsed = !this.sidebarCollapsed;

        //if (this.sidebarCollapsed) {
        //    this.expandMenu.emit(null);
        //    if (!$event.item.expanded) {
        //        $event.item.expanded = true;
        //    }
        //} else {
        //    $event.item.expanded = !$event.item.expanded;
        //    submenu.slideToggle();
        //}
    }

    /**
     * click the menu item
     * @param $event
     */
    public clickItem($event): void {
        this.itemHover.emit($event);
    }
}