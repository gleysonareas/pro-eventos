import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { EventoService } from "../../core/services/evento.service";
import { IEvento } from "../../shared/interfaces/evento.interface";

@Component({
  selector: 'pe-eventos',
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss']
})
export class Eventos implements OnInit {

  private _filterList: string = "";
  private modalRef: BsModalRef = new BsModalRef();

  public eventos: IEvento[] = [];
  public eventosFiltrados: IEvento[] = [];
  public widthImg: number = 120;
  public marginImg: number = 2;
  public showImage: boolean = true;

  public get filterList(): string {
    return this._filterList;
  }
  public set filterList(value: string) {
    this._filterList = value;
    this.eventosFiltrados = this._filterList ? this.filterEvents(this._filterList) : this.eventos;
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastrService: ToastrService,
    private spinnerService: NgxSpinnerService
  ) { }

  public ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.eventoService.getAllEventos().subscribe({
      next: (resp: IEvento[]) => {
        this.spinnerService.show();
        this.eventos = resp;
        this.eventosFiltrados = this.eventos;
      },
      error: (err: any) => {
        this.spinnerService.hide();
        this.toastrService.error('Erro ao carregar os eventos!', 'Erro!')
        console.log(err)
      },
      complete: () => {
        this.spinnerService.hide();
      }
    });




  }

  public changeImage(): void {
    this.showImage = !this.showImage;
  }

  public filterEvents(filterThis: string): IEvento[] {
    filterThis = filterThis.toLowerCase();
    return this.eventos.filter(
      (evento: any) =>
        evento.tema.toLowerCase().indexOf(filterThis) !== -1 ||
        evento.local.toLowerCase().indexOf(filterThis) !== -1
    );
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public confirm(): void {
    this.toastrService.success('Seu evento foi deletado com sucesso!', 'Deletado!')
    this.modalRef.hide();
  }

  public decline(): void {
    this.modalRef.hide();
  }
}
