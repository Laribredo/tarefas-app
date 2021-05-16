import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { TarefasService } from 'src/app/core/services/tarefas.service';
import { Tarefas } from '../../models/tarefas';

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css'],
})
export class CadastroTarefasComponent implements OnChanges {
  constructor(private service: TarefasService) {}

  cadastro: FormGroup = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl(null, Validators.required),
    conteudo: new FormControl(null, Validators.required),
    dtCriacao: new FormControl(new Date().toISOString().slice(0, 10)),
    dtFixado: new FormControl(null),
    feito: new FormControl(null),
    fixado: new FormControl(null),
  });

  @Output() resposta = new EventEmitter();
  @Input() editar: Tarefas;

  editando: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.editar);

    if (!changes.editar.firstChange) {
      this.cadastro.setValue(changes.editar.currentValue);
      this.editando = true;
    }
  }

  limparForm() {
    this.editando = false;
    this.cadastro = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl(null, Validators.required),
      conteudo: new FormControl(null, Validators.required),
      dtCriacao: new FormControl(new Date().toISOString().slice(0, 10)),
      dtFixado: new FormControl(null),
      feito: new FormControl(null),
      fixado: new FormControl(null),
    });
  }

  onSubmit(): void {
    if (this.editando) {
      this.service.alterarTarefa(this.cadastro.value).subscribe(
        (res) => {
          if (res) {
            alert('Tarefa alterada.');
            this.resposta.emit('true');
            this.limparForm();
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.service.cadastrarTarefa(this.cadastro.value).subscribe(
        (res) => {
          if (res.cadastrado) {
            alert('Tarefa cadastrada.');
            this.resposta.emit('true');
            this.limparForm();
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
