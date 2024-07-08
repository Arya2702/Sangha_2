import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintdetailsComponent } from './complaintdetails.component';

const routes: Routes = [
  {
    path: '',
    component: ComplaintdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintdetailsRoutingModule { }
