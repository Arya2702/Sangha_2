import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintregComponent } from './complaintreg.component';

const routes: Routes = [

  // Define the path for routing
  
  {
    path: '',
    component: ComplaintregComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintregRoutingModule { }
