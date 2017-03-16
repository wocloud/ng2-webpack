/**
 * Created by sophia.wang on 17/3/14.
 */
import { Routes, RouterModule }  from '@angular/router';

import {ResourcesComponent} from "./resources.component";
import {VM} from "./vm/vm.component";

const routes: Routes = [
    {
        path: '',
        component: ResourcesComponent,
        children: [
            { path: 'vm', component: VM }
        ]
    }
];

export const routing = RouterModule.forChild(routes);