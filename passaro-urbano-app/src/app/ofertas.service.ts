import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable() // permite que o httpclient seja injetado
export class OfertasService {

  private url = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) {}


  public getOfertas(): Promise<Array<Oferta>> {

    return this.http.get(`${this.url}?destaque=true`).toPromise()
      .then((resposta: any) => resposta)


  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.url}?categoria=${categoria}`)
    .toPromise().then((resposta: any) => resposta);
  }

}
