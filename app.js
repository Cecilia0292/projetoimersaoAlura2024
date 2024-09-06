function busca() {
  // Busca por termos em um conjunto de dados e exibe os resultados.

  let section = document.getElementById("resultados-pesquisa");
  // Seção HTML onde os resultados serão exibidos.

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  // Valor digitado pelo usuário no campo de pesquisa.

  // Verifica se o usuário digitou algo.
  if (!campoPesquisa) {
    // Se nada foi digitado, exibe uma mensagem de erro.
    section.innerHTML = "<p>Nada foi encontrado. Tente novamente!</p>"
    return;
  }

  // Converte o termo de pesquisa para minúsculas para facilitar a comparação.
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa variáveis para armazenar os valores de cada item durante a iteração.
  let titulo = "";
  let descricao = "";
  let tags = "";

  let resultados = "";
  // String que armazenará os resultados formatados em HTML.

  // Itera sobre cada item do conjunto de dados.
  for (let dado of dados) {
    // Converte os valores para minúsculas para facilitar a comparação.
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    // Verifica se o termo de pesquisa está presente em algum dos campos do item.
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se o item corresponder à pesquisa, cria um novo elemento HTML para exibir o resultado.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Buscar por município</a>
        </div>
      `;
    }
  }

  // Se nenhum resultado foi encontrado, exibe uma mensagem de erro.
  if (!resultados) {
    resultados = "<p>Nada foi encontrado. Tente novamente!</p>"
  }

  // Atualiza o conteúdo da seção de resultados com os resultados encontrados.
  section.innerHTML = resultados;
}
