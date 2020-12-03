import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:8080/colis';

@Injectable({
  providedIn: 'root'
})
export class ColisService {

  constructor(
    private http: HttpClient,
  ) { }

  getColis(id: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(BASEURL+"/"+id);
  }

}
