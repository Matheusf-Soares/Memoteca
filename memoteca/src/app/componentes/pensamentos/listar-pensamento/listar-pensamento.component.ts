import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Teste',
      autoria: 'Matheus',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Teste',
      autoria: 'Matheus',
      modelo: 'modelo1'
    },
    {
      conteudo: 'TesteTesteTesteTesteTesteTesteTest eTesteTesteTeste TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste',
      autoria: 'Matheus',
      modelo: 'modelo2'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
