import { ILote } from "./lote.interface";
import { IPalestranteEvento } from "./palestrante-evento.interface";
import { IRedeSocial } from "./rede-social.interface";

export interface IEvento {
  id: number;
  local: string
  dataEvento?: Date
  tema: string
  qtdPessoas: number
  lote: string
  imageUrl: string
  telefone: string
  email: string
  lotes: ILote[]
  redesSociais: IRedeSocial[]
  palestrantesEventos: IPalestranteEvento[]
}
