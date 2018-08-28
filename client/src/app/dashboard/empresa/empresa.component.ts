
import { DialogService } from './../../dialog.service';
import { EmpresaModel } from './EmpresaModel';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  
  empresas: EmpresaModel[] = [];
  empresaSelecionada: EmpresaModel;
  form: FormGroup;

  basic: boolean;
  editando: boolean = false;
  controladores: string[] = [];
  erro: string[] = [];

  

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      nomenclatura: ['', Validators.required],
      cnpj: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}/)])],
      ie: ['', Validators.compose([Validators.required, Validators.pattern(/\d+/)])]
    });
    this.controladores = Object.keys(this.form.controls);
    this.validador();
  }
  onCreate(): void {
    this.basic = true;
    this.editando = false;
    if (this.empresaSelecionada) {
      this.empresaSelecionada = null;
    }
    this.form.reset();
    for (let controlador of this.controladores) {
      this.form.controls[`${controlador}`].setValue('');
    }
  }
  onEdit(): void {
    this.editando = true;
    this.basic = true;
    for (let controlador of this.controladores) {
      this.form.controls[`${controlador}`].setValue(this.empresaSelecionada[`${controlador}`]);
    }
  }
  validador(): void {
    for(let controlador of this.controladores){  
      this.form.get(`${controlador}`).valueChanges.subscribe(() => {
        if (this.form.get(`${controlador}`).invalid && this.form.get(`${controlador}`))
          (this.form.get(`${controlador}`).errors.required ? this.erro[`${controlador}`] = `O campo ${controlador.toUpperCase()} é obrigatório` : this.erro[`${controlador}`] = `O campo ${controlador.toUpperCase()} está inválido`);
      });
    }
}
  onSave(): void {
    this.basic = false;
    let empresaId: number;
    if (this.editando)
      empresaId = this.empresaSelecionada.id - 1;
    else
      (this.empresas.length == undefined ? empresaId = 0 : empresaId = this.empresas.length);
    
    this.form.controls["id"].setValue(empresaId + 1);
    this.empresas[`${empresaId}`] = this.form.value;
    this.empresaSelecionada = null;
  }
  onDelete(): void {
    this.dialogService.confirm(`Deseja deletar a empresa ${this.empresaSelecionada.nomenclatura} ?`)
    .then((canDelete: boolean) => {
        if (canDelete) {
          this.empresas.forEach( (item, index) => {
            if(item.id === this.empresaSelecionada.id) this.empresas.splice(index,1);
          });
          this.empresaSelecionada = null;
        }
    });    
  }
  
  isValidForm(controlador: string): boolean{
    return this.form.get(`${controlador}`).invalid && (this.form.get(`${controlador}`).dirty || this.form.get(`${controlador}`).touched);
  }

}
