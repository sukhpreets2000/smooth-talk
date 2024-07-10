import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-condition',
  templateUrl: './password-condition.component.html',
  styleUrls: ['./password-condition.component.scss']
})
export class PasswordConditionComponent {
  @Input() title: string = "";
  @Input() isMet: boolean = false;
}
