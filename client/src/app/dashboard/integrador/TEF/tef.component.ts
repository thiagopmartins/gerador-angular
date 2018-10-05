import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tef',
  templateUrl: './tef.component.html',
  styleUrls: ['./tef.component.css']
})
export class TEFComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Cadastro TEF';
  }


}
