import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ThemeModule } from '../../theme/theme.module';

import { DashboardComponent } from './dashboard.component';

import { routing } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing
    ],
    declarations: [ DashboardComponent ]
})

export class DashboardModule {

}