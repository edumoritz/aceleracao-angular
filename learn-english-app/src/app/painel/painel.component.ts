import { Frase } from './../shared/frase.model';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza a frase: ';

  public frases: Frase[] = FRASES;

  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase!: Frase;
  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
   }


  ngOnDestroy(): void {
    console.log('componente painel foi destruido!');
  }

  ngOnInit(): void {

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() {

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      this.progresso = this.progresso + (100 / this.frases.length);

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitória');
      }

      this.atualizaRodada();

    } else {

      this.tentativas -= 1;

      if (this.tentativas === 0) {
        this.encerrarJogo.emit('derrota');
      }

    }


  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];

    this.resposta = '';
  }

}
