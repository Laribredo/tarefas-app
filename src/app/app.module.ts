import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { AppRoutingModule } from './app-routing';
import { TarefaComponent } from './modules/tarefa-adm/tarefa.component';
import { TarefaModule } from './modules/tarefa-adm/tarefa.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
