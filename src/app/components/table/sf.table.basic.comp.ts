/**
 * Created by sophia.wang on 17/3/7.
 */
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sf-table',
    template: `
    <table class="table dataTable" ngClass="{{config.className || ''}}" role="grid" style="width: 100%;">
        <thead>
            <tr role="row">
                <th *ngFor="let column of columns">{{column.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of pageDatas" (click)="onRowClicked(row)">
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
    public pageDatas:Array<any> = [];

    public get columns(): Array<any> {
        return this._columns;
    }

    public get config(): any {
        return this._config;
    }

    public get configColumns():any {
        let sortColumns:Array<any> = [];

        this.columns.forEach((column:any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });

        return {columns: sortColumns};
    }

    /**
     * constructor and init
     */
    constructor () {}

    ngOnInit () {
        if(this._config.paging.flag && this.rows.length > this._config.paging.itemsPerPage) {
            this.changePage(1);
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
     * page change event
     * @param currentPage
     */
    public changePage(currentPage:number): void {
        let itemsPerPage = this._config.paging.itemsPerPage;
        let end = itemsPerPage > -1 ? itemsPerPage*currentPage : this.rows.length;
        this.pageDatas = this.rows.slice(itemsPerPage*(currentPage-1), end);
    }

    /**
     * table change event
     * @param column
     */
    public onChangeTable(column:any):void {
        this._columns.forEach((col:any) => {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({sorting: this.configColumns});
    }

    public onRowClicked(row) {
        this.rowClicked.emit(row);
    }

    /**
     * fired when page was changed
     * @param event
     */
    public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        let currentPage = event.page;
        this.changePage(currentPage);
    }
}