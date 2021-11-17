import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';

import { OfertasService } from './../ofertas.service';

@Component({
  selector: 'pu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[];

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertas().then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    }).catch((valor: { codigo_erro: number, mensagem: string }) => {
      console.log(valor);

    });
  }



}
