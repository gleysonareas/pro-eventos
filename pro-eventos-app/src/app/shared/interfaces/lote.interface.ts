import { IEvento } from "./evento.interface"

export interface ILote {
  id: number
  nome: string
  preco: number
  dataInicio?: Date
  dataFim?: Date
  quantidade: number
  eventoId: number
  evento: IEvento
}