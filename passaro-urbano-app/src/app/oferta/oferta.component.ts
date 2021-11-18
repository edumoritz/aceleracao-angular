import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta


  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) {
  }

  ngOnInit(): void {
    // this.route.snapshot.params['id']

    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id']).then((resposta: Oferta)=> {
      this.oferta = resposta

      console.log(resposta);

    })

    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // })
  }

}
