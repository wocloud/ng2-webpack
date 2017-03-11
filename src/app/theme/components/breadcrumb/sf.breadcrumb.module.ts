/**
 * Created by sophia.wang on 17/3/8.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SFBreadcrumbComponent} from "./sf.breadcrumb.comp";

@NgModule({
    imports: [ CommonModule ],
    declarations: [SFBreadcrumbComponent],
    exports: [ SFBreadcrumbComponent ]
})

export class SFBreadcrumbModule {

}