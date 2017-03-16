/**
 * Created by sophia.wang on 17/3/14.
 */
import {Component} from '@angular/core';
import {vm_list_data} from './vm.fake';

@Component({
    selector: 'vm',
    templateUrl: './vm.html'
})

export class VM{

    model: any;

    constructor(){}

    OnInit(){}

    ////////////////////////////////////////
    ///////////// BREADCRUMB ///////////////
    ///////////////////////////////////////
    public breadcrumbs:Array<any> = [
        {name: 'Home', href: 'dashboards'},
        {name: 'Resources', href: 'resources/vm'},
        {name: 'Instances', href: 'resources/vm', active: true}
    ];

    ////////////////////////////////////////
    //////////////// TABLE /////////////////
    ///////////////////////////////////////
    private search:any = {};

    public rows:Array<any> = vm_list_data;

    private filterRows:Array<any> = [];

    public selectedRows:Array<any> = [];

    public columns:Array<any> = [
        {title: 'Area', name: 'availableZoneName'},
        {title: 'Name', name: 'instanceName'},
        {title: 'State', name: 'state'},
        {title: 'Create Date', className: 'text-warning', name: 'createDate', render: 'data|date:"medium"'}
    ];

    //config for setup all plugins (filtering, sorting, paging)
    public config:any = {
        paging: {
            flag: true,
            numPages: 1,     //total number of the pages
            totalItems: 0,   // total number of the items after filtering (of it's chosen)
            pageSize: 3,     // number of data in each page
            itemsPerPage: 8,     //number of the displaying items (rows) on a page
            currentPage: 1      //the default page after the table component loading
        },
        filtering: {
            flag: false,
            filterString: '',
            filterColumn: ''
        },
        checkbox: true,
        className: ['table-striped', 'table-bordered']
    };

    public onSelectedRows($event): void {
        this.selectedRows = $event;
    }

    public onChangeTable($event):any {
        console.log('Table Changed....');
    }

    ////////////////////////////////////////
    //////////////// EVENT /////////////////
    ///////////////////////////////////////
    public create():void {
        console.log('create.....');
        this.open('createModal');
    }
}
