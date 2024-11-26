window.addEventListener('load', function () {
    // Añadir la clase 'page-loaded' al body para activar la transición de opacidad
    document.body.classList.add('page-loaded');
    
    // Añadir la clase para cada sección
    document.querySelector('.quesomos').classList.add('page-loaded');
    document.querySelector('.container1').classList.add('page-loaded');
    document.querySelector('.cards-container').classList.add('page-loaded');
    
    // Añadir la clase 'page-loaded' a cada tarjeta individualmente con un retraso progresivo
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('page-loaded');
        }, index * 200); // Retraso progresivo para un efecto secuencial
    });

    // Añadir clase 'page-loaded' a la imagen dentro de .izquierda
    document.querySelector('.izquierda').classList.add('page-loaded');
    document.querySelector('.derecha').classList.add('page-loaded');
});