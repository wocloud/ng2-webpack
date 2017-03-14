/**
 * Created by sophia.wang on 17/3/12.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'buttons',
    styleUrl: ['./buttons.css'],
    templateUrl: './buttons.html',
})
export class Buttons {

    public disabled: boolean = false;

    constructor() {
    }
}
