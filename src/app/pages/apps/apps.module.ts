/**
 * Created by sophia.wang on 17/2/27.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ThemeModule } from '../../theme/theme.module'

import {ContactComponent} from './contact/contact.component';
import {WeatherComponent} from "./weather/weather.component";
import {AppsComponent} from './apps.component';

import { routing } from './apps.routing';
import {SFTableModule} from "../../components/table/sf.table.module";
import {SFBreadcrumbModule} from "../../components/breadcrumb/sf.breadcrumb.module";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing,
        SFTableModule,
        SFBreadcrumbModule
    ],
    declarations: [
        ContactComponent,
        WeatherComponent,
        AppsComponent
    ]
})

export class AppsModule {

}