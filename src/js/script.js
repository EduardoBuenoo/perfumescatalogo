document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU MOBILE ---
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');

    // Abrir/Fechar menu
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- LÓGICA DO CARROSSEL DE BANNERS ---
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        // Se não houver slides, não faz nada
        if (slides.length === 0) return;

        // Remove classe active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Incrementa índice
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        
        // Adiciona classe active ao atual (index - 1 pois array começa em 0)
        slides[slideIndex - 1].classList.add('active');
        
        // Muda a cada 5 segundos
        setTimeout(showSlides, 5000); 
    }

    // Inicia o carrossel
    showSlides();
});