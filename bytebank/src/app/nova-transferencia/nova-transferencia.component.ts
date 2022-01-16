import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {


  //any deve estar colada ao event retorna um objeto dentro de outro -|-
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service : TransferenciaService , private router: Router){}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir : Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');

    },
    error => console.error(error)

    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0
  }
}
