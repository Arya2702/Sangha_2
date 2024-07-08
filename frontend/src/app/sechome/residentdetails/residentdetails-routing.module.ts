import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentdetailsComponent } from './residentdetails.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentdetailsRoutingModule { }
