// Angular 2
import {
    enableDebugTools,
    disableDebugTools
} from '@angular/platform-browser';

import {
    ApplicationRef,
    enableProdMode
} from '@angular/core';

// Environment Providers
let PROVIDERS: any[] = [
    // common env directives
];

// Angular debug tools in the dev console
let _decorateModuleRef = <T>(value: T): T => { return value; };

// development and production --- disable second check and assert
enableProdMode();

if ('production' === ENV) {
    enableProdMode();

    // Production
    _decorateModuleRef = (modRef: any) => {
        disableDebugTools();

        return modRef;
    };

    PROVIDERS = [
        ...PROVIDERS,
        // custom providers in production
    ];

} else {

    enableProdMode();

    _decorateModuleRef = (modRef: any) => {
        const appRef = modRef.injector.get(ApplicationRef);
        const cmpRef = appRef.components[0];

        let _ng = (<any> window).ng;
        //enableDebugTools(cmpRef);
        disableDebugTools();
        //(<any> window).ng.probe = _ng.probe;
        //(<any> window).ng.coreTokens = _ng.coreTokens;
        return modRef;
    };

    // Development
    PROVIDERS = [
        ...PROVIDERS,
        // custom providers in development
    ];

}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
    ...PROVIDERS
];
