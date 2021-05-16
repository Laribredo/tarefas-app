import { Observable, throwError, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, retry, take, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/constants/variaveis';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(obj): Observable<any> {
    return this.http.post<any>(API_URL + 'Login', obj).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
