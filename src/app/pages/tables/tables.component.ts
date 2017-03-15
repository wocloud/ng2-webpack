/**
 * Created by sophia.wang on 17/3/11.
 */
import { Component, OnInit } from '@angular/core';
import { TableData } from './table.data';

@Component({
    selector: 'tables',
    templateUrl: './basic.table.html'
})

export class TablesComponent implements OnInit{

    public rows:Array<any> = TableData;

    public selectedRows:Array<any> = [];     //all selected rows

    private filterRows:Array<any> = [];

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
            itemsPerPage: 3,     //number of the displaying items (rows) on a page
            currentPage: 1      //the default page after the table component loading
        },
        filtering: {
            flag: true,
            filterString: '',
            filterColumn: ''
        },
        checkbox: true,
        className: ['table-striped', 'table-bordered']
    };

    constructor() {}

    OnInit(){}

    public onRowClicked($event): void {
        console.log($event);
    }

    public onSelectedRows($event): void {
        this.selectedRows = $event;
    }

    public onChangeTable($event):any {
        this.filterRows = $event;
        console.log('Table Changed....');
    }
}