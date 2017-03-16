/**
 * Created by sophia.wang on 17/3/15.
 */
import { Component, OnInit, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'sf-grid',
    template: `
    <div class="btn-toolbar m-xs m-l-none">
        <input type="text" placeholder="all columns..."
               *ngIf="config.filtering.flag"/>
    </div>
    <table class="table dataTable" ngClass="{{config.className || ''}}" role="grid" style="width: 100%;">
        <thead>
            <tr role="row">
                <th *ngIf="config.checkbox" (click)="selectAll($event)"><input type="checkbox" [checked]="_isChecked"></th>
                <th *ngFor="let column of columns">{{column.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of pageData" (click)="onRowClicked(row)">
                <td *ngIf="config.checkbox"><input type="checkbox" [checked]="_isChecked" [(ngModel)]="row.selected"></td>
                <td *ngFor="let column of columns" [innerHtml]="sanitize(getData(row, column.name, column.cellTemplate))"></td>
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

export class SFGridComponent implements OnInit {
    @Input() public rows:Array<any> = [];   //传入的数据 rows
    private pageData:Array<any> = [];       //每页的数据  pageData
    private totalData:Array<any> = [];      //筛选过滤后的全部数据 totalData
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
    @Output() public selectedRows:EventEmitter<any> = new EventEmitter();

    public _columns:Array<any> = [];
    public _config:any = {};
    public _selectedRows:Array<any> = [];   //所有选中的行
    public _isChecked:boolean = false;

    public get columns():Array<any> {
        return this._columns;
    }

    public get config():any {
        return this._config;
    }

    /**
     * constructor and init
     */
    constructor(private sanitizer:DomSanitizer) {
    }

    public sanitize(html:string):SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    ngOnInit() {
        this.totalData = this.rows;
        if (this._config.paging.flag && this.rows.length > this._config.paging.itemsPerPage) {
            this.changePage(1, this.rows);
        }
    }

    /**
     * get row data by row and column
     * @param row
     * @param propertyName
     * @returns {any}
     */
    public getData(row:any, propertyName:string, propertyTemplate:string):string {
        let initValue = propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
        let trueValue = initValue;
        //if(propertyTemplate && propertyTemplate!=undefined) {
        //    trueValue = propertyRender.replace(/data/, initValue);
        //}
        //console.log(trueValue);
        return trueValue;
    }

    /**
     * row click event
     * @param row
     */
    public onRowClicked(row) {
        row.selected = !row.selected;
        if (row.selected) {
            this.rowClicked.emit(row);
            if ($.inArray(row, this._selectedRows) == -1) {
                this._selectedRows.push(row);
            }
        } else {
            this.rowClicked.emit(null);
            if ($.inArray(row, this._selectedRows) > -1) {
                this._selectedRows.splice($.inArray(row, this._selectedRows), 1);
            }
        }
        this.selectedRows.emit(this._selectedRows);
    }

    /**
     * checkbox select all rows.
     */
    public selectAll($event) {
        this._isChecked = $event.target.checked;
        if (this._isChecked) {
            this._selectedRows = this.totalData;
        } else {
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
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
        this.changePage(currentPage, this.totalData);
    }

    /**
     * page change event
     * @param currentPage
     */
    public changePage(currentPage:number, data:Array<any>):void {
        let itemsPerPage = this._config.paging.itemsPerPage;
        let end = itemsPerPage > -1 ? itemsPerPage * currentPage : data.length;
        this.pageData = data.slice(itemsPerPage * (currentPage - 1), end);
        this._config.paging.totalItems = data.length;
        this._config.paging.numPages = Math.ceil(data.length / this._config.paging.itemsPerPage);
        this.tableChanged.emit(data);
    }

    ///////////////////////////////////////////////////////
    /////////////        Filtering          ///////////////
    ///////////////////////////////////////////////////////
    @HostListener('input', ['$event.target.value'])
    public onFilterTable(event:any):void {
        console.log('filter the table by : ' + this._config.filtering.filterString);
        if (!this._config.filtering.flag) {
            return;
        }
        this._config.filtering.filterString = event;
        let filteredData = this.changeFilter(this.rows, this._config.filtering);
        this.totalData = filteredData;
        this.changePage(this._config.paging.currentPage, filteredData);
    }

    public changeFilter(data:any, filtering:any):Array<any> {
        let filteredData:Array<any> = data;

        if (!filtering.flag) {
            return filteredData;
        }

        if (filtering.filterColumn) {
            return filteredData.filter((item:any) =>
                item[filtering.filterColumn].match(this._config.filtering.filterString));
        }

        let temp:Array<any> = [];
        filteredData.forEach((item:any) => {
            let flag = false;
            this.columns.forEach((column:any) => {
                if (item[column.name].toString().match(this._config.filtering.filterString))
                    flag = true;
            });
            if (flag) {
                temp.push(item);
            }
        });
        filteredData = temp;
        return filteredData;
    }
}
