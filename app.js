function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
   
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); 

    if (campoPesquisa == "") {
        section.innerHTML = "Sem resultados, digite o nome da diamante."
        return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
  
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { // Comparando em minúsculo
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
          </div>
        `;
      }
    }
  
     if (!resultados) {
        resultados = "<p>Sem resultados</p>"
     }

    section.innerHTML = resultados; // Atribuindo os resultados ao HTML
  }
