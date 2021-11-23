import { map } from 'rxjs/operators';
import { PATH } from './app.api';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) {}


  public efetivarCompra(pedido: Pedido): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders()

    headers.append('Content-type', 'application/json')

    return this.http.post(
      `${PATH.PEDIDOS}`,
       pedido,
       { headers: headers }
  )
    .pipe(map((resposta: any) => resposta.id))
 }
}
