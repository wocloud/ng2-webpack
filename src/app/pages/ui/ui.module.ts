/**
 * Created by sophia.wang on 17/3/12.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { ThemeModule } from '../../theme/theme.module';

import { routing } from './ui.routing';

import {UIComponent} from "./ui.components";
import {Buttons} from "./buttons/buttons.component";
import {ButtonsCheckbox} from "./buttons/checkboxButton/checkbox.button.component";
import {ButtonsRadio} from "./buttons/RadioButton/radio.button.component";
import {Modals} from "./modals/modals.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        routing,
        ButtonsModule.forRoot(),
        DropdownModule.forRoot(),
        Ng2Bs3ModalModule
    ],
    declarations: [
        UIComponent,
        Buttons,
        ButtonsCheckbox,
        ButtonsRadio,
        Modals
    ]
})

export class UIModule {

}