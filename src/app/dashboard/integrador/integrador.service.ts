
export class IntegradorService{

    constructor() { }


    createEnv(qtd: number,file: string){
        for(let i = 0;i<qtd;i++){
           let newFile = file.replace('${nNF}','7548')
            console.log(newFile)    
        }

    }






}