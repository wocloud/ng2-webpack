import { Component } from '@angular/core';

@Component({
    selector: 'smart-table',
    template: `
    <h2>Test/Demo Table Component-- ng2-smart-table</h2>
    <span class="line-dashed"></span>
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class SmartTableComponent {

    settings = {
        columns: {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            }
        }
    };

    data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }
    ];
}