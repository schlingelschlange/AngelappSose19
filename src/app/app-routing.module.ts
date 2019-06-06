import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundPagePage } from './CoreManagement/Homepage/not-found-page/not-found-page.page';
import { AuthGuardGuard } from './UserManagement/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './CoreManagement/core.module#CoreManagementModule',
  },
  { 
    path: 'login', 
    loadChildren: './UserManagement/login/login.module#LoginPageModule' 
  },
  { 
    path: 'signUp', 
    loadChildren: './UserManagement/registration/registration.module#RegistrationPageModule' 
  },
  {
    path: 'map',
    loadChildren: './MainManagement/GoogleMap/map.module#GoogleMapPageModule',
  },
  { 
    path: 'kamera-view', 
    loadChildren: './MainManagement/kamera-view/kamera-view.module#KameraViewPageModule',
  },
  {path: '404', component: NotFoundPagePage},
  {path: '**', redirectTo: '/404'}
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
