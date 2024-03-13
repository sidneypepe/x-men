const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter',  () =>{

        if(window.innerText < 450){
            window.scrollTo({top:0, behavior: "smooth"});
        }

       removerClasseNaoSelecionado();

       personagem.classList.add('selecionado');

       mudarImgPersonagemSelecionado();
       
       mudarNomePersonagem();

       mudarTextoPersonagem();


        function removerClasseNaoSelecionado() {
            const personagemSelecionado = document.querySelector('.selecionado');
            personagemSelecionado.classList.remove('selecionado');
        }

        function mudarImgPersonagemSelecionado() {
            const personagemGrande = document.querySelector('.personagem-grande');

            const idPersonagem = personagem.attributes.id.value;
            personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        }

        function mudarNomePersonagem() {
            const nomePersonagem = document.getElementById('nome-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');
        }

        function mudarTextoPersonagem() {
            const descricaoPersonagem = document.getElementById('descricao-personagem');
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        }
    })
})