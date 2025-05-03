import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from "./features/auth/views/user/user.component";
import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegistrationComponent } from "./features/auth/components/registration/registration.component";
import { PerfilComponent } from "./features/auth/views/perfil/perfil.component";

import { DashboardComponent } from "./features/dashboard/views/dashboard/dashboard.component";

import { Eventos } from "./features/eventos/views/eventos/eventos";
import { EventoDetalheComponent } from "./features/eventos/components/evento-detalhe/evento-detalhe.component";
import { EventoListaComponent } from "./features/eventos/components/evento-lista/evento-lista.component";

import { Palestrantes } from "./features/palestrantes/views/palestrantes/palestrantes";

import { ContatosComponent } from "./features/contatos/views/contatos/contatos.component";


const routes: Routes = [
  { path: 'usuario', redirectTo: 'usuario/login' },
  {
    path: 'usuario', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registrar', component: RegistrationComponent },
    ]
  },
  { path: 'usuario/perfil', component: PerfilComponent },

  { path: 'inicio', component: DashboardComponent },

  { path: 'eventos', redirectTo: 'eventos/lista' },
  {
    path: 'eventos', component: Eventos,
    children: [
      { path: 'detalhe/:id', component: EventoDetalheComponent },
      { path: 'detalhe', component: EventoDetalheComponent },
      { path: 'lista', component: EventoListaComponent }
    ]
  },

  { path: 'palestrantes', component: Palestrantes },
  { path: 'contatos', component: ContatosComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
