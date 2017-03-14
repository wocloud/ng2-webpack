/**
 * Created by sophia.wang on 17/3/13.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'buttons-checkbox',
    templateUrl: './checkbox.button.html'
})
export class ButtonsCheckbox {
    public checkModel:any = {left: false, middle: true, right: false};
}