const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        //0
        enunciado: "Assim que você saiu do trabalho você chega em casa cansado, vendo que você ainda tem 100 reais na sua conta e gostaria de relaxar um pouco, você... ",
        alternativas: [
            {
                texto: "decide apostar no tigrinho",
                afirmacao: "apos chegar em casa, você liga o pc e abre o tigrinho,",
                id: "1"    
            },
            {
                texto: "decide apostar na blaze",
                afirmacao: "apos chegar em casa, você liga o pc e abre a blaze,",
                id: "1"
            }
        ]
    },
    //blaze 1-3
    {//1
        enunciado: "você liga seu pc e abre a blaze e deposita seus 100 reais, agora é so escolher qual jogo você jogara",
        alternativas: [
            {
                texto: "crash",
                afirmacao: "você aposta 100 conto no crash e vê o multiplicador subir, para sua sorte ele chega ao 2x e você retira 100 reais de lucro,",
                id: "2"
            },
            {
                texto: "double",
                afirmacao: "você decide apostar 100 conto no double, como hoje você se sente sortudo hoje, você aposta no branco, pena que a roleta cai no vermelho e seu dinheiro caiu no ralo,",
                id: "3"
            }
        ]
    },
    {//2
        enunciado: "o multiplicador chega a 2x e você retira o dinheiro  e com 100 reais de lucro você vai dormir feliz, no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você...",
        alternativas: [
            {
                texto: "vai no bar",
                afirmacao: "no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você vai beber uns goles em um boteco ali por perto,",
                id: "5"
            },
            {
                texto: "vai numa rinha de galo",
                afirmacao: "no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você vai assistir uma rinha de galo ali por perto, so é uma pena que você chegou tarde para apostar uns trocos",
                id: "6"
            }
        ]
    },
    {//3
        enunciado: "você aposta tudo no branco e perde! de raiva você faz seu pc voar na parede e logo vai dormir puto da vida, no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você...",
        alternativas: [
            {
                texto: "vai no bar",
                afirmacao: "no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você vai beber uns goles em um boteco ali por perto,",
                id: "5"
            },
            {
                texto: "vai numa rinha de galo",
                afirmacao: "no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você vai assistir uma rinha de galo ali por perto, so é uma pena que você chegou tarde para apostar uns trocos",
                id: "6"
            }
        ]
    },
    //tigrinho
    {//4
        enunciado: "como agora era um dos horarios pagantes do tigrinho você decide aposta, e acaba ganhando vintão, no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você...",
        alternativas: [
            {
                texto: "vai no bar",
                afirmacao: "no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você vai beber em um boteco ali por perto,",
                id: "5"
            },
            {
                texto: "vai numa rinha de galo",
                afirmacao: "no outro dia enquanto volta do trabalho seu carro morre e enquanto chama o guincho, você vai assistir uma rinha de galo ali por perto, so é uma pena que você chegou tarde para apostar em um dos galos",
                id: "6"
            }
        ]
    },
    //noite5-6
    {//5
        enunciado: "você acaba passando tanto tempo no bar que fica de noite e seu carro ta no mecanico, como você vai voltar pra casa?",
        alternativas: [
            {
                texto: "ir a pé",
                afirmacao: "mas você fica tanto tempo bebendo  que fica de noite e você decide ir pra casa a pé",
                id: "7"
            },
            {
                texto: "chamar um uber",
                afirmacao: "mas você fica tanto tempo bebendo  que fica de noite e você decide chamar um uber para ir pra casa",
                id: "7"
            }
        ]
    },
    {//6
            enunciado: "você acaba passando tanto tempo vendo a rinha de galo que fica de noite e seu carro ta no mecanico, como você vai voltar pra casa?",
            alternativas: [
                {
                    texto: "ir a pé",
                    afirmacao: "você acaba passando tanto tempo vendo os galos brigaem que fica de noite e você decide ir pra casa a pé",
                    id: "7"
                },
                {
                    texto: "chamar um uber",
                    afirmacao: "você acaba passando tanto tempo vendo os galos brigarem que fica de noite e você decide chamar um uber para ir pra casa",
                    id: "7"
                }
            ]
        },
        {//7
            enunciado: "você chega em casa e vai dormir, e no outro dia quando apos acordar você acorda e lembra que é dia das mâes, você pega seu carro no mecanico e vai comprar um presente pra sua mãe, quando você chega na loja e ve o preço você fica horrorizado com o preço",
            alternativas: [
                {
                    texto: "abrir o tigrinho",
                    afirmacao: "no outro dia você vai comprar um presente de dia das mães, quando você chega na loja e ve o preço você fica horrorizado com o preço, você lembre que agra é um dos horarios pagantes e logo abre o tigrinho, apos ganhar um bolada você compra o presente",
                    id: "8"
                },
                {
                    texto: "comprar um presente mais barato",
                    afirmacao: "no outro dia você vai comprar um presente de dia das mães, quando você chega na loja e ve o preço você fica horrorizado com o preço, você então vai comprar um presente mais barato",
                    id: "8"
                    
                }
            ]
        }
       
   
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    const id = opcaoSelecionada.id;
    atual = id;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
