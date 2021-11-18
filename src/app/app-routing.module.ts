import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  // {
  //   path: 'login',component: LogInComponent
  // },
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LogInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
