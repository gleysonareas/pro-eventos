import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { EventoService } from "../../services/evento.service";
import { IEvento } from "../../../../shared/interfaces/evento.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'pe-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  private _filterList: string = "";
  private modalRef: BsModalRef = new BsModalRef();

  public eventos: IEvento[] = [];
  public eventosFiltrados: IEvento[] = [];
  public widthImg: number = 120;
  public marginImg: number = 2;
  public showImage: boolean = true;
  public eventoId!: number

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
    private spinnerService: NgxSpinnerService,
    private router: Router
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

  public openModal(event: any, template: TemplateRef<any>, eventoId: number) {
    event.stopPropagation();
    this.eventoId = eventoId
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public confirm(): void {
    this.spinnerService.show();
    this.eventoService.deleteEvento(this.eventoId).subscribe({
      next: (resp: any) => {
        this.toastrService.success('Seu evento foi deletado com sucesso!', 'Deletado!')
      },
      error: (err: any) => {
        console.log(err)
        this.toastrService.error('Houve um erro ao deletar o evento', 'Erro!')
        this.modalRef.hide();
        this.spinnerService.hide();
      },
      complete: () => {
        this.modalRef.hide();
        this.spinnerService.hide();
        this.getEventos()
      }
    })
  }

  public decline(): void {
    this.modalRef.hide();
  }

  public detalheEvento(id: number): void {
    this.router.navigate([`/eventos/detalhe/${id}`]);
  }
}
