import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CustomersComponent} from './customers/customers.component';
import {ContractorsComponent} from './contractors/contractors.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';



const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  children:[
    { path: 'customers', component: CustomersComponent, canActivate: [AuthGuardGuard]},
    { path: 'contractors', component: ContractorsComponent, canActivate: [AuthGuardGuard]},
  ]},
  { path: '**', component: HomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
