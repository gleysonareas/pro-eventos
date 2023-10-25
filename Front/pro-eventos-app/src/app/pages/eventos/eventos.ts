import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pe-eventos',
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss']
})
export class Eventos implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  public widthImg: number = 150;
  public marginImg: number = 2;
  public showImage: boolean = true;
  private _filterList: string = "";

  public get filterList(): string {
    return this._filterList;
  }
  public set filterList(value: string) {
    this._filterList = value;
    this.eventosFiltrados = this._filterList ? this.filterEvents(this._filterList) : this.eventos;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get("https://localhost:44384/api/evento").subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );
  }

  public changeImage(): void {
    this.showImage = !this.showImage;
  }

  public filterEvents(filterThis: string): any {
    filterThis = filterThis.toLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLowerCase().indexOf(filterThis) !== -1,
    );
  }

}
