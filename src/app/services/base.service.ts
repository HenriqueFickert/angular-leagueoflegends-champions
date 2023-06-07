import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) { }

  protected getData<T>(url: string): Observable<T> {
    return this.http.get<any>(`${this.urlApi}${url}`)
  }
}