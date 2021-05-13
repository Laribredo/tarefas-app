import { Routes } from "@angular/router";
import { ConsultaTarefasComponent } from "src/app/shared/components/consulta-tarefas/consulta-tarefas.component";
import { CadastroUsuariosComponent } from "./components/cadastro-usuarios/cadastro-usuarios.component";


export const TarefaRoutes: Routes = [
  { path:"cadastro-usuario", component: CadastroUsuariosComponent},
  { path:"consulta-tarefas", component: ConsultaTarefasComponent},
]
