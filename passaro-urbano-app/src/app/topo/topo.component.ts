import { Observable } from 'rxjs';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  pesquisa(termodaBusca: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termodaBusca)

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status: ', erro.status),
      () => console.log('Fluxo de eventos completo')
    );

  }

}
