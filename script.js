// Capture os elementos HTML usando seus IDs
const tituloElement = document.getElementById("titulo");
const ulElement = document.querySelector("ul");
const linkElement = document.getElementById("link");
const olElement = document.getElementById("lista-ordenada");

// Adicione conteúdo usando .innerText
tituloElement.innerText = "Título da Página";
linkElement.innerText = "Visite o site da ProzEducação";

// Adicione itens à lista não ordenada usando .innerHTML
ulElement.innerHTML = `
    <li>Curso AWS </li>
    <li>Curso Python</li>
    <li>Curso Azure</li>
`;

// Adicione itens à lista ordenada usando .innerHTML
olElement.innerHTML = `
    <li><a href="https://aws.amazon.com/pt/">Site Amazon 1</a></li>
    <li><a href="https://www.python.org/">Site Python 2</a></li>
    <li><a href="https://azure.microsoft.com/pt-br/">Site Azure 3</a></li>
`;
