
function carregar() {

    // Selecionar os elementos da página
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var sa = window.document.getElementById('mensagem');
    var fim = window.document.getElementById('fimSemana');
    var legenda = window.document.getElementById('legenda');

    // Obter a data e a hora atual
    var data = new Date();
    var hora = data.getHours();
    var minutos = String(data.getMinutes()).padStart(2, '0');

    // Mostrar a hora atual
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    // Alterar a imagem, o fundo e a saudação
    if (hora >= 5 && hora < 12) {

        img.src = 'fotomanha.png';
        document.body.style.background = '#d8c6b2';

        sa.innerHTML = '<strong>BOM DIA!</strong>';
        legenda.innerHTML = 'Uma bela imagem do nascer do sol.';

    } else if (hora >= 12 && hora < 18) {

        img.src = 'fototarde.png';
        document.body.style.background = '#9ecee7';

        sa.innerHTML = '<strong>BOA TARDE!</strong>';
        legenda.innerHTML = 'Uma bela imagem para aproveitar a tarde.';

    } else {

        img.src = 'fotonoite.png';
        document.body.style.background = '#5d3339';

        sa.innerHTML = '<strong>BOA NOITE!</strong>';
        legenda.innerHTML = 'Uma bela imagem da noite.';

    }

    // Verificar se é fim de semana
    var dia = data.getDay();

    if (dia === 0 || dia === 6) {

        fim.innerHTML = 'Hoje é fim de semana! Aproveite o seu dia.';

    } else {

        fim.innerHTML = 'Quando será o fim de semana?';

    }

}

// Função do botão de confirmação
function confirmar() {

    var resposta = window.confirm('Deseja confirmar esta ação?');

    var resultado = window.document.getElementById('resultado');

    if (resposta === true) {

        resultado.innerHTML = 'Você apertou OK!';

    } else {

        resultado.innerHTML = 'Você apertou Cancelar!';

    }

}

// Executar a função ao abrir a página
// e atualizar a hora a cada minuto
carregar();

setInterval(carregar, 60000);
