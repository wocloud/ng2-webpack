import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
            { path: 'dashboards', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'apps', loadChildren: 'app/pages/apps/apps.module#AppsModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
