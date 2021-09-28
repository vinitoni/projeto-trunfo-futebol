var carta1 = {
  nome: "Neymar",
  imagem:
    "https://conteudo.imguol.com.br/c/esporte/92/2021/09/15/so-neymar-coloca-brasil-no-ranking-de-atacantes-mais-caros-da-historia-1631706410444_v2_450x337.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    chute: 6
  }
};

var carta2 = {
  nome: "Gabigol",
  imagem:
    "https://www.ofutebolero.com.br/__export/1620241390790/sites/elfutboleromx/img/2021/05/05/gabigol-comemora-gol-do-flamengo-contra-o-gremio-1571882138346_v2_1920x1280.jpg_945294530.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    chute: 2
  }
};

var carta3 = {
  nome: "Daniel Alves",
  imagem:
    "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/09/daniel-alves-brasil-photo-by-alexander-hassenstein-getty-images-7-2-507x338.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    chute: 10
  }
};

var carta4 = {
  nome: "Felipe Melo",
  imagem: "https://liberal.com.br/wp-content/uploads/2019/08/Felipe-Melo.jpg",
  atributos: {
    ataque: 4,
    defesa: 10,
    chute: 6
  }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 4);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 4);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  // var elementoResultado = document.getElementById("resultado");
  // var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  // var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //  divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id'opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML =
      moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //  divCartaMaquina.style.backgroundImage="url(" + cartaMaquina.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id'opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML =
      moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
}
function jogarDeNovo() {
  document.getElementById("btnJogarDenovo").disabled = true;
  document.getElementById("btnSortear").disabled = false;

  var divJogador = document.getElementById("carta-jogador");
  divJogador.style.backgroundImage = "";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divJogador.innerHTML = moldura;

  var divMaquina = document.getElementById("carta-maquina");
  divMaquina.style.backgroundImage = "";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divMaquina.innerHTML = moldura;
}