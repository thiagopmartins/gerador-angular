import { Component, OnInit } from '@angular/core';
import { LojaService } from './loja.service';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  
  private teste: string;
  constructor( private lojaService: LojaService ) { }

  ngOnInit() {
    console.log('Iniciando')
    this.teste = this.lojaService.getTeste();
  }

}
