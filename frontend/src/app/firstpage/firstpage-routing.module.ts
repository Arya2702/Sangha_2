import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage.component';

const routes: Routes = [

  // Define the path and component to help routing

  {
    path: '',
    component: FirstpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstpageRoutingModule { }
