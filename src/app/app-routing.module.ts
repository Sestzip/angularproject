import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/layout', pathMatch: 'full'
  },
  {
    path: 'layout', component: LayoutComponent
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'manage-chat',
    loadChildren: () => import('./modules/manage-chat/manage-chat.module').then(m => m.ManageChatModule)
  },
  {
    path: 'manage-documents',
    loadChildren: () => import('./modules/manage-documents/manage-documents.module').then(m => m.ManageDocumentsModule)
  },
  {
    path: 'manage-user',
    loadChildren: () => import('./modules/manage-user/manage-user.module').then(m => m.ManageUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
