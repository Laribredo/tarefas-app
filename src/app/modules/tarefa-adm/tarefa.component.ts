import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GET_PERMISSAO } from 'src/app/shared/constants/variaveis';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    //REDIRECIONANDO PELA PERMISSAO DO USUÁRIO
    if(GET_PERMISSAO == "1")
    {
      this.route.navigate(['/tarefa/consulta-tarefas'])
    }

  }

}
