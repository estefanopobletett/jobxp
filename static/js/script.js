document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'es';
    const langBtn = document.getElementById('langBtn');

    langBtn.addEventListener('click', () => {
        // Alternar idioma
        currentLang = currentLang === 'es' ? 'en' : 'es';
        
        // Actualizar texto del botón
        langBtn.innerText = currentLang === 'es' ? 'EN / English' : 'ES / Español';

        // Buscar todos los elementos con atributos data-es y data-en
        const elements = document.querySelectorAll('[data-es][data-en]');
        
        elements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${currentLang}`);
        });
    });
});