import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecloginRoutingModule } from './seclogin-routing.module';
import { SecloginComponent } from './seclogin.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ResidentloginModule } from '../residentlogin/residentlogin.module';


@NgModule({
  declarations: [
    SecloginComponent
  ],
  imports: [
    CommonModule,
    SecloginRoutingModule,
    ResidentloginModule,
    FlexLayoutModule
  ]
})
export class SecloginModule { }
