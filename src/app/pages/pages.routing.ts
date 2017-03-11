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
            { path: 'apps', loadChildren: 'app/pages/apps/apps.module#AppsModule' },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
            { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
