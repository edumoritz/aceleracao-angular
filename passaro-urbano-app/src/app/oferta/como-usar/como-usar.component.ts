import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(+parametros.id).then((descricao: any) => {
        this.comoUsar = descricao

      })
    })

    // this.ofertasService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
    //   .then((descricao: any) => {
    //     this.comoUsar = descricao
    // })
  }

}
