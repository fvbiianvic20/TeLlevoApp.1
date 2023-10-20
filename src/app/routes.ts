import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then(m => m.DatosPageModule)
  },
  {
    path: 'movilicacion',
    loadChildren: () => import('./movilizacion/movilicacion.module').then(m => m.MovilicacionPageModule)
  },
  
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
];
