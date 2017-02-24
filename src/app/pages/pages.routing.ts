import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
            //{ path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
            //{ path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
            //{ path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
            //{ path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
            //{ path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
            //{ path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
            //{ path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
