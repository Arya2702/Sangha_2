import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintdetailsRoutingModule } from './complaintdetails-routing.module';
import { ComplaintdetailsComponent } from './complaintdetails.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';


@NgModule({
  declarations: [
    ComplaintdetailsComponent
  ],
  imports: [
    CommonModule,
    ComplaintdetailsRoutingModule,
    MaterialModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComplaintdetailsModule { }
