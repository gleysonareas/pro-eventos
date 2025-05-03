import { IEvento } from "./evento.interface"
import { IPalestrante } from "./palestrante.interface"

export interface IRedeSocial {
  id: number
  nome: string
  url: string
  eventoId?: number
  evento: IEvento
  palestranteId?: number
  palestrante: IPalestrante
}