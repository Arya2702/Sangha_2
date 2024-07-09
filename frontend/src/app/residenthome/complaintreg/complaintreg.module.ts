// Import all modules needed for the component to execute

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintregRoutingModule } from './complaintreg-routing.module';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ComplaintregComponent } from './complaintreg.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';


@NgModule({
  declarations: [
    ComplaintregComponent
  ],
  imports: [
    CommonModule,
    ComplaintregRoutingModule,
    ToolbarModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComplaintregModule { }
