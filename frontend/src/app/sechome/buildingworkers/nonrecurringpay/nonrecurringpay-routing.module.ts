import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonrecurringpayComponent } from './nonrecurringpay.component';

const routes: Routes = [
  {
    path: '',
    component: NonrecurringpayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonrecurringpayRoutingModule { }
