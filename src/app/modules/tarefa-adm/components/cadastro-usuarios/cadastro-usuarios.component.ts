import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioProvider } from 'src/app/core/services/usuario.provider';
import { Usuario } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css'],
})
export class CadastroUsuariosComponent implements OnInit {

  constructor(private service:usuarioProvider) {}

  erros:Array<string> = [];
  aguardar:boolean = false;

  cadastro: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    permissao: new FormControl('0', Validators.required),
  });

  ngOnInit(): void {}

  limpar() {
    this.cadastro = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required),
      permissao: new FormControl('0', Validators.required),
    });
  }

  onSubmit() {
    if(this.cadastro.valid)
    {
      this.aguardar = true;
      let obj:Usuario = new Usuario(this.cadastro.value);
      this.service.cadastrarUsuario(obj).subscribe(res => {
        console.log(res);
        if(!res.cadastrado)
        {
          this.erros = res.erros;
        }
        this.aguardar = false;
      },err =>{
        this.erros.push("Ocorreu um erro ao se comunicar com o servidor, por favor tente novamente.")
        this.aguardar = false;
      })
    }
  }
}
