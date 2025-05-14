import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { ActivatedRoute } from "@angular/router";
import { EventoForm } from "../../forms/evento.form";
import { EventoService } from "../../services/evento.service";
import { IEvento } from "../../../../shared/interfaces/evento.interface";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'pe-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  public eventoForm!: FormGroup
  public evento: IEvento = <IEvento>{}
  public eventMode = 'postEvento'

  get form(): any {
    return this.eventoForm.controls;
  }

  get bsConfig() {
    return {
      isAnimated: true,
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      containerClass: 'theme-default',
      showWeekNumbers: false
    };
  }

  constructor(
    private formBuilder: FormBuilder,
    private localeService: BsLocaleService,
    private activatedRouter: ActivatedRoute,
    private eventoService: EventoService,
    private spinnerService: NgxSpinnerService,
    private toastrService: ToastrService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validatorForm();
    this.loadEvent();
  }

  loadEvent() {
    const eventoIdParam = this.activatedRouter.snapshot.paramMap.get('id')
    if (eventoIdParam) {
      this.eventMode = 'putEvento'
      this.spinnerService.show()
      this.eventoService.getEventoById(+eventoIdParam).subscribe({
        next: (resp: IEvento) => {
          this.evento = { ...resp }
          this.eventoForm.patchValue(this.evento)
        },
        error: (err: any) => {
          this.spinnerService.hide()
          this.toastrService.error('Erro ao tentar carregar evento!', 'Error!')
          console.log(err)
        },
        complete: () => { this.spinnerService.hide() }
      })
    }
  }

  validatorForm() {
    this.eventoForm = this.formBuilder.group(EventoForm)
  }

  resetForm() {
    this.eventoForm.reset()
  }

  saveChanges() {
    this.spinnerService.show()
    if (this.eventoForm.valid) {
      this.evento = this.eventMode === 'postEvento' ?
        { ...this.eventoForm.value } :
        { id: this.evento.id, ...this.eventoForm.value }

      this.eventoService[this.eventMode](this.evento).subscribe({
        next: (resp: any) => {
          this.toastrService.success('Seu evento foi salvo com sucesso!', 'Sucesso!')
        },
        error: (err: any) => {
          this.toastrService.error('Houve um erro ao salvar seu evento!', 'Erro!')
        },

      }).add(() => this.spinnerService.hide())

      // Legacy methods
      // if (this.eventMode === 'postEvento') {
      //   this.evento = { ...this.eventoForm.value }
      //   this.eventoService.postEvento(this.evento).subscribe({
      //     next: (resp: any) => {
      //       this.toastrService.success('Seu evento foi salvo com sucesso!', 'Sucesso!')
      //     },
      //     error: (err: any) => {
      //       this.toastrService.error('Houve um erro ao salvar seu evento!', 'Erro!')
      //       this.spinnerService.hide()
      //     },
      //     complete: () => {
      //       this.spinnerService.hide()
      //     }
      //   })
      // } else {
      //   this.evento = { id: this.evento.id, ...this.eventoForm.value }
      //   this.eventoService.putEvento(this.evento).subscribe({
      //     next: (resp: any) => {
      //       this.toastrService.success('Seu evento foi salvo com sucesso!', 'Sucesso!')
      //     },
      //     error: (err: any) => {
      //       this.toastrService.error('Houve um erro ao salvar seu evento!', 'Erro!')
      //       this.spinnerService.hide()
      //     },
      //     complete: () => {
      //       this.spinnerService.hide()
      //     }
      //   })
      // }
    }
  }

}
