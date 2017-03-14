/**
 * Created by sophia.wang on 17/3/13.
 */
import { Routes, RouterModule }  from '@angular/router';
import {Charts} from "./charts.component";

const routes: Routes = [
    {
        path: '',
        component: Charts
    }
];

export const routing = RouterModule.forChild(routes);