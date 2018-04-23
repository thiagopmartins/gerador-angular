import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-integrador',
  templateUrl: './integrador.component.html',
  styleUrls: ['./integrador.component.css']
})
export class IntegradorComponent implements OnInit {

  integradorForms: FormGroup
  docAuxiliares: boolean = false
  constructor(private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.integradorForms = this.formBuilder.group({
      urlsaida: this.formBuilder.control('', Validators.required),
    })
  }

  onChange(event) {
    var files = event.srcElement.files;
    console.log(files);
  }

  onDocAux(){
    if(this.docAuxiliares) this.docAuxiliares = false
    else
    this.docAuxiliares =  true
    
    console.log('clik')
  }

}
