let permiteAcao = true;
const localDaCriacaoDoCampoDosInputs = document.querySelector('[data-cria-inputs]');

function criaCampoAcao(saldo,acao,operacao){

   if(permiteAcao){

        permiteAcao = false;
        
        const divPaiInputBtn = document.createElement('div');
        divPaiInputBtn.classList = 'carteira_inputs';

        const inputValor = criaInput(acao);

        const btnConfirma = criaBtn(saldo,inputValor,acao,operacao);

        divPaiInputBtn.append(inputValor,btnConfirma)
        localDaCriacaoDoCampoDosInputs.append(divPaiInputBtn);
    }

}

function criaInput(acao){

    const inputValor = document.createElement('input');
    inputValor.placeholder = `Informe o valor da ${acao}`;
    inputValor.classList.add('input_valor')

    return inputValor;
}

function criaBtn(saldo,valorInput,acao,operacao){
    
    const btnConfirma = document.createElement('button');
    btnConfirma.innerText = `Confirmar ${acao}`;
    btnConfirma.classList.add('btn_confirma');

    btnConfirma.addEventListener('click',function(){

            if(operacao=='soma' && valorInput.value!=''){

                depositou(saldo,valorInput);
    
                deletaElemento(this.parentNode);
                    
    
            }else if(operacao =='subtrair' && valorInput.value!=''){

                if(Number(saldo.innerText)>= Number(valorInput.value) && valorInput.value!=''){

                    sacou(saldo,valorInput);

                    deletaElemento(this.parentNode);

                }else{

                    alert('O valor do saque é maior que o valor do saldo em conta');
                    valorInput.value = '';
                }
                
            }else if(valorInput.value == '' || operacao!='soma' || operacao!= 'subtrair'){

                alert('Insira um valor');
             
            }                
    })

    return btnConfirma;
}

function depositou(saldo,valor){

    const saldoAcao = (Number(saldo.innerText) + Number(valor.value)).toFixed(2);
    saldo.innerText =  saldoAcao;
    localStorage.setItem('saldo',JSON.stringify(saldoAcao));
    permiteAcao = true;
     
}

function sacou(saldo,valor){

    const saldoAcao = (Number(saldo.innerText) - Number(valor.value)).toFixed(2);
    saldo.innerText =  saldoAcao;
    localStorage.setItem('saldo',JSON.stringify(saldoAcao));
    permiteAcao = true;
    
}

function deletaElemento(tag){
    
    tag.remove();
}

export const acoes = {

    criaCampoAcao,
}