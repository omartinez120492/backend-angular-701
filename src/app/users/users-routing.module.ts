//TODO: exportaciones de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//TODO: importaciones de terceros

//TODO: nuestras importaciones
import { CreateComponent } from './pages/create/create.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users.component';
import { DeleteComponent } from './pages/delete/delete.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'create',
        component: CreateComponent
      },
      {
        path:'delete',
        component: DeleteComponent
      },
      {
        path:'list',
        component: UsersComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
