import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';
import { AppState } from './app.service';
import { GlobalState } from './global.state';

import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { PagesModule } from './pages/pages.module';

// Application wide providers
const APP_PROVIDERS = [
    AppState,
    GlobalState
];

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ThemeModule.forRoot(),
        routing,
        PagesModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {

}