import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-password-conditions-helper',
  templateUrl: './password-conditions-helper.component.html',
  styleUrls: ['./password-conditions-helper.component.scss']
})
export class PasswordConditionsHelperComponent implements OnChanges {
  @Input() password: string = "";
  hasUppercase: boolean = true;
  hasLowercase: boolean = true;
  hasNumber: boolean = true;
  hasSpecialCharacter: boolean = true;
  isEightCharactersLong: boolean = true;
  isLongerThan72: boolean = true;

  ngOnChanges() {
    this.hasUppercase = /[A-Z]/.test(this.password);
    this.hasLowercase = /[a-z]/.test(this.password);
    this.hasNumber = /\d/.test(this.password);
    this.hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    this.isEightCharactersLong = this.password.length >= 8;
    this.isLongerThan72 = this.password.length > 72;
  }
}
