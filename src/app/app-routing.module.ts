import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    pathMatch:'full'
  },
  {
    path:'users',
    loadChildren: ()=> import('./users/users.module').then( (m)=>m.UsersModule)
  },
  {
    path: '**',
    redirectTo:'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
