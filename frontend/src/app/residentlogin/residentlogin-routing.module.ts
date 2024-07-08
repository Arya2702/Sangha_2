import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentloginComponent } from './residentlogin.component';

const routes: Routes = [

  // Define routing path for the component
  
  {
    path: '', component: ResidentloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentloginRoutingModule { }
