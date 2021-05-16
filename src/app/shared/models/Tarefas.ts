export class Tarefas {
  public id?:any;
  public titulo:string;
  public conteudo:string;
  public DtCriacao:Date;
  public fixado?:boolean;
  public dtFixado?:Date;
  public feito?:boolean;

  constructor(init?: Partial<Tarefas>){
    Object.assign(this, init);
  }
}
