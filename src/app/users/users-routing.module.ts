//TODO: exportaciones de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//TODO: importaciones de terceros

//TODO: nuestras importaciones
import { CreateComponent } from './pages/create/create.component';
import { LayoutComponent } from './layout/layout.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';



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
        component: ListComponent
      },
      {
        path:'users',
        component: HomeComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
