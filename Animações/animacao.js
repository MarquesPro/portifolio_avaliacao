// Inicio uma nova instância 
var scroll = new SmoothScroll('nav ul li a[href*="#"]', {
    speed: 800 // Define a velocidade da rolagem 
});

// Adiciono o evento de scroll na página
document.addEventListener('scroll', function () {
    // estou selecionando os elementos com a classe 'animate__animated'
    const elements = document.querySelectorAll('.animate__animated');
    
    
    elements.forEach(element => {
        // Obtém a posição do topo do elemento
        const position = element.getBoundingClientRect().top;
        // Obtém a altura da janela de visualização
        const windowHeight = window.innerHeight;
        
        // Se a posição do topo do elemento estiver dentro da janela de visualização
        if (position < windowHeight) {
            // Adiciona a classe 'animate__fadeInUp' ao elemento para conseguir aplicar a animação
            element.classList.add('animate__fadeInUp');
        }
    });
});

// Seleciona todos os links do menu de navegação
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    // Adiciona o evento de mouseover em cada link
    link.addEventListener('mouseover', () => {
        // Muda a cor do link para #FF6347 quando o mouse estiver sobre ele
        link.style.color = '#FF6347';
        // Adiciona uma transição suave para a mudança de cor
        link.style.transition = 'color 0.3s';
    });
    
    // Adiciona o evento de mouseout em cada link
    link.addEventListener('mouseout', () => {
        // Restaura a cor original do link quando o mouse sair dele
        link.style.color = '';
    });
});
