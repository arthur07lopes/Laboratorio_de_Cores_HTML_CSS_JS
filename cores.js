const cores = [
    { nome: "Azul noite", valor: "#172554" },
    { nome: "Vinho escuro", valor: "#3F1D38" },
    { nome: "Verde-água", valor: "#1fa898" },
    { nome: "Azul royal", valor: "#073dc7" },
    { nome: "Preto", valor: "#000000" },
    { nome: "Amarelo ouro", valor: "#f2b808" },
    { nome: "Coral", valor: "#ff6b6b" },
    { nome: "Azul céu", valor: "#8ecae6" },
    { nome: "Azul acinzentado", valor: "#a8dadc" },
    { nome: "Amarelo mostarda", valor: "#f4d35e" },
    { nome: "Azul bebê", valor: "#bde0fe" },
    { nome: "Lilás", valor: "#cdb4db" },
    { nome: "Rosa claro", valor: "#ffafcc" },
    { nome: "Azul turquesa claro", valor: "#7bdff2" },
    { nome: "Laranja", valor: "#ff9f1c" },
    { nome: "Verde menta", valor: "#95d5b2" },
    { nome: "Vermelho escuro", valor: "#9b2226" },
    { nome: "Rosa vibrante", valor: "#f72585" },
    { nome: "Azul elétrico", valor: "#4361ee" },
    { nome: "Azul ciano", valor: "#4cc9f0" },
    { nome: "Amarelo âmbar", valor: "#ffb703" },
    { nome: "Roxo", valor: "#6a4c93" },
    { nome: "Verde claro", valor: "#80ed99" },
    { nome: "Laranja queimado", valor: "#f77f00" },
    { nome: "Turquesa", valor: "#2ec4b6" }
];

const botao = document.querySelector("#gerar-cor");
const statusCor = document.querySelector("#cor-atual");

botao.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * cores.length);
    const cor = cores[indice];
    document.body.style.backgroundColor = cor.valor;
    statusCor.textContent = `Cor atual: ${cor.nome} (${cor.valor})`
});
