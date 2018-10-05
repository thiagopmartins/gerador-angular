import { ElectronService } from './electron.service';
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    
    path: string;
    constructor(
        private electron: ElectronService
    ){
        this.path = `./data/`;
        if(this.electron.isElectron())
            if(!this.electron.fs.existsSync(this.path)){
                console.log('Criando o diretório DATA.');
                this.electron.fs.mkdirSync(this.path);
            }        
     }

    save(filename: string, content: string): boolean {
        if(this.electron.isElectron()){
            this.electron.fs.writeFileSync(`${this.path}/${filename}.json`, content);
        }
        return this.electron.isElectron();
    }

    load(filename: string): JSON{
        if(this.electron.isElectron()){
            let content = String(this.electron.fs.readFileSync(`${this.path}/${filename}.json`));
            return JSON.parse(content);
        }       
    }

}