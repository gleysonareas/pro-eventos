import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { Eventos } from "./pages/eventos/eventos";
import { Palestrantes } from "./pages/palestrantes/palestrantes";
import { ContatosComponent } from "./pages/contatos/contatos.component";
import { PerfilComponent } from "./pages/perfil/perfil.component";

const routes: Routes = [
  { path: 'inicio', component: DashboardComponent },
  { path: 'eventos', component: Eventos },
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
