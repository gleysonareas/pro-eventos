import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { IEvento } from "../../../shared/interfaces/evento.interface";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private baseUrl: string = "https://localhost:44384/api/evento";

  constructor(private http: HttpClient) { }

  public getAllEventos(): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(this.baseUrl)
      .pipe(take(1));
  }

  public getEventosByTema(tema: string): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(`${this.baseUrl}/${tema}`)
      .pipe(take(1));
  }

  public getEventoById(id: number): Observable<IEvento> {
    return this.http.get<IEvento>(`${this.baseUrl}/${id}`)
      .pipe(take(1));
  }

  public postEvento(evento: IEvento): Observable<IEvento> {
    return this.http.post<IEvento>(this.baseUrl, evento)
      .pipe(take(1))
  }

  public putEvento(evento: IEvento): Observable<IEvento> {
    return this.http.put<IEvento>(`${this.baseUrl}/${evento.id}`, evento)
      .pipe(take(1));
  }

  public deleteEvento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .pipe(take(1));
  }
}
