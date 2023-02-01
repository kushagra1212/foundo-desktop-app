import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public showPassword: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  goBack() {
    console.log('goBack()');
  }
}
