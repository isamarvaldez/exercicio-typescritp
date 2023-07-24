
import { exercicio33 } from './moduloExercicio33';
import { exercicio34 } from './moduloExercicio34';
import { exercicio35 } from './moduloExercicio35';
import { exercicio36 } from './moduloExercicio36';
import { exercicio37 } from './moduloExcercicio37';
import { exercicio38 } from './moduloexercicio38';

// let prompt = require("prompt-sync")()

import promptSync from 'prompt-sync'
let prompt = promptSync();

let resposta: string;

// Digite o numero do exercicio que você quer exibir, se quiser sair digite sair
do {
    resposta = prompt("Digite o numero do exercicio que você quer exibir, se quiser sair digite 'sair': ")

    switch (resposta) {
        case "1":
            exercicio33()
            break;

            case "2":
            exercicio34()
            break;

            case "3":
            exercicio35()
            break;

            case "4":
            exercicio36()
            break;

            case "5":
            exercicio37()
            break;

            case "6":
            exercicio38()
            break;

        default:
            break;
    }
    
} while (resposta != "sair");

