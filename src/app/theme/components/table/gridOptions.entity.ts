/**
 * Created by sophia.wang on 17/3/15.
 */
export interface GridOptions {
    // datas
    rows?: Array<any>,

    //columns
    columnDefs?: Array<any>,

    //configs
    paging?: {
        flag: boolean,        //switch: is paging or not
        numPages: number,     //total number of the pages
        totalItems: number,   // total number of the items after filtering (of it's chosen)
        pageSize: number,     // number of data in each page
        itemsPerPage: number, //number of the displaying items (rows) on a page
        currentPage: number   //the default page after the table component loading
    },
    filtering?: {
        flag: boolean,
        filterString: string,
        filterColumn: string
    },
    checkbox?: boolean,       //switch: is adding checkbox in the first column or not.

    // styles
    className?: Array<any>,

    // events
    onRowClick?(event:any): void,
    onTableChange?(event:any): void
}