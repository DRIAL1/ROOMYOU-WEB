import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';


export function intRateMonthlyFunction(rowData: Array<any>): number{
  return rowData["INTERESRATE"]/12;
}
@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    
  ],
  exports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
