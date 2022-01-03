function addTable() {
document.querySelector('#acoesAdd').style.display = "block"
}

var variavel = "55555"

function addTableRow(){
    // let tabela = document.querySelector('#tabelaExt')
    // let linhas = tabela.rows.length;
    // let colunas = tabela.rows[linhas-1].cells.length
    // let novaLinha = tabela.insertRow(linhas)

    // let numAdd = document.querySelector('#numAdd').value 
    // let tipAdd = document.querySelector('#tipAdd').value 
    // let recAdd = document.querySelector('#recAdd').value 
    // let retAdd = document.querySelector('#retAdd').value 
    // let avaAdd = document.querySelector('#avaAdd').value 

    // let dados = [array1[numAdd, tipAdd, recAdd, retAdd, avaAdd],array2["446177", "A", "Dez 87", "Jan 22", "Não"]]

    // let dados = [
    //     {
    //         l1: "23434",
    //         l2: "B",
    //         l3: "Dez 21",
    //         l4: "Dez 23",
    //         l5: "Não"
    //     },
    //     {
    //         l1: "62456",
    //         l2: "A",
    //         l3: "Jun 21",
    //         l4: "Jun 23",
    //         l5: "Não"
    //     }
    // ]

    // for (var j = 0; j < colunas; j++) {
    //     // Insere uma coluna na nova linha 
    //     newCell = novaLinha.insertCell(j);
    //     // Insere um conteúdo na coluna
    //     newCell.innerHTML = dados[j]
    // }

    console.log(dados[1].l1) 

}



// ESTA EH A FUNCAO QUE VAI RENDERIZAR O CONTEUDO DE DADOS NAS LINHAS DA TABELA, MAS A TAG TR NAO RENDERIZA 

function templates(){
    let template = ""
    var tabela = document.querySelector('#tabelaTemplate')

    let dados = [
        {
            l1: "23434",
            l2: "B",
            l3: "Dez 21",
            l4: "Dez 23",
            l5: "Não"
        },
        {
            l1: "62456",
            l2: "A",
            l3: "Jun 21",
            l4: "Jun 23",
            l5: "Não"
        }
    ]

    for (let i=0; i< dados.length; i++){
        const linhastemplate = dados ;
        template += `
        <tr>
        <td>${linhastemplate[i].l1}</td>
        <td>${linhastemplate[i].l2}</td>
        <td>${linhastemplate[i].l3}</td>
        <td>${linhastemplate[i].l4}</td>
        <td>${linhastemplate[i].l5}</td>
        </tr>
    `
    }
    tabela.innerHTML = template;

}