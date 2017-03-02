"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
exports.routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboards' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map