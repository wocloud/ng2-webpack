/**
 * Created by sophia.wang on 17/3/12.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';

import { ThemeModule } from '../../theme/theme.module';

import { routing } from './ui.routing';

import {UIComponent} from "./ui.components";
import {Buttons} from "./components/buttons/buttons.component";
import {ButtonsCheckbox} from "./components/buttons/checkboxButton/checkbox.button.component";
import {ButtonsRadio} from "./components/buttons/RadioButton/radio.button.component";
import {Modals} from "./components/modals/modals.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        routing,
        ButtonsModule.forRoot(),
        DropdownModule.forRoot(),
        ModalModule.forRoot()
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