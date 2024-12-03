
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        clearTimeout(c);
    }, 1000);

        // Criação do objeto de áudio com a música
        const audio = new Audio('./assets/conFlores.mp3'); // Substitua pelo caminho correto do seu arquivo de música
        const playPauseBtn = document.getElementById('playPauseBtn');
        let isPlaying = false;

        // Função para tocar ou pausar a música
        function togglePlayPause() {
            if (isPlaying) {
                audio.pause();
                playPauseBtn.textContent = 'Tocar Música';
            } else {
                audio.play();
                playPauseBtn.textContent = 'Pausar Música';
            }
            isPlaying = !isPlaying;
        }

        // Reproduzir música automaticamente ao carregar a página
        window.onload = () => {
            audio.play();
            isPlaying = true;
            playPauseBtn.textContent = 'Pausar Música';
        };

        // Associar a função de play/pause ao botão
        playPauseBtn.addEventListener('click', togglePlayPause);
};
