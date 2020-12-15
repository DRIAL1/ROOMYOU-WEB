import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesHomeComponent } from './branches-home/branches-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [BranchesHomeComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    OntimizeWebModule
  ]
})
export class BranchesModule { }
