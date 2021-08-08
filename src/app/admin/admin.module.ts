import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


// const routes: Routes = [
//   {path: 'manageAirline', component: ManageAirlinesComponent }];
@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule, FormsModule ,ReactiveFormsModule
  ],
  exports:[RouterModule]
})
export class AdminModule { }
