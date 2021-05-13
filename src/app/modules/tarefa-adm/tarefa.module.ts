import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TarefaComponent } from './tarefa.component';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';
import { TarefaRoutes } from './tarefa-routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { usuarioProvider } from 'src/app/core/services/usuario.provider';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from 'src/app/core/interceptors/interceptor.module';





@NgModule({
  declarations: [
    NavbarComponent,
    TarefaComponent,
    CadastroUsuariosComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TarefaRoutes),
  ],
  providers: [usuarioProvider]
})
export class TarefaModule { }
