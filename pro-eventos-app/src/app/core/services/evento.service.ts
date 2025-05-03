import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IEvento } from "../../shared/interfaces/evento.interface";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private baseUrl: string = "https://localhost:44384/api/evento";

  constructor(private http: HttpClient) { }

  public getAllEventos(): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(this.baseUrl);
  }

  public getEventosByTema(tema: string): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(`${this.baseUrl}/${tema}`);
  }

  public getEventoById(id: number): Observable<IEvento> {
    return this.http.get<IEvento>(`${this.baseUrl}/${id}`);
  }

}
