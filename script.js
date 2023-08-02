//função toogle é um botão mesmo
function toggleMode() {
  const html = document.documentElement //const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura
  // document e a representação do documento no javascript quando se coloca o . na frente docelement, ta acessando o doc no html

  //if/condicional = se no html na lista de classe contém o light?
  //------------------------------------------------------------
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  // }
  html.classList.toggle("light")
  //--------------------------------------------------------------------------------------------
  const img = document.querySelector("#perfil img")
  // pegar a tag img / QUERYSELECTOR é uma função do documment = pesquisa seletor
  
}
