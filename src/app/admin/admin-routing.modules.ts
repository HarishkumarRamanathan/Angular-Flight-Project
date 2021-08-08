import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageAirlinesComponent } from "../manage-airlines/manage-airlines.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'manageAirlines', component: ManageAirlinesComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})

export class AdminRouteModule { }