import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { PasswordConditionsHelperComponent } from './password-conditions-helper/password-conditions-helper.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'sidebar',
        component: SidebarComponent,
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "password",
        component: PasswordConditionsHelperComponent
    }
];
