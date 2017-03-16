/**
 * Created by sophia.wang on 17/3/14.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { ThemeModule } from '../../theme/theme.module'
import { routing } from './resources.routing';
import {ResourcesComponent} from "./resources.component";
import {VM} from "./vm/vm.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        routing
    ],
    declarations: [
        ResourcesComponent,
        VM
    ]
})

export class ResourcesModule{

}