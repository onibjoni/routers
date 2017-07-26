
import { Component } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <i *ngIf="isVisible" class="fa fa-spinner fa-spin fa-5x"></i>
    `,
    inputs:['isVisible']   
})
export class SpinnerComponent {
    isVisible = true;
}

            
