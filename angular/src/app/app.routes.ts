import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/sidebar',
        pathMatch: 'full'
    },
    {
        path: 'sidebar',
        component: SidebarComponent,
    },
];
