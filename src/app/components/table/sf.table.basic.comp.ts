/**
 * Created by sophia.wang on 17/3/7.
 */
import { Component, OnInit, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
    selector: 'sf-table',
    template: `
    <div class="btn-toolbar m-xs m-l-none">
        <input type="text" placeholder="all columns..."
               *ngIf="config.filtering.flag"/>
    </div>
    <table class="table dataTable" ngClass="{{config.className || ''}}" role="grid" style="width: 100%;">
        <thead>
            <tr role="row">
                <th *ngFor="let column of columns">{{column.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of rowData" (click)="onRowClicked(row)">
                <td *ngFor="let column of columns">{{getData(row, column.name)}}</td>
            </tr>
        </tbody>
    </table>
    <pagination
        *ngIf="config.paging.flag"
        class="pagination-sm"
        [(ngModel)]="config.paging.currentPage"
        [totalItems]="config.paging.totalItems"
        [itemsPerPage]="config.paging.itemsPerPage"
        [maxSize]="config.paging.pageSize"
        [boundaryLinks]="true"
        [rotate]="false"
        (numPages)="config.paging.numPages = $event"
        (pageChanged)="pageChanged($event)"></pagination>
    `
})

export class SFTableComponent implements OnInit{
    @Input() public rows:Array<any> = [];
    private rowData:Array<any> = [];
    @Input()
    public set config(conf:any) {
        if (!conf.className) {
            conf.className = 'table-striped table-bordered';
        }
        if (conf.className instanceof Array) {
            conf.className = conf.className.join(' ');
        }
        this._config = conf;
    }
    @Input()
    public set columns(values:Array<any>) {
        values.forEach((value:any) => {
            if (value.className && value.className instanceof Array) {
                value.className = value.className.join(' ');
            }
            let column = this._columns.find((col:any) => col.name === value.name);
            if (column) {
                Object.assign(column, value);   //ECMAScript 6 种复制一个对象的全部属性到另一个对象,js种叫extend
            }
            if (!column) {
                this._columns.push(value);
            }
        });
    }

    @Output() public tableChanged:EventEmitter<any> = new EventEmitter();
    @Output() public rowClicked:EventEmitter<any> = new EventEmitter();

    public _columns:Array<any> = [];
    public _config:any = {};

    public get columns(): Array<any> {
        return this._columns;
    }

    public get config(): any {
        return this._config;
    }

    /**
     * constructor and init
     */
    constructor () {}

    ngOnInit () {
        if(this._config.paging.flag && this.rows.length > this._config.paging.itemsPerPage) {
            this.changePage(1);
        } else {
            this.rowData = this.rows;
        }
    }

    /**
     * get row data by row and column
     * @param row
     * @param propertyName
     * @returns {any}
     */
    public getData(row:any, propertyName:string):string {
        return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
    }

    /**
     * row click event
     * @param row
     */
    public onRowClicked(row) {
        this.rowClicked.emit(row);
    }

    ///////////////////////////////////////////////////////
    /////////////           Paging          ///////////////
    ///////////////////////////////////////////////////////

    /**
     * fired when page was changed
     * @param event
     */
    public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        let currentPage = event.page;
        this.changePage(currentPage);
    }

    /**
     * page change event
     * @param currentPage
     */
    public changePage(currentPage:number): void {
        let itemsPerPage = this._config.paging.itemsPerPage;
        let end = itemsPerPage > -1 ? itemsPerPage*currentPage : this.rows.length;
        this.rowData = this.rows.slice(itemsPerPage*(currentPage-1), end);
        console.log(this.rowData.length);
        this.tableChanged.emit(this._columns);
    }

    ///////////////////////////////////////////////////////
    /////////////        Filtering          ///////////////
    ///////////////////////////////////////////////////////
    @HostListener('input', ['$event.target.value'])
    public onFilterTable(event:any): void {
        console.log('filter the table by : ' + this._config.filtering.filterString);
        if(!this._config.filtering.flag) {
            return;
        }
        this._config.filtering.filterString = event;
        let filteredData = this.changeFilter(this.rows, this._config.filtering);
        this.rows = filteredData;
        this.changePage(1);
    }

    public changeFilter(data:any, filtering:any):Array<any> {
        let filteredData:Array<any> = data;

        if(!filtering.flag) {
            return filteredData;
        }

        if(filtering.filterColumn) {
            return filteredData.filter((item:any) =>
                item[filtering.filterColumn].match(this._config.filtering.filterString));
        }

        let temp:Array<any> = [];
        filteredData.forEach((item:any) => {
            let flag = false;
            this.columns.forEach((column:any) => {
                if(item[column.name].toString().match(this._config.filtering.filterString))
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