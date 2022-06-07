const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", CliqueBotaoArquivo);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", CliqueBotaoNumber);

function CliqueBotaoArquivo() {
    arquivo = document.getElementById("inputfile");

   
    var fr = new FileReader();
    var info 

    //THROW é uma forma de tratamento específico quando o erro é conhecido.

    try { //testa esse trecho de codigo, senáo der certo 

        if ((arquivo.files[0]) == null) {
            throw "Arquivo não encontrado!" //Essa informação vai para o parâmetro do catch, É uma forma de tratar um erro conhecido
        }

        fr.readAsText(arquivo.files[0]); // se quebrar essa linha de codigo ele não vai executar o que está depois dele

        fr.onload = function () {
             info = fr.result;

            console.log(`Informação do arquivo: ${info}`)
            document.getElementById('output').textContent = fr.result;

            if (info == "") { // vai aparecer isso primeiro por conta da ordem de execuão do pc. 
                throw `Não foi possível ler o arquivo selecionado`
            }
           

        }

        

    }

    catch (error) { // não conseguiu ler o arquivo (tentou executar o try dai foi pro catch)

        console.log(error)
        alert("Arquivo não localizado!")
        document.getElementById('output').textContent = "Arquivo não localizado";
    }

    finally {//Sempre faz independente o que aconteça!
        alert("Obrigado pela visita!")
    }


}

function CliqueBotaoNumber(){
    
    document.getElementById("output-number").innerHTML = ``
try {
    
    valor_digitado = document.getElementById("inputnumber")
    valor_verificacao =  Number(valor_digitado.value)

    if(valor_digitado.value == "") throw 'Informe um valor!'
    else if (valor_verificacao <= 5 || valor_verificacao >= 10) throw 'Informe um valor maior que 5 e menor que 10'

}

catch(error){
   
    document.getElementById("output-number").innerHTML = `Erro: ${error}`
    console.log(error)
    
}

finally {
   
    alert(`O valor digitado foi ${valor_digitado.value}`)
}


}

