export class Cliente {
  nome: string;
  idade: number;
  salario: number;
  cadastro: Date;

  
  constructor(nome: string, idade: number, salario: number, cadastro: Date) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.cadastro = cadastro;
  }
}