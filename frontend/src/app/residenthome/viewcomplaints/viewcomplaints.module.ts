// Import all necessary modules needed for the programme execution

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcomplaintsRoutingModule } from './viewcomplaints-routing.module';
import { ViewcomplaintsComponent } from './viewcomplaints.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';


@NgModule({
  declarations: [
    ViewcomplaintsComponent
  ],
  imports: [
    CommonModule,
    ViewcomplaintsRoutingModule,
    MaterialModule,
    ToolbarModule,
    FlexLayoutModule
  ]
})
export class ViewcomplaintsModule { }
