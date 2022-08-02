import { LightningElement } from "lwc";

export default class App extends LightningElement {
  nome = {
    primeiroNome: 'Paulo',
    sobrenome: 'Silva'
  }
  idade = 30;
  email = 'example@email.com';
  classificacao = 'Hot';
  empresa = 'Gorilla Company';
  receitaAnual = 500000;
}
