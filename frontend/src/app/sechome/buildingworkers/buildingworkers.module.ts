// Import all necessary modules for the programme to be executed successfully

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingworkersRoutingModule } from './buildingworkers-routing.module';
import { BuildingworkersComponent } from './buildingworkers.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';



@NgModule({
  declarations: [
    BuildingworkersComponent
  ],
  imports: [
    CommonModule,
    BuildingworkersRoutingModule,
    MaterialModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class BuildingworkersModule { }
