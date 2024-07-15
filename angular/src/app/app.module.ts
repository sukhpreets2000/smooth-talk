import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PasswordConditionComponent } from './password-condition/password-condition.component';
import { PasswordConditionsHelperComponent } from './password-conditions-helper/password-conditions-helper.component';
@NgModule({
  declarations: [AppComponent, PasswordConditionComponent, PasswordConditionsHelperComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [AppComponent],
  schemas: []

})
export class AppModule { }
