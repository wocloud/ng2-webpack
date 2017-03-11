/**
 * Created by sophia.wang on 17/2/27.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.html'
})

export class ContactComponent implements OnInit{
    ////////////////breadcrumb/////////////////////
    public items:Array<any> = [
        {name: 'Home', href: 'dashboards'},
        {name: 'Contact', href: 'apps/contact'},
        {name: 'Breadcrumb', href: 'apps/contact', active: true}
    ];
}