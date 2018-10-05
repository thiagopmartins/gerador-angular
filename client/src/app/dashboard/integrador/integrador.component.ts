import { Router } from '@angular/router';
import { IntegradorService } from './integrador.service';
import { IntegradorModel } from './IntegradorModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-integrador',
  templateUrl: './integrador.component.html',
  styleUrls: ['./integrador.component.css']
})
export class IntegradorComponent implements OnInit, OnDestroy {

  form: FormGroup;
  integrador: IntegradorModel;

  constructor(
    private fb: FormBuilder,
    private electron: ElectronService,
    private integradorService: IntegradorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nomenclatura: [],
      caminho: ['Nenhum arquivo selecionado.', /*Validators.required*/],
      destino: ['Nenhum arquivo selecionado.', /*Validators.compose([Validators.required, Validators.pattern(/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}/)])*/],
      tipo: ['', /*Validators.compose([Validators.required, Validators.pattern(/\d+/)])*/]
    }); 
    this.integrador = this.integradorService.load();
    this.form.patchValue(this.integrador);
    console.log(this.integrador);
    this.router.navigate([`dashboard/integrador/${this.integrador.tipo}`.toLowerCase()]);
  }

  ngOnDestroy() {
    this.integrador = this.form.value;
    this.integradorService.save(this.integrador);
  }


  onChange(event) {
    if(this.electron.isElectron()){
      let key = event.srcElement.id;
      this.integrador[`${key}`] = event.srcElement.files[0].path;
      this.form.controls[key].setValue(this.integrador[`${key}`]);  
    }
    else{
      this.form.controls['path'].setValue(event.srcElement.files[0].name);
      console.warn('Para ter acesso a todas funcionalidades, utilize nativamente a ferramenta.');
    }
    
  }
}
