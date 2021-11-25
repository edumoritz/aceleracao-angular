import { ItemCarrinho } from './../shared/item-carrinho.model';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'pu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: number
  public itensCarrinho!: ItemCarrinho[]

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'complemento': new FormControl(''),
    'numero': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'formaPagamento': new FormControl('', [Validators.required]),
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco')?.markAsTouched()
      this.formulario.get('numero')?.markAsTouched()
      this.formulario.get('complemento')?.markAsTouched()
      this.formulario.get('formaPagamento')?.markAsTouched()
    } else {

      if (!this.carrinhoService.exibirItens().length) {
        alert('Você não selecionou nenhum item...')

        return
      }

      let pedido: Pedido = new Pedido(
        this.formulario.get('endereco')?.value,
        this.formulario.get('numero')?.value,
        this.formulario.get('complemento')?.value,
        this.formulario.get('formaPagamento')?.value,
        this.carrinhoService.exibirItens()
      );

      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido
        this.carrinhoService.limparCarrinho()
      })


      this.formulario.reset()
    }

  }

  public totalValor(): number {
    let total: number = 0

    this.itensCarrinho.map(item => total += item.valor * item.quantidade)

    return total
  }

  public calculaQuantidade(item: ItemCarrinho, operador: string): void {
    // if (operador === 'subtracao' && item.quantidade === 1) return

    this.carrinhoService.calculaQuantidade(item, operador);

  }

  public quantidadeItens(): number {
    return this.carrinhoService.exibirItens().length
  }

}
