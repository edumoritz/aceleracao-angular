import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas!: Oferta[];

  constructor(private oferasService: OfertasService) { }

  ngOnInit(): void {
    this.oferasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas);

        this.ofertas = ofertas;

      })
  }

}
