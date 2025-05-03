import { IEvento } from "./evento.interface"
import { IPalestrante } from "./palestrante.interface"

export interface IPalestranteEvento {
  palestranteId: number
  palestrante: IPalestrante
  eventoId: number
  evento: IEvento
}