import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';

import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarComponent } from './toolbar.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from 'src/app/_services/httpservice.service';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MaterialModule
  ],

  exports:
  [
    ToolbarComponent
  ]
})
export class ToolbarModule { 
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
  //   this.matIconRegistry.addSvgIcon(
  //     'sangha',
  //     this.domSanitizer.bypassSecurityTrustResourceUrl('C:/Users/aryan/Desktop/Project/sangha_project.svg')
  //   )};
}
