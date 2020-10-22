import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';

const routes: Routes = [
  { path: '', component: UsersHomeComponent },
  { path: 'profile/:id', component: UsersProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
