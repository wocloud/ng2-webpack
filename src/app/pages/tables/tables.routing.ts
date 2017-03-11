/**
 * Created by sophia.wang on 17/3/11.
 */
import { Routes, RouterModule }  from '@angular/router';

import { TablesComponent } from './tables.component';

const routes: Routes = [
    {
        path: '',
        component: TablesComponent
    }
];

export const routing = RouterModule.forChild(routes);