import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { SendComponent } from './send/send.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'Home', component: HomepageComponent},
  {path:'Profile', component: ProfileComponent},
  {path: 'Send', component: SendComponent},
  {path: 'Login', component: LoginComponent},
  {path:'User', component: UserComponent},
  //default route
  {path: '',redirectTo:'login', pathMatch: 'full' },
  //wildcard route
  {path: '**',redirectTo: 'Home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
