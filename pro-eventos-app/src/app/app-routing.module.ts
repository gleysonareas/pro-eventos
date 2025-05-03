import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { Eventos } from "./pages/eventos/eventos";
import { Palestrantes } from "./pages/palestrantes/palestrantes";
import { ContatosComponent } from "./pages/contatos/contatos.component";
import { PerfilComponent } from "./pages/perfil/perfil.component";
import { EventoDetalheComponent } from "./components/eventos/evento-detalhe/evento-detalhe.component";
import { EventoListaComponent } from "./components/eventos/evento-lista/evento-lista.component";

const routes: Routes = [
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
  { path: 'perfil', component: PerfilComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
