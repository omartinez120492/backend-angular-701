import { Component } from '@angular/core';
import { Menu } from '../../interfaces/menu.interfaces';

@Component({
  selector: 'users-sidebar',
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent {
  public menuUsers: Menu[] = [
    {
      path:'users',
      titulo:'Home Users'
    },
    {
      path:'create',
      titulo:'create'
    },
    {
      path:'delete',
      titulo:'delete'
    },
    {
      path:'list',
      titulo:'List'
    },
  ]
}
