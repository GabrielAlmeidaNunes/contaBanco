import { acoes } from "./acoes.js";

export default function sacar(botaoSacar,saldoAtual){

    botaoSacar.addEventListener('click', ()=>{
        
        acoes.criaCampoAcao(saldoAtual,'Saque','subtrair');
    })

}