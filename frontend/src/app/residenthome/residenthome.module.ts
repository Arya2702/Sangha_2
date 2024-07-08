// Import all modules needed for the component to execute

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidenthomeRoutingModule } from './residenthome-routing.module';

import { MaterialModule } from '../material/material.module';

import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { ResidenthomeComponent } from './residenthome.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ResidenthomeComponent
  ],
  imports: [
    CommonModule,
    ResidenthomeRoutingModule,
    ToolbarModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ResidenthomeModule { }
