import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class POSComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Cadastro POS';
  }

}
