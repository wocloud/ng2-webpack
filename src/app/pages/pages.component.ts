import { Component} from '@angular/core';

@Component({
    selector: 'sf-pages',
    template: `
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    `
})
export class PagesComponent {

    constructor() {
    }
}