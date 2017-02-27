/**
 * Created by sophia.wang on 17/2/27.
 */
import {Routes, RouterModule}  from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {WeatherComponent} from "./weather/weather.component";
import {AppsComponent} from "./apps.component";

const routes: Routes = [
    {
        path: '',
        component: AppsComponent,
        children: [
            { path: 'contact', component: ContactComponent },
            { path: 'weather', component: WeatherComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);