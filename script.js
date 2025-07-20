

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cardsContainer');
    const toast = document.getElementById('toast');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    // Dados dos cartões
    const cardData = [
 
    {
        id: "1",
        title: "1 ano de aluguel",
        text: "Aluguel pago para o casal não ter que dormir na rua... ou na sua casa.",
        price: "R$ 3.000,00",
        image: "imagens/aluguel.avif",
        qrImage: "qrcodes/3000.jpg",
    },
    {
        id: "2",
        title: "1 ano de streaming para os noivos",
        text: "Streaming de séries para os noivos maratonarem juntos e discutirem sobre os personagens.",
        price: "R$ 480,00",
        image: "imagens/streaming.jpeg",
        qrImage: "qrcodes/480.jpg",
    },
    {
        id: "3",
        title: "1 rodízio para os noivos",
        text: "Um rodízio para os noivos comerem até não aguentar mais.",
        price: "R$ 200,00",
        image: "imagens/rodizio.jpg",
        qrImage: "qrcodes/200.jpg",
    },
    {
        id: "4",
        title: "1 fim de semana na praia",
        text: "Um fim de semana na praia para os noivos relaxarem e curtirem o sol.",
        price: "R$ 500,00",
        image: "imagens/praia.jpg",
        qrImage: "qrcodes/500.jpg",
    },
    {
        id: "5",
        title: "1 mês de aluguel",
        text: "Aluguel pago para o casal não ter que dormir na rua... ou na sua casa.",
        price: "R$ 1.500,00",
        image: "imagens/aluguel.avif",
        qrImage: "qrcodes/1500.jpg",
    },
    {
        id: "6",
        title: "1 mês de streaming para os noivos",
        text: "Streaming de séries para os noivos maratonarem juntos e discutirem sobre os personagens.",
        price: "R$ 40,00",
        image: "imagens/streaming.jpeg",
        qrImage: "qrcodes/40.jpg",
    },
    {
        id: "7",
        title: "1 skin do LoL",
        text: "Uma skin exclusiva do League of Legends para um dos noivos mostrar suas habilidades no Summoner's Rift.",
        price: "R$ 50,00",
        image: "imagens/lol.jpg",
        qrImage: "qrcodes/50.jpg",
    },
    {
        id: "8",
        title: "3 meses de streaming para os noivos",
        text: "Streaming de séries para os noivos maratonarem juntos e discutirem sobre os personagens.",
        price: "R$ 150,00",
        image: "imagens/streaming.jpeg",
        qrImage: "qrcodes/150.jpg",
    },
    {
        id: "9",
        title: "6 meses de streaming para os noivos",
        text: "Streaming de séries para os noivos maratonarem juntos e discutirem sobre os personagens.",
        price: "R$ 300,00",
        image: "imagens/streaming.jpeg",
        qrImage: "qrcodes/300.jpg",
    },
    {
        id: "10",
        title: "6 meses de aluguel",
        text: "Aluguel pago para o casal não ter que dormir na rua... ou na sua casa.",
        price: "R$ 1.800,00",
        image: "imagens/aluguel.avif",
        qrImage: "qrcodes/1800.jpg",
    },
    {
        id: "11",
        title: "Churrasqueira",
        text: "Uma churrasqueira para os noivos prepararem deliciosos churrascos quando os amigos vierem visitar.",
        price: "R$ 500,00",
        image: "imagens/churrasqueira.jpg",
        qrImage: "qrcodes/500.jpg",
    },
    {
        id: "12",
        title: "Cueca sexy para o noivo",
        text: "Uma cueca sexy para o noivo charmoso.",
        price: "R$ 30,00",
        image: "imagens/cueca.jpg",
        qrImage: "qrcodes/30.jpg",
    },
    {
        id: "13",
        title: "Par de skins do LoL",
        text: "Um par de skins exclusivas do League of Legends para os noivos jogarem juntos e mostrarem suas habilidades.",
        price: "R$ 100,00",
        image: "imagens/lol.jpg",
        qrImage: "qrcodes/100.jpg",
    },
    {
        id: "14",
        title: "Um jantar chique para os noivos",
        text: "Um jantar chique para os noivos se sentirem como realeza e criarem memórias românticas.",
        price: "R$ 300,00",
        image: "imagens/jantar.jpg",
        qrImage: "qrcodes/300.jpg",
    },
    {
        id: "15",
        title: "Um jogo de panelas de pedra",
        text: "Um jogo de panelas de pedra para os noivos cozinharem para os amigos quando forem visitar.",
        price: "R$ 500,00",
        image: "imagens/panelas.jpg",
        qrImage: "qrcodes/500.jpg",
    },
    {
        id: "16",
        title: "Um par de camisas iguais",
        text: "Um par de camisas iguais para os noivos se sentirem conectados e mostrarem seu amor.",
        price: "R$ 120,00",
        image: "imagens/camisas.jpg",
        qrImage: "qrcodes/120.jpg",
    },
    {
        id: "17",
        title: "Um sofá-cama",
        text: "Um sofá-cama para amigos e familiares terem um lugar confortável para dormir quando vierem visitar.",
        price: "R$ 2.000,00",
        image: "imagens/sofa.jpg",
        qrImage: "qrcodes/2000.jpg",
    },
    {
        id: "18",
        title: "Uma camisa de rock",
        text: "Uma camisa de rock para os noivos se sentirem verdadeiros roqueiros.",
        price: "R$ 60,00",
        image: "imagens/camisa_rock.jpg",
        qrImage: "qrcodes/60.jpg",
    },
    {
        id: "19",
        title: "Cadeira gamer",
        text: "Uma cadeira gamer para se sentir confortável e focado durante as partidas.",
        price: "R$ 800,00",
        image: "imagens/cadeira_gamer.jpg",
        qrImage: "qrcodes/800.jpg",
    },
    {
        id: "20",
        title: "Par de cadeiras gamer",
        text: "Um par de cadeiras gamer para os noivos jogarem confortavelmente.",
        price: "R$ 1.600,00",
        image: "imagens/cadeira_gamer.jpg",
        qrImage: "qrcodes/1600.jpg",
    },
    {
        id: "21",
        title: "Par de ingressos para show do A7X",
        text: "Um par de ingressos para o show do Avenged Sevenfold, para os noivos curtirem muito o metal.",
        price: "R$ 4.000,00",
        image: "imagens/show_a7x.jpg",
        qrImage: "qrcodes/4000.jpg",
    },
    {
        id: "22",
        title: "Direito de dar pitaco na vida do casal",
        text: "O direito de dar pitaco na vida do casal, incluindo decisões importantes e escolhas do dia a dia.",
        price: "R$ 100.000.000.000.000.000.000.000.000.000,00",
        image: "imagens/pitaco.jpg",
        qrImage: "qrcodes/pitaco.jpg",
    },
    {
        id: "23",
        title: "Vale visita - noivos visitam",
        text: "Um vale visita onde os noivos vão à sua casa para uma visita especial.",
        price: "R$ 500,00",
        image: "imagens/visita.jpg",
        qrImage: "qrcodes/500.jpg",
    },
    {
        id: "24",
        title: "Jogo de Tupperware",
        text: "Um jogo de tupperware para armazenar e transportar alimentos de forma prática.",
        price: "R$ 150,00",
        image: "imagens/tupperware.jpg",
        qrImage: "qrcodes/150.jpg",
    },
    {
        id: "25",
        title: "Minecraft original",
        text: "Uma cópia original do jogo Minecraft, para os noivos pararem de jogar o pirata.",
        price: "R$ 100,00",
        image: "imagens/minecraft.jpg",
        qrImage: "qrcodes/100.jpg",
    },
    {
        id: "26",
        title: "PlayStation 5",
        text: "Um console PS5 para os noivos jogarem seus jogos favoritos em alta definição.",
        price: "R$ 5.000,00",
        image: "imagens/ps5.jpg",
        qrImage: "qrcodes/5000.jpg",
    },
    {
        id: "27",
        title: "PC gamer para a noiva",
        text: "Um PC gamer para a noiva jogar Stardew Valley com estilo.",
        price: "R$ 10.000,00",
        image: "imagens/pc_gamer.jpg",
        qrImage: "qrcodes/10000.jpg",
    },
    {
        id: "28",
        title: "PC gamer para o noivo",
        text: "Um PC gamer para o noivo jogar Minecraft sem lag.",
        price: "R$ 10.000,00",
        image: "imagens/pc_gamer.jpg",
        qrImage: "qrcodes/10000.jpg",
    },
    {
        id: "29",
        title: "Vale visita ",
        text: "Um vale visita onde você pode marcar um dia para visitar os noivos em sua casa.",
        price: "R$ 2.000,00",
        image: "imagens/visita.jpg",
        qrImage: "qrcodes/2000.jpg",
    }
];




    
    /**
     * Cria os cards na página
     */
    function createCards() {
        cardsContainer.innerHTML = '';
        
        cardData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.id = item.id;
            
            // Define as cores do card
            card.style.setProperty('--accent-color', item.color);
            card.style.setProperty('--card-image-color', item.color);
            
            card.innerHTML = `
                <div class="card-text-content">
                <h3 class="card-title">${escapeHtml(item.title)}</h3>
<p class="card-text">${escapeHtml(item.text)}</p>
<div class="qr-code-container">
    <img class="qr-code" src="${escapeHtml(item.qrImage)}" alt="QR Code para ${escapeHtml(item.qrText)}">
    </div>                </div>
                <div class="card-media-content">
                  <div class="card-image">
  <img src="${item.image}" alt="${item.title}" class="card-image-img">
</div>
                    <div class="card-price">${escapeHtml(item.price)}</div>
                    <button class="card-button" data-pix="ffffff" aria-label="Copiar código PIX para fgdf">
                       PIX Copia e Cola
                    </button>
                   
                </div>
            `;
            
            // Adiciona evento de clique para abrir o modal
            card.addEventListener('click', function(e) {
                // Evita abrir modal se o clique foi no botão PIX
                if (!e.target.classList.contains('card-button')) {
                    openModal(item, index);
                }
            });
            
            cardsContainer.appendChild(card);
        });
        
        // Configura os botões de cópia dos cards
        setupCopyButtons();
    }
    
    /**
     * Configura os botões de cópia do PIX
     */
    function setupCopyButtons() {
        document.querySelectorAll('.card-button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Impede que o evento chegue ao card
                const pixCode = this.getAttribute('data-pix');
                copyPixCode(pixCode, this);
            });
        });
    }
    
    /**
     * Abre o modal com os detalhes do card
     * @param {Object} cardInfo - Informações do card selecionado
     * @param {number} index - Índice do card no array
     */
    function openModal(cardInfo, index) {
        modalContent.innerHTML = `
            <div class="modal-card" style="--accent-color: ${cardInfo.color}">
                <div class="modal-header">
                    <h2>${escapeHtml(cardInfo.title)}</h2>
                    <button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image" >

  <img src="${escapeHtml(cardInfo.image)}" alt="${cardInfo.title}" class="card-image-img">

                       

                    </div>
                    <div class="modal-details">
                        <p class="modal-text">${escapeHtml(cardInfo.text)}</p>
                        <div class="modal-price">${escapeHtml(cardInfo.price)}</div>
                        <button class="modal-pix-button" data-pix="${escapeHtml(cardInfo.codigopix)}">
                            ${escapeHtml(cardInfo.buttonText)}
                        </button>
                        
                        <div class="modal-qr-code">
                            <img src="${escapeHtml(cardInfo.qrImage)}" alt="${cardInfo.title}" class="qr-code">
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Impede scroll da página
        
        // Configura o botão de fechar
        modal.querySelector('.close-button').addEventListener('click', closeModalHandler);
        
        // Configura o botão PIX dentro do modal
        modal.querySelector('.modal-pix-button').addEventListener('click', function(e) {
            e.stopPropagation();
            copyPixCode(this.getAttribute('data-pix'), this);
        });
    }
    
    /**
     * Fecha o modal
     */
    function closeModalHandler() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restaura scroll da página
    }
    
    /**
     * Copia código PIX e mostra feedback
     */
    async function copyPixCode(pixCode, buttonElement) {
        try {
            await navigator.clipboard.writeText(pixCode);
            const originalText = buttonElement.textContent;
            
            buttonElement.textContent = 'Código Copiado!';
            showToast('Código PIX copiado com sucesso!');
            
            setTimeout(() => {
                if (buttonElement && buttonElement.textContent === 'Código Copiado!') {
                    buttonElement.textContent = originalText;
                }
            }, 2000);
        } catch (err) {
            console.error('Erro ao copiar: ', err);
            if (copyToClipboardFallback(pixCode)) {
                showToast('Código PIX copiado!');
            } else {
                showToast('Falha ao copiar. Selecione e copie manualmente.');
            }
        }
    }
    
    /**
     * Mostra uma mensagem de toast
     * @param {string} message - Mensagem a ser exibida
     */
    function showToast(message) {
        if (!toast) return;
        
        toast.textContent = message;
        toast.classList.add('show');
        
        // Esconde o toast após 3 segundos
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    /**
     * Fallback para copiar texto em navegadores mais antigos
     * @param {string} text - Texto a ser copiado
     * @returns {boolean} - Retorna true se foi bem sucedido
     */
    function copyToClipboardFallback(text) {
        try {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            document.body.appendChild(textarea);
            textarea.select();
            
            const successful = document.execCommand('copy');
            document.body.removeChild(textarea);
            return successful;
        } catch (err) {
            console.error('Fallback copy failed:', err);
            return false;
        }
    }
    
    /**
     * Escapa HTML para prevenir XSS
     * @param {string} unsafe - Texto não escapado
     * @returns {string} - Texto escapado
     */
    function escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    
    // Fecha modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
    
    // Fecha modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalHandler();
        }
    });
    
    // Inicializa a aplicação
    createCards();
});