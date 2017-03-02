import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Menu Item Component
 */
@Component({
    selector: 'sf-menu-item',
    templateUrl: './menuItem.html'
})

export class MenuItemComponent {
    @Input() menuItem:any;
    @Input() child:boolean = false;

    @Output() menuItemHover = new EventEmitter<any>();
    @Output() toggleSubMenu = new EventEmitter<any>();

    public onHoverMenuItem($event):void {
        this.menuItemHover.emit($event);
    }

    public onToggleSubMenu($event, item):boolean {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    }
}