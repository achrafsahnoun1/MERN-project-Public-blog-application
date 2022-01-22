import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WriteComponent } from './components/write/write.component';
const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
},
{
  path: 'write',
  component: WriteComponent
},
  {
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
},
{
    path: '**',
    redirectTo: 'home'
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
