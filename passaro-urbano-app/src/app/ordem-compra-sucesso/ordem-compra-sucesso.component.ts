import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pu-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() idPedido!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
