import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pedido } from '../shared/pedido.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public f!: NgForm

  public idPedidoCompra!: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.f.value.endereco,
      this.f.value.numero,
      this.f.value.complemento,
      this.f.value.formaPagamento,
    );
    this.ordemCompraService.efetivarCompra(pedido).subscribe((idPedido: number) => this.idPedidoCompra = idPedido);

  }

  public onSubmit(): void {

  }
}
