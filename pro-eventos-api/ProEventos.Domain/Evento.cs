using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProEventos.Domain
{
    //[Table("EventosDetalhes")] Pode haver casos em que � necess�rio mudar o nome de mapeamento da tabela
    public class Evento
    {
        //[Key] A depender da forma de trabalho pode ser necess�rio definir qual prop � a key da tabela
        public int Id { get; set; }
        public string Local { get; set; }
        public DateTime? DataEvento { get; set; }

        //[NotMapped] Esse Campo n�o ser� mapeado
        //public int ContagemDias { get; set; }

        //[Required]
        //[MaxLength(100)]
        public string Tema { get; set; }
        public int QtdPessoas { get; set; }
        public string ImageUrl { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        //public string Lote { get; set; }
        public IEnumerable<Lote> Lotes { get; set; }
        public IEnumerable<RedeSocial> RedesSociais { get; set; }
        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }

    }
}