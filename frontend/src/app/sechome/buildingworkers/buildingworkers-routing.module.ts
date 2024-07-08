import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingworkersComponent } from './buildingworkers.component';

const routes: Routes = [

  // Define routing path for the component
  
  {
    path: '',
    component: BuildingworkersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingworkersRoutingModule { }
