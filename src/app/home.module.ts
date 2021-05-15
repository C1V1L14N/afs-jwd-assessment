import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {CustomersComponent} from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { AppRoutingModule } from './app-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';



@NgModule({
  declarations: [
    HomeComponent,
    CustomersComponent,
    ContractorsComponent
  ],
  exports: [
    AppRoutingModule,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzLayoutModule,
    NzTableModule
  ]
})
export class HomeModule { }
