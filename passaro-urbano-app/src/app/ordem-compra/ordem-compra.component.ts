import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: number = 0
  public complemento: string = ''
  public formaPagamento: string = '';

  // controle de validacao dos campos
  public enderecoValido!: boolean
  public numeroValido!: boolean
  public complementoValido!: boolean
  public formaPagamentoValido!: boolean

  // estado primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(valor: string) {
    this.endereco = valor

    this.validaCampo(this.endereco.length > 3, 'endereco')
  }

  atualizaNumero(valor: number) {
    this.numero = valor

    this.validaCampo(this.numero > 0, 'numero')
  }

  atualizaComplemento(valor: string) {
    this.complemento = valor
    this.complementoEstadoPrimitivo = false

    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
  }

  atualizaFormaPagamento(valor: string) {
    this.formaPagamento = valor

    this.validaCampo(this.formaPagamento !== '', 'formaPagamento')
  }

  public validaCampo(validacao: boolean, campo: string) {
    switch (campo) {
      case 'endereco':
        this.enderecoEstadoPrimitivo = false;
        this.enderecoValido = validacao
        break;
      case 'numero':
        this.numeroEstadoPrimitivo = false
        this.numeroValido = validacao
      break;
      case 'formaPagamento':
        this.formaPagamentoEstadoPrimitivo = false
        this.formaPagamentoValido = validacao
        break;
    }
  }

}
