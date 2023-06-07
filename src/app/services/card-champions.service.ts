import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CardChampionsService extends BaseService {

  constructor(http: HttpClient) { super(http) }

  getAll<obj>(url: string): Observable<obj> {
    return this.getData<obj>(`${url}`);
  }

  // Padrão
  // getAll<obj>(url: string) : Observable<obj> {
  //   return this.http.get<obj>(`${this.urlApi}${url}`);
  // }  

  // Generico
  // public getAll<T>(url: string): Observable<T> {
  //     return this.http.get<T>(`${this.urlApi}${url}`)}
}
