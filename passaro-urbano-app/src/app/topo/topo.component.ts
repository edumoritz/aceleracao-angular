import { Observable, of, Subject } from 'rxjs';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'pu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((termo: string) => {

        if (termo.trim() === '') {
          return of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      }))
      .pipe(catchError((error: any) => {
        console.log(error);
        return of<Oferta[]>()
      }))
  }

  pesquisa(termodaBusca: string): void {

    this.subjectPesquisa.next(termodaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
