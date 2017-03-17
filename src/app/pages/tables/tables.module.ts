/**
 * Created by sophia.wang on 17/3/11.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ThemeModule } from '../../theme/theme.module'
import {TablesComponent} from "./tables.component";
import { routing } from './tables.routing';
import {BasicTableComponent} from "./basicTable/basicTable.component";
import {SmartTableComponent} from "./smartTable/smartTable.component";

@NgModule({
    imports: [
        CommonModule,
        routing,
        ThemeModule
    ],
    declarations: [
        TablesComponent,
        BasicTableComponent,
        SmartTableComponent
    ]
})

export class TablesModule {

}
