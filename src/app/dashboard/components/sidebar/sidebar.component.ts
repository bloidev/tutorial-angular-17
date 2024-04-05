import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public menuItems : MenuItems[] = [
    {title: 'Dashboard', icon: 'dashboard', link: '/'},
    {title: 'Mi Perfil', icon: 'people', link: '/profile'},
  ];
  
}
