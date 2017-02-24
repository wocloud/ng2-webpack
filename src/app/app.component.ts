import { Component, OnInit } from '@angular/core';
import { MENU } from './app.menu';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'my-app',
    template: `
    <div class="app">
        <div class="app-header navbar">
            <my-header></my-header>
        </div>
        <div class="app-aside hidden-xs">
            <my-menu></my-menu>
        </div>
        <div class="app-content">
            <a href class="off-screen-toggle hide" ui-toggle-class="off-screen" data-target=".app-aside" ></a>
            <div class="app-content-body fade-in-up">
                <my-pages></my-pages>
            </div>
        </div>
    </div>
  `,
})

export class AppComponent implements OnInit{

    constructor() { }

    ngOnInit() { }
}
