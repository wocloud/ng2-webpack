/**
 * Created by sophia.wang on 17/3/11.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ThemeModule } from '../../theme/theme.module'

import {TablesComponent} from "./tables.component";
import { routing } from './tables.routing';

@NgModule({
    imports: [
        CommonModule,
        routing,
        ThemeModule
    ],
    declarations: [
        TablesComponent
    ]
})

export class TablesModule {

}
