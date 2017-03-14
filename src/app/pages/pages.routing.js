"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
exports.routes = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
            { path: 'dashboards', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'apps', loadChildren: 'app/pages/apps/apps.module#AppsModule' },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#/ChartsModule' },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UIModule' }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=pages.routing.js.map