// Import all modules for the programme to be executed successfully

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecurringpayRoutingModule } from './recurringpay-routing.module';
import { RecurringpayComponent } from './recurringpay.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

import { AddRecurringPayDialog } from './recurringpay.component';


@NgModule({
  declarations: [
    RecurringpayComponent,
    AddRecurringPayDialog
  ],
  imports: [
    CommonModule,
    RecurringpayRoutingModule,
    MaterialModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class RecurringpayModule { }
