// Import the necessary modules for the programme to execute properly

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentloginRoutingModule } from './residentlogin-routing.module';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';

import { ResidentloginComponent } from './residentlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResidentloginComponent
  ],
  imports: [
    CommonModule,
    ResidentloginRoutingModule,
    MaterialModule,
    ToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ResidentloginComponent
  ]
})
export class ResidentloginModule { }
