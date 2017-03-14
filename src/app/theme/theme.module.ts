import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { AngularEchartsModule } from 'angular2-echarts';

import { ThemeConfig } from './theme.config';
import { ThemeConfigProvider } from './theme.config.provider';
import { MenuService } from './services/index';

import {
    HeaderComponent,
    AsideComponent,
    MenuItemComponent,
    MenuComponent,
    FooterComponent,
    SFBreadcrumbComponent,
    CardComponent,
    SFTableModule
} from './components/index';

const THEME_COMPONENTS = [
    HeaderComponent,
    AsideComponent,
    MenuItemComponent,
    MenuComponent,
    FooterComponent,
    SFBreadcrumbComponent,
    CardComponent
];

@NgModule({
    declarations: [
        ...THEME_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        DropdownModule.forRoot(),
        DatepickerModule.forRoot(),
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        AngularEchartsModule
    ],
    exports: [
        ...THEME_COMPONENTS,
        SFTableModule
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
