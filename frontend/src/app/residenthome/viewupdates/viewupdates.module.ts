// Import all necessary modules needed for the programme execution

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewupdatesRoutingModule } from './viewupdates-routing.module';
import { ViewupdatesComponent } from './viewupdates.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';


@NgModule({
  declarations: [
    ViewupdatesComponent
  ],
  imports: [
    CommonModule,
    ViewupdatesRoutingModule,
    MaterialModule,
    ToolbarModule,
    FlexLayoutModule
  ]
})
export class ViewupdatesModule { }
