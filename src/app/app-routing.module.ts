import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CaptchaComponent} from './captcha/captcha.component'
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path:'captcha', component:CaptchaComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
