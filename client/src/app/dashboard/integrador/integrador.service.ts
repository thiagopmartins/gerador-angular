import { Injectable } from '@angular/core';
import { DataService } from './../../providers/data.service';
import { IntegradorModel } from './IntegradorModel';



@Injectable()
export class IntegradorService {

    filename: string = 'integrador';
    integrador: IntegradorModel = {};
    
    constructor(
        private data: DataService,
    ){ }

    load(): IntegradorModel {
        console.log('Carregando configurações do integrador.');
        try {
            this.integrador = <IntegradorModel>this.data.load(this.filename); 
        } catch (error) {
            console.error(error);
        }
        return this.integrador;
    }

    save(integrador: IntegradorModel): boolean{
        console.log('Salvando configurações do integrador.');
        return this.data.save(this.filename, JSON.stringify(integrador));
    }
}