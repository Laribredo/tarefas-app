import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./modules/login/login.component";
import { TarefaComponent } from "./modules/tarefa-adm/tarefa.component";
import { TarefaModule } from "./modules/tarefa-adm/tarefa.module";
import { TarefasComponent } from "./modules/tarefas/tarefas.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent,
    loadChildren: () => import('src/app/modules/login/login.module').then(s => s.LoginModule)
  },
  {
    path:'tarefa-adm',
    component:TarefaComponent,
    loadChildren: () => import('src/app/modules/tarefa-adm/tarefa.module').then(s => s.TarefaModule),
    canActivate:[AuthGuard]
  },
  {
    path:'tarefa',
    component:TarefasComponent,
    loadChildren: () => import('src/app/modules/tarefas/tarefas.module').then(s => s.TarefasModule),
    canActivate:[AuthGuard]
  }
]

@NgModule({
  imports: [CommonModule,
    RouterModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
