import depositar from "./depositar.js";
import sacar from "./sacar.js";

const botaoDeposita = document.querySelector('[data-depositar]');
const botaoSacar = document.querySelector('[data-sacar]');
const saldoAtual = document.querySelector('[data-saldo]');
const jaTemSaldo = JSON.parse(localStorage.getItem('saldo'));

if(jaTemSaldo){

    saldoAtual.innerText = jaTemSaldo;
    
}

depositar(botaoDeposita,saldoAtual);
sacar(botaoSacar,saldoAtual);





   



