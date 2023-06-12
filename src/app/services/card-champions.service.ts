import { champion } from 'src/app/models/responses/champion';
import { championObject, data } from '../models/responses/champion-object';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardChampionsService extends BaseService {

  constructor(http: HttpClient) { super(http) }

  // getAll<championObject>(url: string): Observable<championObject> {
  //   return this.getData<championObject>(`${url}`);
  // }

  public getImageUrl(): string {
    return this.urlImage;
  }

  public getChampions(url: string): Observable<champion[]> {
    return this.getData<championObject>(url).pipe(map(data => this.filterChampionsRequest(data)));
  }

  private filterChampionsRequest(championObject: championObject): champion[] {
    const response: data = championObject.data;
    let champions: champion[] = [];

    for (const championName in response) {
      if (response.hasOwnProperty(championName)) {
        const champion: champion = response[championName];
        champions.push(champion);
      }
    }

    return champions;
  }
}