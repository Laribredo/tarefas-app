import { Observable, throwError, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, retry, take, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/constants/variaveis';
import { Tarefas } from 'src/app/shared/models/tarefas';
import { ResponseCadastroDTO } from 'src/app/shared/DTO/response-cadastro-dto';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }

  cadastrarTarefa(tarefa: Tarefas): Observable<ResponseCadastroDTO> {
    return this.http.post<any>(API_URL + 'Tarefas', tarefa).pipe(
      retry(3),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  alterarTarefa(tarefa: Tarefas): Observable<boolean> {
    return this.http.put<any>(API_URL + 'Tarefas', tarefa).pipe(
      retry(3),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  buscarTarefas(): Observable<Array<Tarefas>> {
    return this.http.get<any>(API_URL + 'Tarefas').pipe(
      retry(3),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  buscarTarefaById(id:string): Observable<Tarefas> {
    return this.http.get<any>(API_URL + 'Tarefas/'+id).pipe(
      retry(3),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  removerTarefaById(id:string): Observable<boolean> {
    console.log(id);
    return this.http.delete<any>(API_URL + 'Tarefas/'+id).pipe(
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
