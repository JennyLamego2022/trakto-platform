import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AberturaComponent } from './componentes/abertura/abertura.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MaterialDidaticoComponent } from './componentes/material-didatico/material-didatico.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'abertura',
    component: AberturaComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'material',
    component: MaterialDidaticoComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
