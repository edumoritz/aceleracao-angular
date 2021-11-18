import { PATH } from './app.api';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {


  constructor(private http: HttpClient) {}


  public getOfertas(): Promise<Array<Oferta>> {

    return this.http.get(`${PATH.OFERTAS}?destaque=true`).toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${PATH.OFERTAS}?categoria=${categoria}`)
    .toPromise().then((resposta: any) => resposta);
  }

  public getOfertasPorId(id: number): Promise<Oferta> {

    return this.http.get(`${PATH.OFERTAS}?id=${id}`).toPromise()
      .then((resposta: any) => resposta[0])
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {

    return this.http.get(`${PATH.COMO_USAR}?id=${id}`).toPromise()
      .then((resposta: any) => resposta[0].descricao)
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {

    return this.http.get(`${PATH.ONDE_FICA}?id=${id}`).toPromise()
      .then((resposta: any) => resposta[0].descricao)
  }

}
