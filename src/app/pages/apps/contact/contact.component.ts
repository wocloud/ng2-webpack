/**
 * Created by sophia.wang on 17/2/27.
 */
import { Component } from '@angular/core';
import { TableData } from './table.data';

@Component({
    selector: 'contact',
    templateUrl: './contact.html'
})

export class ContactComponent{
    ////////////////breadcrumb/////////////////////
    public items:Array<any> = [
        {name: 'Home', href: 'dashboards'},
        {name: 'Contact', href: 'apps/contact'},
        {name: 'Breadcrumb', href: 'apps/contact', active: true}
    ];

    ////////////////table/////////////////////
    public rows:Array<any> = TableData;
    public columns:Array<any> = [
        {title: 'Name', name: 'name'},
        {title: 'Position', name: 'position'},
        {title: 'Office', className: ['office-header', 'text-success'], name: 'office'},
        {title: 'Extn.', name: 'ext'},
        {title: 'Start date', className: 'text-warning', name: 'startDate'},
        {title: 'Salary ($)', name: 'salary'}
    ];
    //config for setup all plugins (filtering, sorting, paging)
    public config:any = {
        paging: {
            flag: true,
            numPages: 1,     //total number of the pages
            totalItems: 0,   // total number of the items after filtering (of it's chosen)
            pageSize: 5,     // number of data in each page
            itemsPerPage: 4,     //number of the displaying items (rows) on a page
            maxSize: 2,         //number of the displaying pages before ...
            currentPage: 1      //the default page after the table component loading
        },
        className: ['table-striped', 'table-bordered']
    };

    public selectedRow:Array<any> = [];

    constructor() {
        this.config.paging.totalItems = this.rows.length;
    }

    public rowClicked($event): void {
        console.log('the clicked row is : ' + $event.name);
        this.selectedRow.push($event);
    }

}