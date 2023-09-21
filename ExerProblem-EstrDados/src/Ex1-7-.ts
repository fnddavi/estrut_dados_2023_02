import { promptsync } from "./Ex1-7";

const inUser: string | null = prompt(
  "Digite uma opção (1 para DUVIDAS, 2 para RECLAMAÇõES, 3 para SAIR"
);

switch (inUser) {
  case "1":
    console.log("DUVIDAS");
    break;

  case "2":
    console.log(
      "Suas dúvidas devem ser encaminhadas para o email duvidas@email.com"
    );
    break;

  case "3":
    console.log("SAIR");
    break;
}
