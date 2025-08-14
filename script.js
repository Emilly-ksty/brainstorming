const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A IA realmente ajuda economizar tempo?",
        alternativas: [
            {
                texto: "Sim, a IA automatiza tarefas repetitivas, tendo tempo para si!",
                afirmacao: "afirmação"
            },
            {
                texto: "Não nescessariamente, a IA pode gerar retrabalho e atrasos!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que a IA cintribui para a saúde e bem-estar?",
        alternativas: [
            {
                texto: "Oferece respostas rápidas e personalizadas para dúvidas e pesquisas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Pode oferecer informações incorretas ou enviesadas se mal treinada.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A IA ajuda resolver problemas globais?",
        alternativas: [
            {
                texto: "Assistentes virtuais, casas inteligentes, otimização de energia e combate a doenças.",
                afirmacao: "afirmação"
            },
            {
                texto: "Ser usada de forma inrresponsável, ampliando desigualdades e riscos éticos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "De que maneira a IA pode ajudar com sua vida cotidiana?",
        alternativas: [
            {
                texto: "Com tarefas escolareEm 209...s, economiza tempo.",
                afirmacao: "afirmação"
            },
            {
                texto: "Pode gerar dependência.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A IA aumenta a produtividade de trabalho? ",
        alternativas: [
            {
                texto: "Sim, automatiza tarefas repetitivas, economizando tempo para atividades mais criadas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Pode substituir funções humanas e gerar desemprego em alguns setores.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "...";

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
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
