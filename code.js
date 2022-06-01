const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

function clickButton() {
    arquivo = document.getElementById("inputfile");

    console.log(arquivo.files)
    var fr = new FileReader();
    var info 

    //THROW é uma forma de tratamento específico quando o erro é conhecido.

    try { //testa esse trecho de codigo, senáo der certo 

        if ((arquivo.files[0]) == null) {
            throw "/* ¯\_(ツ)_/¯ */ " //Essa informação vai para o parâmetro do catch, É uma forma de tratar um erro conhecido
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


