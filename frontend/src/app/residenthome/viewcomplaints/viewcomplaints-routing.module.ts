import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcomplaintsComponent } from './viewcomplaints.component';

const routes: Routes = [

  // Define the routing path for the component
  {
    path: '',
    component: ViewcomplaintsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcomplaintsRoutingModule { }
