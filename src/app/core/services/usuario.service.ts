import { Injectable } from '@angular/core';
import { Observable, throwError, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, retry, take, map, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/models/Usuario';
import { API_URL } from 'src/app/shared/constants/variaveis';
import { ResponseCadastroDTO } from 'src/app/shared/DTO/response-cadastro-dto';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  isLogged(): Observable<boolean> {
    return this.http
      .get<any>(API_URL + 'Login')
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }


  cadastrarUsuario(usuario: Usuario): Observable<ResponseCadastroDTO> {
    return this.http.post<any>(API_URL + 'Usuarios', usuario).pipe(
      retry(3),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
