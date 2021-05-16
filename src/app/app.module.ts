import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { AppRoutingModule } from './app-routing';
import { TarefaComponent } from './modules/tarefa-adm/tarefa.component';
import { TarefaModule } from './modules/tarefa-adm/tarefa.module';
import { AuthGuard } from './auth.guard';
import { CadastroTarefasComponent } from './shared/components/cadastro-tarefas/cadastro-tarefas.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    TarefaModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
