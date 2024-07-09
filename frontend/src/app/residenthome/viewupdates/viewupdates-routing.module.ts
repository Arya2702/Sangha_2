import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewupdatesComponent } from './viewupdates.component';

const routes: Routes = [
  {
    path: '',
    component: ViewupdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewupdatesRoutingModule { }
