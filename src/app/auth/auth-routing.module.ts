
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const CHILD_ROUTING: Routes = [
  { path: '', component: AuthComponent, 
    children: [
        { path:'login', component: LoginComponent },
    ] 
  }




];
@NgModule({
  imports: [RouterModule.forChild(CHILD_ROUTING)],
  exports: [RouterModule]
})
export class AuthChildRoutingModule { }
