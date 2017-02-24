import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';

import { ThemeModule } from '../theme/theme.module';

import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        routing
    ],
    declarations: [ PagesComponent ],
    exports: [ PagesComponent ]
})

export class PagesModule {}