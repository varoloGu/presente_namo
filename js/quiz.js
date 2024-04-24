const perguntas = [
    {
        topico: "Sobre nois",
        pergunta: "Pergunta 1: Qual foi o dia que a gente se conheceu?",
        opcoes: ["21/11/2023", "23/10/2023", "21/10/2023","22/10/2023"],
        resposta: "21/10/2023"
    },
    {
        topico: "Sobre nois",
        pergunta: "Pergunta 2: Quando é meu aniversário?",
        opcoes: ["17/08/2004", "19/08/2004", "13/08/2004", "07/08/2004"],
        resposta: "17/08/2004"
    },
    {
        topico: "Sobre o mundo",
        pergunta: "Pergunta 3: Quando é o dia nacional do Saci?",
        opcoes: ["13/04", "31/10", "19/09", "22/07"],
        resposta: "31/10"
    },
    {
        topico: "Chega de datas",
        pergunta: "Pergunta 4: Qual foi a primeira série/filme que assistimos juntos?",
        opcoes: ["Pearl", "Jujutsu Kaisen", "Paris, Texas", "Princesa Mononoke"],
        resposta: "Jujutsu Kaisen"
    },
    {
        topico: "Sobre nois",
        pergunta: "Pergunta 5: Como eu estava vestido quando saímos pela primeira vez ?",
        opcoes: ["Calça preta e camiseta preta lisa", "Calça jeans escura e camiseta preta lisa", "Calça jeans azul e camiseta lisa branca", "Calça jeans azul e camiseta lisa preta"],
        resposta: "Calça jeans azul e camiseta lisa preta"
    },
    {
        topico: "Sobre eu",
        pergunta: "Pergunta 6: Qual minha comida favorita?",
        opcoes: ["Massas", "Pizza", "Hambúrguer", "Comida Japonesa"],
        resposta: "Pizza"
    },
    {
        topico: "Sobre eu",
        pergunta: "Pergunta 7: Qual é o meu programa de TV ou série favorito?",
        opcoes: ["Breaking Bad", "The Last of Us", "Stranger Things", "How I Met Your Mother"],
        resposta: "Breaking Bad"
    },

    {
        topico: "Sobre eu",
        pergunta: "Pergunta 8: Qual meu jogo favorito?",
        opcoes: ["The Legend of Zelda", "Life is Strange", "Valorant", "Shadow of the Colossus"],
        resposta: "The Legend of Zelda"
    },
    {
        topico: "Sobre eu",
        pergunta: "Pergunta 9: Qual time de futebol eu mais odeio na vida?",
        opcoes: ["Corinthians", "Santos", "São Paulo", "Flamengo"],
        resposta: "Flamengo"
    },
    {
        topico: "Sobre eu",
        pergunta: "Pergunta 10: Qual minha cor favorita?",
        opcoes: ["Preto", "Laranja", "Verde", "Roxo",],
        resposta: "Verde"
    },
    {
        topico: "Sobre você",
        pergunta: "Pergunta 11: Qual carecterística sua você acha que eu mais admiro?",
        opcoes: ["Seus olhos", "Seu sorriso", "Sua sentada violenta", "Seu nariz"],
        resposta: "Sua sentada violenta"
    },
    {
        topico: "Sobre nois",
        pergunta: "Pergunta 12: Em qual date eu tive certeza que estava apaixonado por você?",
        opcoes: ["Cinesala", "Liberdade", "Quando você veio em casa", "Itaú Cultural"],
        resposta: "Cinesala"
    },
    {
        topico: "Sobre mim",
        pergunta: "Pergunta 13: Qual a minha música favorita?",
        opcoes: ["Japanese Denim", "Gravity", "Meu Novo Mundo", "Como Tudo Deve Ser"],
        resposta: "Como Tudo Deve Ser"
    },
    {
        topico: "Sobre mim",
        pergunta: "Pergunta 14: Qual foi meu pr no supino até o atual momento (23/04/2024)?",
        opcoes: ["26kg cada lado", "30kg cada lado", "32kg cada lado", "28kg cada lado"],
        resposta: "30kg cada lado"
    },
    {
        topico: "Sobre a vida",
        pergunta: "Pergunta 15: Qual o preço do medo abundante de todas as verdade??",
        opcoes: ["Elesdescobriram'ondeeumoroNãoémaisnecessáriose'esconDer EstareimortoAtéo'amanhecer", "Elesdescobriram'ondeeumoroNãoémaisnecessáriose'esconDer EstareimortoAtéo'amanhecer", "Elesdescobriram'ondeeumoroNãoémaisnecessáriose'esconDer EstareimortoAtéo'amanhecer", "Elesdescobriram'ondeeumoroNãoémaisnecessáriose'esconDer EstareimortoAtéo'amanhecer"],
        resposta: "Elesdescobriram'ondeeumoroNãoémaisnecessáriose'esconDer EstareimortoAtéo'amanhecer"
    },
];

let pergunta_atual = 0;
let pontuacao = 0;

const pergunta_texto = document.getElementById("pergunta_texto");
const topico_pergunta = document.getElementById("topico_pergunta");
const opcoes_container = document.getElementById("opcoes_container");
const proxima_pergunta = document.getElementById("proxima_pergunta");
const valor_score = document.getElementById("valor_score");

proxima_pergunta.addEventListener("click", () => proximaPergunta());

function carregar_pergunta() {
    const pergunta_atual_obj = perguntas[pergunta_atual];
    topico_pergunta.textContent = `${pergunta_atual_obj.topico}`;
    pergunta_texto.textContent = pergunta_atual_obj.pergunta;

    opcoes_container.innerHTML = "";
    pergunta_atual_obj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.addEventListener("click", () => verificar_resposta(opcao, botao));
        opcoes_container.appendChild(botao);
    });
}

function verificar_resposta(opcao_selecionada, botao) {
    const pergunta_atual_obj = perguntas[pergunta_atual];
    if (opcao_selecionada === pergunta_atual_obj.resposta) {
        pontuacao++;
        botao.style.backgroundColor = "green"; // Resposta correta
    } else {
        botao.style.backgroundColor = "red"; // Resposta incorreta
    }
    valor_score.textContent = pontuacao;
    // Desativar os botões após a resposta ser selecionada
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach(b => b.disabled = true);
}

function proximaPergunta() {
    pergunta_atual++;
    if (pergunta_atual < perguntas.length) {
        carregar_pergunta();
    } else {
        // Aqui você pode fazer algo quando todas as perguntas forem respondidas
        alert("Quiz concluído! Pontuação: " + pontuacao);
    }
}

// Carregar a primeira pergunta ao carregar a página
carregar_pergunta();
