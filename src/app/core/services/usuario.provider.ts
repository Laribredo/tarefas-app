import { Injectable } from '@angular/core';
import { Observable, throwError, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, retry, take, map, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/models/Usuario';
import { API_URL } from 'src/app/shared/constants/variaveis';

@Injectable()
export class usuarioProvider {
  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: Usuario): Observable<any> {
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
