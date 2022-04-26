//Criar uma funcão que exibe a quantidade de *
//que aquela linha possui
exibirAsteristicos(10);

function exibirAsteristicos(linhas) {
  for (let linha = 1; linha <= linhas; linha++) {
    let padrao = '';
    for (let i = 0; i < linha; i++) {
      padrao += '*';
    }
    console.log(padrao);
  }
}