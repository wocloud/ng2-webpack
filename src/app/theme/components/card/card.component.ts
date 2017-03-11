/**
 * Created by sophia.wang on 17/3/11.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'sf-card',
    templateUrl: './card.html',
})
export class CardComponent {
    @Input() title:String;
    @Input() cardClass:String;
    @Input() cardType:String;
}
