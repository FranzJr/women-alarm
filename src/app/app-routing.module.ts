import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },  
  {
    path: 'periodo',
    loadChildren: () => import('./pages/periodo/periodo.module').then( m => m.PeriodoPageModule)
  },
  {
    path: 'embarazo',
    loadChildren: () => import('./pages/embarazo/embarazo.module').then( m => m.EmbarazoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'metodo',
    loadChildren: () => import('./pages/metodo/metodo.module').then( m => m.MetodoPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./pages/casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'personaliza',
    loadChildren: () => import('./pages/personaliza/personaliza.module').then( m => m.PersonalizaPageModule)
  },
  {
    path: 'olvido',
    loadChildren: () => import('./pages/olvido/olvido.module').then( m => m.OlvidoPageModule)
  },
  {
    path: 'alarma-manual',
    loadChildren: () => import('./pages/alarma-manual/alarma-manual.module').then( m => m.AlarmaManualPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./pages/diario/diario.module').then( m => m.DiarioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
