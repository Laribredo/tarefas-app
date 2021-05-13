import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { TarefaComponent } from "./modules/tarefa-adm/tarefa.component";
import { TarefaModule } from "./modules/tarefa-adm/tarefa.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
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
    loadChildren: () => import('src/app/modules/tarefa-adm/tarefa.module').then(s => s.TarefaModule)
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
