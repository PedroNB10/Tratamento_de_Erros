const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

function clickButton() {
    arquivo = document.getElementById("inputfile");

    console.log(arquivo.files)
    var fr = new FileReader();

    try { //testa esse trecho de codigo, senáo der certo 
        fr.readAsText(arquivo.files[0]); // se quebrar essa linha de codigo ele não vai executar o que está depois dele

        fr.onload = function () {
            var info = fr.result;
            console.log(`Informação do arquivo: ${info}`)
            document.getElementById('output').textContent = fr.result;
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


