const etiquetas = [
  ["Ideias para o site", [0, 1]],
  ["Atividade Diaria", [1]],
];

const conteudoFixoTeste = [
  {
    id: 1,
    tipo: "Texto",
    titulo: "Temporario",
    conteudo:
      "Eu <code>gostaria de lembrar</code> de continuar essa parada todo dia",

    etiquetas: [
      ["Ideias para o site", 1],
      ["Atividade Diaria", 1],
    ],
    visual: {
      localizacao: "Containers",
      width: "100px",
      height: "100px",
      color: "green",
    },

    dataCriacao: "2023/03/25 10:03:45 UTC-3",
    dataModificacao: "2023/03/25 10:10:45 UTC-3",

    adicionais: {
      reverificacao: "Certeza",
    },
  },
  {
    id: 2,
    tipo: "imagem",
    titulo: "Temporario 2",
    conteudo: "chapeu.png",

    etiquetas: [["Ideias para o site", 2]],
    visual: {
      localizacao: "Album",
      width: "200px",
      height: "100px",
    },

    dataCriacao: "2023/03/25 11:03:45 UTC-3",
    dataModificacao: "2023/03/25 11:10:45 UTC-3",

    adicionais: {
      reverificacao: "Certeza",
    },
  },
];
// Variaveis Importantes
let HTMLTodosCards = document.getElementById("TodosCards");
let HTMLclassSeparadorSite = document.getElementsByClassName("SeparadorSite");
let HTMLclassSeparadorEtiqueta =
  document.getElementsByClassName("SeparadorEtiqueta");
let HTMLclassEtiqueta = document.getElementsByClassName("Etiqueta");
let HTMLclassConjuntosEvenlopes =
  document.getElementsByClassName("ConjuntosEvenlopes");
let HTMLclassEnvelope = document.getElementsByClassName("Envelope");
let HTMLclassEnvelopeConteudo =
  document.getElementsByClassName("EnvelopeConteudo");

// Processamento
GerarConteudoSite();

// Declarando Funções
function GerarEspacoEtiqueta(params) {
  document
    .getElementById("TodosCards")
    .insertAdjacentHTML("afterbegin" /* Crie uma função aqui */);
}

function GerarTextoCard(DadosCardUnico) {
  const Card = `
  <div class="Envelope">
    <div class="EnvelopeConteudo">
      ${DadosCardUnico.conteudo}
    </div>
  </div> 
  `;
  return Card;
}
function GerarConteudoSite() {
  let StringinsertAdjacentHTML = "";

  etiquetas.forEach((uniEtiqueta) => {
    let ResultFor = "";
    for (let index = 0; index < uniEtiqueta[1].length; index++) {
      ResultFor += GerarTextoCard(conteudoFixoTeste[uniEtiqueta[1][index]]);
    }
    return (StringinsertAdjacentHTML += `
    <div class="SeparadorSite">
      <div class="SeparadorEtiqueta">
        <header>
          <div class="Etiqueta">
            <span>${uniEtiqueta[0]}</span>
          </div>
        </header>
        <div class="ConjuntosEvenlopes">
          ${ResultFor}
          <div class="Envelope">
            <div id="Adicione" class="EnvelopeConteudo">
              <p>Adicione um card</p>
              <p class="AdicioneCentro">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  });

  document
    .getElementById("TodosCards")
    .insertAdjacentHTML("afterbegin", StringinsertAdjacentHTML);
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Verifica quantas etiquetas estão presentes no site
// Adiciona os cards em [SeparadorSite] e [SeparadorEtiqueta] organizando por etiqueta dos cards
// coloque o nome da etiqueta em [Etiqueta>span]
// coloque os cards em [ConjuntosEvenlopes] com a classe [Envelope]
// Coloque o conteudo do card em [EnvelopeConteudo]
//
//
//
//
//
