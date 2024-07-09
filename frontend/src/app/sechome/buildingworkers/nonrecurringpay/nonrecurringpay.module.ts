import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonrecurringpayRoutingModule } from './nonrecurringpay-routing.module';
import { AddNonRecurringPayDialog, NonrecurringpayComponent } from './nonrecurringpay.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';



@NgModule({
  declarations: [
    NonrecurringpayComponent,
    AddNonRecurringPayDialog
  ],
  imports: [
    CommonModule,
    NonrecurringpayRoutingModule,
    MaterialModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class NonrecurringpayModule { }
