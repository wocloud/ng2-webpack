/**
 * Created by sophia.wang on 17/3/11.
 */
import { Routes, RouterModule }  from '@angular/router';

import { TablesComponent } from './tables.component';
import {BasicTableComponent} from "./basicTable/basicTable.component";
import {SmartTableComponent} from "./smartTable/smartTable.component";

const routes: Routes = [
    {
        path: '',
        component: TablesComponent,
        children: [
            {path: 'basic-table', component: BasicTableComponent},
            {path: 'smart-table', component: SmartTableComponent}
        ]
    }
];

export const routing = RouterModule.forChild(routes);