import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './bookflight/bookflight.component';
import { LoginComponent } from './login/login.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  { path: 'admin', loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) },
  { path: 'bookflight', component: BookflightComponent },
  { path: 'manageAirlines', component: ManageAirlinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routeComponent=[BookflightComponent, AdminModule]
