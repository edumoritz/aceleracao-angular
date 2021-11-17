import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas!: Oferta[];

  constructor(private oferasService: OfertasService) { }

  ngOnInit(): void {
    this.oferasService.getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas);

        this.ofertas = ofertas;

      })
  }

}
