/**
 * Created by sophia.wang on 17/3/13.
 */
import {NgModule} from '@angular/core';
import {CommonModule}  from '@angular/common';

import {ThemeModule} from '../../theme/theme.module';

import {routing} from './charts.routing';
import {Charts} from "./charts.component";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing
    ],
    declarations: [
        Charts
    ]
})

export class ChartsModule{

}