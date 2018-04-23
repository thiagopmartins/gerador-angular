import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IntegradorService } from './integrador.service';


@Component({
  selector: 'app-integrador',
  templateUrl: './integrador.component.html',
  styleUrls: ['./integrador.component.css']
})
export class IntegradorComponent implements OnInit {

  integradorForms: FormGroup
  docAuxiliares: boolean = false
  typeTEF: boolean = true
  typePOS: boolean 
  file: string

  constructor(private formBuilder: FormBuilder,
              private integradorService: IntegradorService) { }



  ngOnInit() {
    this.integradorForms = this.formBuilder.group({
      urlsaida: this.formBuilder.control('', Validators.required),
      qtdNotas: this.formBuilder.control('', Validators.required),
      qtdPagamentos: this.formBuilder.control(''),
      nomeArquivo: this.formBuilder.control('', Validators.required)
    })
  }

  onChange(event) {
    let reader = new FileReader();
    var files = event.srcElement.files;

    reader.readAsText(files[0]);
      reader.onload = () => {
        this.file = reader.result
      };

     }

  onDocAux(){
    if(this.docAuxiliares) this.docAuxiliares = false
    else
    this.docAuxiliares =  true
    }

    onClickCreateFile(){
     this.integradorService.createEnv(this.integradorForms.controls['qtdNotas'].value,this.file)
    }


  onTypeDocAux(type){
    if(type === 'TEF'){
      this.typeTEF = true
      this.typePOS = false
    }else{
      this.typeTEF = false
      this.typePOS = true
    }
  }  

}
