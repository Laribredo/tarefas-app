import { Permissoes } from "../Enum/permissoes.enum";

export class Usuario{
    public id:any;
    public nome:string;
    public email:string;
    public senha:string;
    public permissao:Permissoes

    constructor(init?: Partial<Usuario>){
      Object.assign(this, init);
    }
}
