"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sophia.wang on 17/2/27.
 */
var router_1 = require("@angular/router");
var contact_component_1 = require("./contact/contact.component");
var weather_component_1 = require("./weather/weather.component");
var apps_component_1 = require("./apps.component");
var routes = [
    {
        path: '',
        component: apps_component_1.AppsComponent,
        children: [
            { path: 'contact', component: contact_component_1.ContactComponent },
            { path: 'weather', component: weather_component_1.WeatherComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=apps.routing.js.map