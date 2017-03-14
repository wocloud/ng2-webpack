/**
 * Created by sophia.wang on 17/3/12.
 */
import { Routes, RouterModule }  from '@angular/router';

import {UIComponent} from "./ui.components";
import {Buttons} from './components/buttons';
import {Modals} from "./components/modals";

const routes: Routes = [
    {
        path: '',
        component: UIComponent,
        children: [
            { path: 'buttons', component: Buttons },
            { path: 'modals', component: Modals }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
