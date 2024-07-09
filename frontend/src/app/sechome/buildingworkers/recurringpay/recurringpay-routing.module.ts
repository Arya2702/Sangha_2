import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecurringpayComponent } from './recurringpay.component';

const routes: Routes = [
  {
    path: '',
    component: RecurringpayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecurringpayRoutingModule { }
