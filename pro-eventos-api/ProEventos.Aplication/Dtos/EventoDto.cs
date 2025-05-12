using ProEventos.Domain;
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.Net.NetworkInformation;

namespace ProEventos.Aplication.Dtos
{
    public class EventoDto
    {

        public int Id { get; set; }
        public string Local { get; set; }
        public string DataEvento { get; set; }

        [
            Required(ErrorMessage = "O Campo {0} é Obrigatório"),
            //MinLength(3, ErrorMessage = ""),
            //MaxLength(50, ErrorMessage = ""),
            StringLength(50, MinimumLength = 3, ErrorMessage = "O intervalo permitído é entre 3 e 50 caractéres")
        ]
        public string Tema { get; set; }

        [
            Display(Name = "Qtd Pessoas"),
            Required(ErrorMessage = "O campo {0} é de preenchimento obrigatório"),
            Range(1, 120000, ErrorMessage = "{0} não pode ser menor que 1 ou maior que 120.000")
        ]
        public int QtdPessoas { get; set; }
        [
            RegularExpression(@"^[^\s]+\.(jpg|jpeg|png|gif|bmp)$", ErrorMessage = "Não é uma imagem válida"),
        ]
        public string ImageUrl { get; set; }
        [
            Required(ErrorMessage = "O campo {0} é de preenchimento obrigatório"),
            Phone(ErrorMessage = "O campo {0} não possui um valor valído")

        ]
        public string Telefone { get; set; }

        [
            Required(ErrorMessage = "O campo {0} é de preenchimento obrigatório"),
            Display(Name = "e-mail"),
            EmailAddress(ErrorMessage = "É necessário ser um {0} válido")
        ]
        public string Email { get; set; }
        //public string Lote { get; set; }
        public IEnumerable<LoteDto> Lotes { get; set; }
        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }
        public IEnumerable<PalestranteDto> Palestrantes { get; set; }
    }
}
