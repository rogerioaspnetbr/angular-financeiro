import { InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories = [
      {id: 1, name: "Lazer", description: "cinema, praia, etc."},
      {id: 2, name: "Saúde", description: "Plano de saúde"},
      {id: 3, name: "Salário", description: "Pagamentos de Contas"},
      {id: 4, name: "Freelas", description: "trabalhos com freelancer"}
    ];

    return {categories}
  }
}
