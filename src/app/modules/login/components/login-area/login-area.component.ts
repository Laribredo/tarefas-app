import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { SET_TOKEN, SET_USUARIO } from 'src/app/shared/constants/funcoes';
import { Permissoes } from 'src/app/shared/Enum/permissoes.enum';
import { Usuario } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.css']
})
export class LoginAreaComponent implements OnInit {

  constructor(private service: LoginService, private route : Router) { }

  mensagem:string = "";

  login:FormGroup = new FormGroup({
    login: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
  }

  OnSubmit():void{
    if(this.login.valid)
    {
      this.service.Login(this.login.value).subscribe((res) =>{
        let user:Usuario = res.usuario
        SET_TOKEN(res.token_);
        SET_USUARIO(user);
        if(user.permissao == Permissoes.Administrador)
        {
          this.route.navigate(['/tarefa-adm/cadastro-usuario'])
        }else{
          this.route.navigate(['/tarefa/consulta-tarefas'])
        }


      },err => {
        if(err.status == 404)
        {
          this.mensagem = "Usuario ou senha inválidos."
        }

      })

    }

  }

}
