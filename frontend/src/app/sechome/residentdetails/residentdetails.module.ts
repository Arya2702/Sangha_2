import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentdetailsRoutingModule } from './residentdetails-routing.module';
import { ResidentdetailsComponent } from './residentdetails.component';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@NgModule({
  declarations: [
    ResidentdetailsComponent
  ],
  imports: [
    CommonModule,
    ResidentdetailsRoutingModule,
    ToolbarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResidentdetailsModule { }
