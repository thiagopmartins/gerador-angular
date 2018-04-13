import { Injectable } from "@angular/core";

@Injectable()
export class LojaService {

    private teste: string;

    constructor(

    ) { }

    getTeste(): string {
        return 'Ok';
    }

}