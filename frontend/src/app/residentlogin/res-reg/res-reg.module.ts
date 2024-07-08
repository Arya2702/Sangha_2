// Import the necessary modules for the programme to be executed properly

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResRegRoutingModule } from './res-reg-routing.module';
import { ResRegComponent } from './res-reg.component';

import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';


@NgModule({
  declarations: [
    ResRegComponent
  ],
  imports: [
    CommonModule,
    ResRegRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResRegModule { }
