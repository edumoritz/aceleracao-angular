import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

  transform(texto: string, param: number, iniciarEm: number): string {

    if (texto.length > param) {
      return texto.substr(iniciarEm, param) + '...';
    }

    return texto;

  }

}
