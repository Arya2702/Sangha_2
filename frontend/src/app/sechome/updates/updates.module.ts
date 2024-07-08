import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatesRoutingModule } from './updates-routing.module';
import { AddUpdateDialog, UpdatesComponent } from './updates.component';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';



@NgModule({
  declarations: [
    UpdatesComponent,
    AddUpdateDialog
  ],
  imports: [
    CommonModule,
    UpdatesRoutingModule,
    MaterialModule,
    ToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdatesModule { }
