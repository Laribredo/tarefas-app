import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasComponent } from './tarefas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from 'src/app/core/interceptors/interceptor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarefaRoutes } from './tarefas-routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TarefasComponent, NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TarefaRoutes),
  ]
})
export class TarefasModule { }
