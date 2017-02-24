import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeConfig } from './theme.config';
import { ThemeConfigProvider } from './theme.config.provider';

import {
    HeaderComponent,
    MenuComponent
} from './components/index';

const THEME_COMPONENTS = [
    HeaderComponent,
    MenuComponent
];

@NgModule({
    declarations: [
        ...THEME_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        ...THEME_COMPONENTS
    ]
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: ThemeModule,
            providers: [
                ThemeConfig,
                ThemeConfigProvider
            ]
        };
    }
}
