import { Injectable } from "@angular/core";
import { ElectronService } from "./electron.service";

@Injectable()
export class DocumentSender {
    
    constructor(
        private electron: ElectronService
    ){ }

    create(path: string, content: string) {

        if(this.electron.isElectron()){
            this.electron.fs.appendFileSync(path, content);        
        }

    }
    getContent(path: string): string{
        return this.electron.fs.readFileSync(path).toString();
    }

}