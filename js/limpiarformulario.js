document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const socialModal = document.getElementById('socialModal');
    
    // Función para limpiar el formulario
    function cleanForm() {
        // Limpiar campos de texto
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        
        // Resetear el select a la opción por defecto
        document.getElementById('event-type').selectedIndex = 0;
        
        // Opcional: Dar foco al primer campo
        document.getElementById('name').focus();
    }
    
    // Modificar el evento click de los botones de redes sociales
    whatsappBtn.addEventListener('click', function() {
        const phoneNumber = '50558164037';
        const message = buildMessage();
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        socialModal.style.display = 'none';
        window.open(url, '_blank');
        cleanForm(); // Limpiar después de enviar
    });
    
    messengerBtn.addEventListener('click', function() {
        const pageId = 'TU_PAGINA_DE_FACEBOOK';
        const message = buildMessage();
        const url = `https://m.me/${pageId}?text=${encodeURIComponent(message)}`;
        
        socialModal.style.display = 'none';
        window.open(url, '_blank');
        cleanForm(); // Limpiar después de enviar
    });
    
    // También limpiar si cierran el modal sin enviar
    closeModal.addEventListener('click', function() {
        socialModal.style.display = 'none';
        cleanForm();
    });
});