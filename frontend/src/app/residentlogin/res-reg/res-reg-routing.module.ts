import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResRegComponent } from './res-reg.component';

const routes: Routes = [

  // Define routing path for the component
  
  {
    path: '', component: ResRegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResRegRoutingModule { }
