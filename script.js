

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cardsContainer');
    const toast = document.getElementById('toast');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    // Dados dos cartões
    



    
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