let pause = true;

// Variáveis da Bolinha:
let bolinha = {
    x: 177.5,
    y: 147.5,
    velx: 5,
    vely: 5
};
let iconeBolinha = document.getElementById("bolinha");

// Variáveis dos Botões:
let divBotaoJogar = document.getElementById("botaojogar");
let divBotaoPausar = document.getElementById("botaopausar");

function moverBolinha() {
    if(!pause) {
        // if (bolinha.x < 351.5 && bolinha.x > 0 && bolinha.y < 290 && bolinha.y > 0) {
        //     atualizarBolinha();
        // } else {
            if (bolinha.x >= 351.5 || bolinha.x <= 0) {
                bolinha.velx *= -1;
            };
            if (bolinha.y >= 290 || bolinha.y <= 0) {
                bolinha.vely *= -1;
            };
            atualizarBolinha();
        // };
    };
};

function atualizarBolinha() {
    bolinha.x += bolinha.velx;
    bolinha.y += bolinha.vely;
    iconeBolinha.style.left = `${bolinha.x}px`;
    iconeBolinha.style.top = `${bolinha.y}px`;
    // código para esperar 20 milisegundos antes do próximo loop
    window.setTimeout(moverBolinha, 20);
};

function jogar() {
    divBotaoJogar.style.display = "none";
    divBotaoPausar.style.display = "flex";
    pause = false;
    moverBolinha();
};

function pausar() {
    divBotaoJogar.style.display = "flex";
    divBotaoPausar.style.display = "none";
    pause = true;
    bolinha.x = 177.5;
    bolinha.y = 147.5;
    iconeBolinha.style.left = `${bolinha.x}px`;
    iconeBolinha.style.top = `${bolinha.y}px`;
};