import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    public userList = [
        {
            name: "Virat Kohli"
        },
        {
            name: "Babar Azam"
        },
        {
            name: "Gill"
        },
        {
            name: "Rohit"
        },
        {
            name: "Bumrah"
        },
    ]
}
