import { Injectable } from "@angular/core";

@Injectable()
export class EmpresaService {

    private teste: string;

    constructor(

    ) { }

    getTeste(): string {
        return 'Ok';
    }

}