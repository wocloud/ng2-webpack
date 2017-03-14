/**
 * Created by sophia.wang on 17/3/13.
 */
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
    selector: 'modals',
    templateUrl: './modals.html'
})

export class Modals{

    @ViewChild('childModal') childModal: ModalDirective;

    constructor(){}

    showChildModal(): void {
        this.childModal.show();
    }

    hideChildModal(): void {
        this.childModal.hide();
    }
}