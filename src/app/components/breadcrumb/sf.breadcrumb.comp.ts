/**
 * Created by sophia.wang on 17/3/8.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'sf-breadcrumb',
    template:`
    <ol class="breadcrumb">
      <li *ngFor="let item of items" [ngClass]="{'active': item.active}"><a href="#/{{item.href}}">{{item.name}}</a></li>
    </ol>
    `
})

export class SFBreadcrumbComponent {
    @Input() public items:Array<any> = [];

    constructor(){}
}