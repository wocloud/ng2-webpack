import { Component, OnInit} from '@angular/core';


@Component({
    selector: 'sf-pages',
    styles: [],
    template: `
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
    `
})
export class PagesComponent {

    constructor() {
    }

    ngOnInit() {
    }
}