import { Component, NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [

  {
    path: '', component: FirstpageComponent
  },

  {
    path: 'firstpage',
    loadChildren: ()=>import('./firstpage/firstpage.module').then(m=>m.FirstpageModule)
  },

  {
  path: 'login',
  loadChildren : ()=>import('./login/login.module').then(m=>m.LoginModule)
  },


  {
    path: 'residentlogin',
    loadChildren: ()=>import('./residentlogin/residentlogin.module').then(m=>m.ResidentloginModule)
  },

  {
    path: 'seclogin',
    loadChildren: ()=>import('./seclogin/seclogin.module').then(m=>m.SecloginModule)
  },

  {
    path: 'residenthome',
    loadChildren: ()=>import('./residenthome/residenthome.module').then(m=>m.ResidenthomeModule)
  },
  
  {
    path: 'sechome',
    loadChildren: ()=>import('./sechome/sechome.module').then(m=>m.SechomeModule)
  },

  {
    path: 'res-reg',
    loadChildren: ()=>import('./residentlogin/res-reg/res-reg.module').then(m=>m.ResRegModule)
  },

  {
    path: 'residenthome/complaintreg',
    loadChildren: ()=>import('./residenthome/complaintreg/complaintreg.module').then(m=>m.ComplaintregModule)
  },

  {
    path: 'residenthome/viewupdates',
    loadChildren: ()=>import('./residenthome/viewupdates/viewupdates.module').then(m=>m.ViewupdatesModule)
  },

  {
    path: 'residenthome/viewcomplaints',
    loadChildren: ()=>import('./residenthome/viewcomplaints/viewcomplaints.module').then(m=>m.ViewcomplaintsModule)
  },

  {
    path: 'sechome/residentdetails',
    loadChildren: ()=>import('./sechome/residentdetails/residentdetails.module').then(m=>m.ResidentdetailsModule)
  },

  {
    path: 'sechome/complaintdetails',
    loadChildren: ()=>import('./sechome/complaintdetails/complaintdetails.module').then(m=>m.ComplaintdetailsModule)
  },

  {
    path: 'sechome/updates',
    loadChildren: ()=>import('./sechome/updates/updates.module').then(m=>m.UpdatesModule)
  },

  {
    path: 'sechome/buildingworkers',
    loadChildren: ()=>import('./sechome/buildingworkers/buildingworkers.module').then(m=>m.BuildingworkersModule)
  },

  {
    path: 'sechome/buildingworkers/recurringpay',
    loadChildren: ()=>import('./sechome/buildingworkers/recurringpay/recurringpay.module').then(m=>m.RecurringpayModule)
  },

  {
    path: 'sechome/buildingworkers/nonrecurringpay',
    loadChildren: ()=>import('./sechome/buildingworkers/nonrecurringpay/nonrecurringpay.module').then(m=>m.NonrecurringpayModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
