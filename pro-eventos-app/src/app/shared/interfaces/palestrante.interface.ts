import { IPalestranteEvento } from "./palestrante-evento.interface"
import { IRedeSocial } from "./rede-social.interface"

export interface IPalestrante {
  id: number
  nome: string
  miniCurriculo: string
  imagemURL: string
  telefone: string
  email: string
  redesSociais: IRedeSocial[]
  palestrantesEventos: IPalestranteEvento[]
}