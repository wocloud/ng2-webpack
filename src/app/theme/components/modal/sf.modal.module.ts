/**
 * Created by sophia.wang on 17/3/16.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal';
import { ModalHeaderComponent } from './components/modal-header';
import { ModalBodyComponent } from './components/modal-body';
import { ModalFooterComponent } from './components/modal-footer';
import { AutofocusDirective } from './directives/autofocus';

export * from './components/modal';
export * from './components/modal-header';
export * from './components/modal-body';
export * from './components/modal-footer';
export * from './components/modal-instance';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalComponent,
        ModalHeaderComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        AutofocusDirective
    ],
    exports: [
        ModalComponent,
        ModalHeaderComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        AutofocusDirective
    ]
})
export class SFModalModule {
}