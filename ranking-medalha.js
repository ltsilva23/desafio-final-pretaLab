/*
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e 
calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o 
ranking de medalhas de ouro, prata e bronze.

*/

function calcularMedalhas() {
    let paises = [];
    let medalhas = {};
    let totalMedalhas = 0;

    while (true) {
        let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

        if (pais.toLowerCase() === "sair") {
            break;
        }

        let ouro = parseInt(prompt(`Digite o número de medalhas de ouro para ${pais}:`));
        let prata = parseInt(prompt(`Digite o número de medalhas de prata para ${pais}:`));
        let bronze = parseInt(prompt(`Digite o número de medalhas de bronze para ${pais}:`));

        if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
            // Salvar as medalhas de cada país em um objeto
            medalhas[pais] = { ouro, prata, bronze };
            totalMedalhas += (ouro + prata + bronze);
            paises.push(pais);
        } else {
            alert("Por favor, insira valores numéricos válidos para as medalhas.");
        }
    }

    if (paises.length > 0) {
        let mediaMedalhas = totalMedalhas / paises.length;

        let maiorMedalha = 0;
        let menorMedalha = Infinity;
        let paisMaiorMedalha = '';
        let paisMenorMedalha = '';

        paises.forEach((pais) => {
            let total = medalhas[pais].ouro + medalhas[pais].prata + medalhas[pais].bronze;
            
            if (total > maiorMedalha) {
                maiorMedalha = total;
                paisMaiorMedalha = pais;
            }

            if (total < menorMedalha) {
                menorMedalha = total;
                paisMenorMedalha = pais;
            }
        });

        // Construindo a string de resultados
        let resultado = "Ranking de medalhas:\n\n";
        paises.forEach((pais) => {
            resultado += `${pais}:\n`;
            resultado += `  Ouro: ${medalhas[pais].ouro}\n`;
            resultado += `  Prata: ${medalhas[pais].prata}\n`;
            resultado += `  Bronze: ${medalhas[pais].bronze}\n\n`;
        });

        resultado += `País com mais medalhas: ${paisMaiorMedalha} (${maiorMedalha} medalhas)\n`;
        resultado += `País com menos medalhas: ${paisMenorMedalha} (${menorMedalha} medalhas)\n`;
        resultado += `Média de medalhas por país: ${mediaMedalhas.toFixed(2)}`;

        alert(resultado);
    } else {
        alert("Nenhum usuário inserido.");
    }
}

calcularMedalhas();
