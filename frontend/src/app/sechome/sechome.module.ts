// Import all necessary modules for the programme to be executed successfully

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SechomeRoutingModule } from './sechome-routing.module';

import { MaterialModule } from '../material/material.module';
import { SechomeComponent } from './sechome.component';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SechomeComponent
  ],
  imports: [
    CommonModule,
    SechomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ToolbarModule
  ]
})
export class SechomeModule { }
