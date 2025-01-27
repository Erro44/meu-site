document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', () => {
        // Cria o modal e seu conteúdo
        const src = img.src;
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('tabindex', '-1');

        // Conteúdo do modal
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${src}" alt="Imagem ampliada">
            </div>
        `;

        // Adiciona o modal ao body
        document.body.appendChild(modal);

        // Foco no modal (acessibilidade)
        modal.focus();

        // Fecha o modal ao clicar nele ou pressionar a tecla ESC
        const closeModal = () => {
            modal.remove();
            document.body.style.overflow = ''; // Restaura o scroll
        };

        modal.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        }, { once: true });

        // Remove o scroll da página enquanto o modal está aberto
        document.body.style.overflow = 'hidden';


        document.querySelectorAll('.view-album-btn').forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                const target = document.querySelector(button.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
        


    });
});
