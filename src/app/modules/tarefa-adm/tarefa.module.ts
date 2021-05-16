import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TarefaComponent } from './tarefa.component';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';
import { TarefaRoutes } from './tarefa-routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from 'src/app/core/interceptors/interceptor.module';
import { LoginService } from 'src/app/core/services/login.service';
import { CadastroTarefasComponent } from 'src/app/shared/components/cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from 'src/app/shared/components/consulta-tarefas/consulta-tarefas.component';
import { TarefasService } from 'src/app/core/services/tarefas.service';





@NgModule({
  declarations: [
    NavbarComponent,
    TarefaComponent,
    CadastroUsuariosComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TarefaRoutes),
  ],
  providers: [UsuarioService, LoginService, TarefasService]
})
export class TarefaModule { }
