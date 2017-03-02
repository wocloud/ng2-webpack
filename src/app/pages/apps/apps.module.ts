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

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing
    ],
    declarations: [
        ContactComponent,
        WeatherComponent,
        AppsComponent
    ]
})

export class AppsModule {

}