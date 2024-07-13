import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordConditionsHelperComponent } from './password-conditions-helper/password-conditions-helper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordConditionsHelperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  testPassword: string = 'YourTestPassword123!';
}
