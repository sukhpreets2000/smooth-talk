import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PasswordConditionsHelperComponent } from '../password-conditions-helper/password-conditions-helper.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PasswordConditionsHelperComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  testPassword: string = '';
  passwordValue: string = "";
  public getPassword(value: any) {
    console.log("password is ", value);
    this.testPassword = value
  }
}
