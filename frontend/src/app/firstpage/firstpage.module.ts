// Import all modules needed for the component to execute correctly

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstpageRoutingModule } from './firstpage-routing.module';
import { FirstpageComponent } from './firstpage.component';

import { MaterialModule } from '../material/material.module';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FirstpageComponent
  ],
  imports: [
    CommonModule,
    FirstpageRoutingModule,
    MaterialModule,
    ToolbarModule,
    FlexLayoutModule
  ]
})
export class FirstpageModule { }
