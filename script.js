const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

/* Galeria */

const memories = document.querySelectorAll(".memory");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

memories.forEach(memory => {

    const image = memory.querySelector("img");

    memory.addEventListener("click", () => {

        modalImage.src = image.src;

        imageModal.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});

function closeModal() {
    imageModal.classList.remove("active");

    document.body.style.overflow = "";

}

modalClose.addEventListener("Click", closeModal);

imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        closeModal();

    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

/* Cartinhas */

const letterCards = document.querySelectorAll(".letter-envelope");

const letterModal = document.getElementById("letterModal");
const letterModalClose = document.getElementById("letterModalClose");

const modalLetterIcon = document.getElementById("modalLetterIcon");
const modalLetterTitle = document.getElementById("modalLetterTitle");
const modalLetterText = document.getElementById("modalLetterText");


const letters = [

    {
        icon: "💌",
        title: "Quando sentir saudade",
        text: `
            Se você abriu essa cartinha, provavelmente está sentindo um pouquinho de saudade de mim.
            Então, antes de qualquer coisa, queria que você parasse por alguns segundos e lembrasse de nós.
            <br><br>
            Lembra das nossas brincadeiras, das coisas bobas que só nós dois achamos engraçadas, dos momentos em que simplesmente ficamos juntos sem precisar fazer nada extraordinário?
            <br><br>
            É lindo pensar que, entre tantas pessoas nesse mundo, foi justamente você quem se tornou alguém tão especial para mim.
            Se agora você estiver sentindo saudade de mim, saiba que eu também estou sentindo muita saudade sua a todo momento.
            Talvez enquanto você estiver fazendo algo completamente comum, escutando música, comendo, assistindo...
            <br><br>
            E quando isso acontece eu sorrio, de emoção. Pois sentir saudade de você também significa ter alguém que vale a pena reencontrar.
            <br><br>
            Então não fique triste quando sentir a minha falta. Ao em vez disso, feche os olhos por alguns instantes e imagina que estou aí, te abrançando bem forte, te esquentando, te beijando, te dando carinho, te dando aquele amor gostoso.
            <br><br>
            A saudade passa...
            O tempo passa...
            Os dias passam...
            <br><br>
            E cada dia que passa também é um dia a menos até o próximo momento em que vamos estar juntos de novo.
            <br><br>
            Eu te amo muito, Minha Princesa 🌺
            <br><br>
            Com amor,
            <br><br>
            seu eterno príncipe 💙
        `
    },

    {
        icon: "💗",
        title: "Uma coisa que quero que saiba",
        text: `
            Existe uma coisa que talvez eu não diga tantas vezes como eu deveria...
            <br><br>
            Você é muito importante para mim.
            <br><br>
            E não estou falando somente dos nossos incríveis momentos juntos, das risadas, ou de momentos que tudo parece perfeito.
            <br><br>
            Estou falando de você como pessoa.
            <br><br>
            Do seu jeito de ser, das pequenas coisas que talvez você nem perceba que eu reparo, das suas manias, das suas inseguranças, das coisas que você gosta, das coisas que te fazem rir e até daqueles dias em que você não está se sentindo tão bem que tudo o que quero e amo é ficar do seu lado te acalmando e te mostrando que vai ficar tudo bem.
            <br><br>
            Eu amo cada pedacinho seu, cada detalhe que te faz única, que te faz ser a Iza linda que conheço.
            Gosto de perceber que, atrás da pessoa que eu amo, existe uma pessoa cheia de sonhos, desejos, qualidades, sentimentos.
            <br><br>
            Eu amo você por inteira, mesmo você enxergando imperfeições assim, para mim são detalhes lindos que me fazem te amar...
            <br><br>
            Você se tornou uma parte muito bonita da minha vida. E, entre tantas coisas que eu poderia te dar, talvez essa seja a mais importante:
            <br><br>
            “que sorte a minha ter encontrado essa menina.” ❤️
            <br><br>
            Eu te amo, minha Tulipa. 🌷

        `
    },

    {
        icon: "✨",
        title: "Para o nosso futuro",
        text: `
            Eu não sei exatamente onde a vida vai nos levar.
            <br><br>
            Não sei quais lugares ainda vamos conhecer, quais planos vão mudar pelo caminho, quais sonhos vamos realizar primeiro ou quais momentos inesperados ainda vão aparecer na nossa história.
            <br><br>
            Mas tem uma coisa que sei, que eu quero viver todos esses momentos com você.
            Quero conhecer lugares novos com você, me aventurar com você, comer comidas novas com você, tirar fotos juntos, registrar momentos lindos nossos...
            <br><br>
            Porque eu acho que uma das partes mais importantes de amar alguém é perceber que até um dia simples pode se tornar especial quando compartilhado com quem você mais ama.
            <br><br>
            E existe algo que eu gostaria de pedir a Deus e ao nosso futuro: que ele nos dê muitas oportunidades de continuar escolhendo um ao outro, de continuar conversando, rindo, se amando, criando memórias.
            <br><br>
            Porque essa página é apenas um pequeno registro de onde estamos agora, de momentos nossos juntos.
            <br><br>
            Mas ainda existe muitos outros capítulos para escrever, muitas fotos para tirar, muitos lugares para conhecer, muitos abraços e beijos para dar, tantas história para contar...
            <br><br>
            Meu amor, a nossa história ainda está acontecendo, está sendo escrita.
            <br><br>
            Espero que criemos tantas memórias, tantas histórias para contar que seja impossível escolher um momento favorito, quando todos em que estivemos juntos foram maravilhosos...
            <br><br>
            Quero viver para sempre
            <br><br>
            Ao seu lado. ❤️
            <br><br>

            Com todo o meu amor,
            <br><br>
            para você minha futura esposa. 🥰
        `
    }

];


letterCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        const letter = letters[index];

        modalLetterIcon.textContent = letter.icon;
        modalLetterTitle.textContent = letter.title;
        modalLetterText.innerHTML = letter.text;

        letterModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeLetterModal() {

    letterModal.classList.remove("active");

    document.body.style.overflow = "";

}


letterModalClose.addEventListener("click", closeLetterModal);


letterModal.addEventListener("click", (event) => {

    if (event.target === letterModal) {
        closeLetterModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLetterModal();
    }

});

// Contador para o nosso reencontro

const reunionDate = new Date("2026-10-12T03:00:00-03:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = reunionDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);