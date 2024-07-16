import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PasswordConditionsHelperComponent } from '../password-conditions-helper/password-conditions-helper.component';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PasswordConditionsHelperComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  inputFocused: boolean = false;
  testPassword: string = "";

  ngOnInit() {
    this.profileForm.get('password')?.valueChanges.subscribe(value => {
      this.testPassword = value || "";
      this.getPassword(value);
    });
  }

  public getPassword(value: any) {
    console.log("Password is", value);
  }

  public onFocus(value: any) {
    this.inputFocused = true
  }
}
