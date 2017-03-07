import { Component} from '@angular/core';

@Component({
    selector: 'sf-pages',
    template: `
      <router-outlet></router-outlet>
    `
})
export class PagesComponent {

    constructor() {
    }
}