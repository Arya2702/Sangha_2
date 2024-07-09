import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SechomeComponent } from './sechome.component';

const routes: Routes = [

  // Define routing path for the component
  
  {
    path:'', component: SechomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SechomeRoutingModule { }
