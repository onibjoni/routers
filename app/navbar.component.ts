import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar.component.html'

})
export class NavBarComponent {

  constructor(private _router: Router){
  }


}