import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ElectronService } from 'app/providers/electron.service';
import { Router } from '@angular/router';
import { DocumentSender } from 'app/providers/document.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  form: FormGroup;

  rps: any[];

  constructor(
    private document: DocumentSender,
    private fb: FormBuilder,
    private electron: ElectronService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nomenclatura: [],
      caminho: ['Nenhum arquivo selecionado.', /*Validators.required*/],
      destino: ['Nenhum arquivo selecionado.', /*Validators.compose([Validators.required, Validators.pattern(/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}/)])*/],
      tipo: ['', /*Validators.compose([Validators.required, Validators.pattern(/\d+/)])*/]
    }); 
  }
  onChange(event) {
    if(this.electron.isElectron()){
      let key = event.srcElement.id;
      //this.rps[`${key}`] = event.srcElement.files[0].path;
      this.form.controls[key].setValue(event.srcElement.files[0].path); 
      //console.log(this.document.getContent(event.srcElement.files[0].path));
      
    }
    else{
      this.form.controls['caminho'].setValue(event.srcElement.files[0].name);
      console.warn('Para ter acesso a todas funcionalidades, utilize nativamente a ferramenta.');
    }
    
  }
  submit(){
    let content = this.document.getContent(this.form.controls['caminho'].value);
    this.document.create(`${this.form.controls['destino'].value}//teste.txt`, content);
  }
}
