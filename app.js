function busca() {
  // Declara uma função chamada 'busca' que será responsável por exibir os resultados da pesquisa.

  let section = document.getElementById("resultados-pesquisa");
  // Obtém a seção HTML com o ID "resultados-pesquisa" e armazena na variável 'section'.
  // Essa seção será utilizada para inserir os resultados da pesquisa.
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  //se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Tente novamente!</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  let titulo = "";
  let descricao = "";
  let tags = "";

  let resultados = "";
  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  // A cada iteração do loop, novos resultados serão concatenados a essa string.

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // Inicia um loop 'for...of' para iterar sobre cada elemento 'dado' do array 'dados'.
    // A cada iteração, um novo resultado será formatado e adicionado à string 'resultados'.
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#"target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Buscar por município</a>
    </div>
  `;
    }

    // Dentro do loop, um novo elemento HTML <div> é criado para cada resultado.
    // As propriedades 'titulo', 'descricao' e 'link' de cada objeto 'dado' são utilizadas para preencher o conteúdo do HTML.
    // O resultado formatado é então concatenado à string 'resultados'.
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado. Tente novamente!</p>"
  }

  section.innerHTML = resultados;
  // Após o loop, o conteúdo HTML da seção 'section' é substituído pela string 'resultados',
  // exibindo assim os resultados da pesquisa na página.
}



