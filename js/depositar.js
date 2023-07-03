import { acoes } from "./acoes.js";

export default function depositar(botaoDeposito,saldo){
    
    botaoDeposito.addEventListener('click', ()=>{    

      acoes.criaCampoAcao(saldo,'Deposito','soma');
       
    })
          
}
