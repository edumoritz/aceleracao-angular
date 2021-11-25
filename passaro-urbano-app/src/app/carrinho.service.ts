import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from "./shared/item-carrinho.model";

export class CarrinhoService {
  public itens: ItemCarrinho[] = []

  public exibirItens(): ItemCarrinho[] {
    return this.itens
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {

      itemCarrinho.quantidade += 1;
    } else {

      this.itens.push(itemCarrinho)
    }

  }

  public calculaQuantidade(itemCarrinho: ItemCarrinho, operador: string): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (!itemCarrinhoEncontrado) return;

    switch (operador) {
      case 'soma':
        itemCarrinhoEncontrado.quantidade += 1
        break;
      case 'subtracao':
        itemCarrinhoEncontrado.quantidade -= 1

        if(itemCarrinhoEncontrado.quantidade === 0) {
          this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
        }
      break;
    }
  }

  public limparCarrinho(): void {
    this.itens = [];
  }
}
