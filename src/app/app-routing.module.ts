import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstallmentsReqComponent } from './installments-req/installments-req.component';
import { InsuranceComponent } from './insurance/insurance.component';


const routes: Routes = [
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'installlments-req',
    component: InstallmentsReqComponent
  },
  {
    path: '',
    redirectTo: 'insurance',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
