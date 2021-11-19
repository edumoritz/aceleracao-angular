import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable, interval, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'pu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription!: Subscription;
  // private meuObservableTestSubscription!: Subscription;

  // private listaSubscription: Subscription[] = [];

  public oferta!: Oferta


  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) {
  }

  ngOnDestroy(): void {
    // this.tempoObservableSubscription.unsubscribe();

    // this.meuObservableTestSubscription.unsubscribe();

    // this.listaSubscription.map(subscription => subscription.unsubscribe())
  }

  ngOnInit(): void {
    // this.route.snapshot.params['id']

    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id']).then((resposta: Oferta)=> {
      this.oferta = resposta

      console.log(resposta);
    });

    // observable
    // let meuObservableTest = new Observable((observer: Observer<number>) => {
    //   observer.next(1)
    //   observer.next(2)
    //   observer.next(3)
    //   observer.complete()
    //   // observer.error('algum erro foi encontrado na stream de eventos')
    //   observer.next(4)
    // })


    // let tempo = interval(2000)

    // this.listaSubscription.push(tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // }))


    // observable
    // this.listaSubscription.push(meuObservableTest.subscribe(
    //   (resultado: any) => console.log(resultado + 10),
    //   (erro: string) => console.log(erro),
    //   () => console.log('Stream de eventos foi finalizada')
    // ))


    // this.route.params.subscribe(
    //   (parametro: any) => console.log(parametro),
    //   (erro: any) => console.log(erro),
    //   () => console.log('processamento foi classificado como concluido')
    // );

    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // })
  }



}
