// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LouageListComponent } from './louage-list/louage-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'louages', component: LouageListComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
