
import { DialogService } from './../../dialog.service';
import { EmpresaModel } from './EmpresaModel';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {


  empresas: EmpresaModel[];
  empresaSelecionada: EmpresaModel;
  form: FormGroup;

  //empresas$: Observable<EmpresaModel[]>;

  submitLoading: boolean = false;
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
    let _empresas: EmpresaModel[];
    this.form = this.fb.group({
      id: [],
      name: ['', Validators.required],
      cnpj: ['', /*Validators.compose([Validators.required, Validators.pattern(/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}/)])*/],
      ie: ['', /*Validators.compose([Validators.required, Validators.pattern(/\d+/)])*/]
    });
    this.controladores = Object.keys(this.form.controls);
    this.validador();
    this.empresaService.allEnterprises()
      .subscribe(res => {
        _empresas = res;
        this.empresas = _empresas.concat(); //TODO ANALISAR MELHORIA, NECESSÁRIO PARA TER ACESSO COMPLETO AO ARRAY DE EMPRESAS
      });
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
    for (let controlador of this.controladores) {
      this.form.get(`${controlador}`).valueChanges.subscribe(() => {
        if (this.form.get(`${controlador}`).invalid && this.form.get(`${controlador}`))
          (this.form.get(`${controlador}`).errors.required ? this.erro[`${controlador}`] = `O campo ${controlador.toUpperCase()} é obrigatório` : this.erro[`${controlador}`] = `O campo ${controlador.toUpperCase()} está inválido`);
      });
    }
  }
  onSave(): void {
    this.submitLoading = true;
    if (this.editando) {
      this.empresaService.updateEnterprise(this.form.value)
        .subscribe(res => {
          console.log(res);
          if (res.id) {
            for (const index in this.empresas) {
              if (this.empresas[index].id == res.id)
                this.empresas[index] = res;
            }
          }          
          this.basic = false;
          this.empresaSelecionada = null;
          this.submitLoading = false;          
        },
        error => {
          this.submitLoading = false;
          //TODO MELHORAR A TRATATIVA DE ERROS [CRIAR UM SERVIÇO SET ERROR]
          this.form.controls['cnpj'].setErrors({ 'incorrect': true });
          this.erro['cnpj'] = "O CNPJ cadastrado já existe em nosso banco de dados!";
        }
      );
    }
    else {
      this.empresaService.createEnterprise(this.form.value)
        .subscribe(res => {
          if (res.id) {
            this.empresas = this.empresas.concat(res);
            this.basic = false;
            this.empresaSelecionada = null;
            this.submitLoading = false;
          }
        },
          error => {
            this.submitLoading = false;
            //TODO MELHORAR A TRATATIVA DE ERROS [CRIAR UM SERVIÇO SET ERROR]
            this.form.controls['cnpj'].setErrors({ 'incorrect': true });
            this.erro['cnpj'] = "O CNPJ cadastrado já existe em nosso banco de dados!";
          }
        );
    }
  }
  onDelete(): void {
    this.dialogService.confirm(`Deseja deletar a empresa ${this.empresaSelecionada.name} ?`)
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.empresaService.deleteEnterprise({ id: this.empresaSelecionada.id })
            .subscribe(res => {
              if (res.id) {
                for (const index in this.empresas) {
                  if (this.empresas[index].id == res.id)
                    this.empresas.splice(+ index, 1);
                }
              }
            });
        }
      });
  }

  isValidForm(controlador: string): boolean {
    return this.form.get(`${controlador}`).invalid && (this.form.get(`${controlador}`).dirty || this.form.get(`${controlador}`).touched);
  }

}
