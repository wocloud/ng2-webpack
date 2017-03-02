import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { MenuService } from '../../services/index';
import { GlobalState } from '../../../global.state';

/*
 * Menu Component
 */
@Component({
    selector: 'sf-menu',
    templateUrl: './menu.html'
})

export class MenuComponent implements OnInit{
    @Input() sidebarCollapsed: boolean = false;

    @Output() expandMenu = new EventEmitter<any>();

    public menuItems: any[];
    public showHoverElem: boolean;
    protected _menuItemsSub: Subscription;      //menu item subscription
    protected _onRouteChange: Subscription;     //resource object

    constructor(private _router: Router,
                private _service: MenuService,
                private _state: GlobalState) {
    }

    /**
     * event when the page was just init.
     */
    public ngOnInit(): void {
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));

        this._onRouteChange = this._router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                if (this.menuItems) {
                    //notify others and update the menu
                    this.selectMenuAndNotify();
                } else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(() => this.selectMenuAndNotify());
                }
            }
        });
    }

    /**
     * unsubscribe all subscription
     */
    public  ngOnDestroy(): void {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    }

    /**
     * update the menu .
     * @param newMenuItems
     */
    public updateMenu(newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    }

    /**
     * select menu event and notify others
     * get current menu item
     */
    public selectMenuAndNotify(): void {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    }

    /**
     * hover the menu item
     * @param $event
     */
    public hoverMenuItem($event): void {
        this.showHoverElem = true;
    }

    /**
     * toggle menu event: to expand the selected menu
     * @param $event
     * @returns {boolean}
     */
    public toggleSubMenu($event): boolean {
        let submenu = jQuery($event.currentTarget).next();

        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        } else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }

        return false;
    }
}