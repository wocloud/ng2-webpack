"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
exports.routes = [
    {
        path: 'pages',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=pages.routing.js.map