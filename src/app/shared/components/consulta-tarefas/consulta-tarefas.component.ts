import { Component, OnInit } from '@angular/core';
import { TarefasService } from 'src/app/core/services/tarefas.service';
import { Tarefas } from '../../models/tarefas';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {

  constructor(private service:TarefasService) { }

  tarefas:Array<Tarefas> = [];
  editar:Tarefas;

  ngOnInit(): void {
    this.getTarefas();
  }


  //TODO - FAZER O FIXAR TAREFAS
  //TODO - SEPARAR POR ORDEM

  MarcarTarefa(indice:number, valor:boolean)
  {
    this.tarefas[indice].feito = valor;
    console.log(this.tarefas[indice]);
    this.service.alterarTarefa(this.tarefas[indice]).subscribe(res =>{
      console.log(res);
    },err =>{
      this.tarefas[indice].feito = !valor;
    })
  }

  getTarefas(){
    this.service.buscarTarefas().subscribe(res =>{
      this.tarefas = res;
      console.log(this.tarefas);

    },err =>{

    })
  }

  editarTarefa(indice:number){
    this.editar = this.tarefas[indice];
  }

  fixarTarefa(indice:number)
  {
    this.tarefas[indice].fixado = true;
    this.tarefas[indice].dtFixado = new Date();
    console.log(this.tarefas[indice]);
    this.service.alterarTarefa(this.tarefas[indice]).subscribe(res =>{
      console.log(res);
    },err =>{
      this.tarefas[indice].fixado = false;
    this.tarefas[indice].dtFixado = null;
    })
  }

  removeTarefas(id:string){
    this.service.removerTarefaById(id).subscribe(res =>{
      if(res)
      {
        alert("Tarefa removida com sucesso.");
        this.getTarefas();
      }else{
        alert("Houve um erro ao remover a tarefa.");
      }
    },err =>{
      alert("Erro ao se conectar com o servidor, favor tentar novamente.");
    })
  }

  consulta($event)
  {
    this.getTarefas();
  }

}
