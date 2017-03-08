/**
 * Created by sophia.wang on 17/3/7.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { SFTableComponent } from './sf.table.basic.comp';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        SFTableComponent
    ],
    exports: [
        SFTableComponent
    ]
})
export class SFTableModule {
}