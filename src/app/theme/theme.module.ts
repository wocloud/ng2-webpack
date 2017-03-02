import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeConfig } from './theme.config';
import { ThemeConfigProvider } from './theme.config.provider';
import { MenuService } from './services/index';

import {
    HeaderComponent,
    AsideComponent,
    MenuItemComponent,
    MenuComponent
} from './components/index';

const THEME_COMPONENTS = [
    HeaderComponent,
    AsideComponent,
    MenuItemComponent,
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
                ThemeConfigProvider,
                MenuService
            ]
        };
    }
}
