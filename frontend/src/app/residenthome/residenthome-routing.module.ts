import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenthomeComponent } from './residenthome.component';

const routes: Routes = [

  // Defining the path for routing
  
  {
    path: '', component: ResidenthomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidenthomeRoutingModule { }
