import { Injectable } from '@angular/core';
import { ThemeConfigProvider } from './theme.config.provider';

@Injectable()
export class ThemeConfig {

    public app:any = {};

    constructor(private _config:ThemeConfigProvider) {
        this.app = this._config.get();
    }

    private getConfig() {
        return app;
    }
}