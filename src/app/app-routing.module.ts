import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'teams-list' },
  { path: 'teams-list', component: TeamsListComponent },
  { path: 'view-team/:teamId', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
