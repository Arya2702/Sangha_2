import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecloginComponent } from './seclogin.component';

const routes: Routes = [
  {
    path:'', component: SecloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecloginRoutingModule { }
