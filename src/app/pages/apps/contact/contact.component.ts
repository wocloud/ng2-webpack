/**
 * Created by sophia.wang on 17/2/27.
 */
import { Component, OnInit } from '@angular/core';
import { TableData } from './table.data';

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

    ////////////////table/////////////////////
    public rows:Array<any> = [];
    private data:Array<any> = TableData;
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
            flag: false,
            filterString: '',
            filterColumn: ''
        },
        className: ['table-striped', 'table-bordered']
    };
    public selectedRow:Array<any> = [];

    constructor() {
        this.config.paging.totalItems = this.data.length;
    }

    ngOnInit():void {
        this.onFilterTable(this.config);
    }

    public rowClicked($event): void {
        this.selectedRow.push($event);
    }

    public onFilterTable(config:any): void {
        console.log('filter the table by : ' + config.filtering.filterString);
        if(config.filtering.flag) {
            Object.assign(this.config.filtering, config.filtering);
        }

        this.rows = this.changeFilter(this.data, this.config.filtering);
        this.config.paging.totalItems = this.rows.length;
        let numberPages = Math.ceil(this.rows.length/this.config.paging.itemsPerPage);
        this.config.paging.numPages = numberPages > 1 ? numberPages : 1;
    }

    public changeFilter(data:any, filtering:any):Array<any> {
        let filteredData:Array<any> = data;

        if(!filtering.flag) {
            return filteredData;
        }

        if(filtering.filterColumn) {
            return filteredData.filter((item:any) =>
                item[filtering.filterColumn].match(this.config.filtering.filterString));
        }

        let temp:Array<any> = [];
        filteredData.forEach((item:any) => {
            let flag = false;
            this.columns.forEach((column:any) => {
                if(item[column.name].toString().match(this.config.filtering.filterString))
                    flag = true;
            });
            if(flag) {
                temp.push(item);
            }
        });
        filteredData = temp;
        return filteredData;
    }

}