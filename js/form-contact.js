document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const socialModal = document.getElementById('socialModal');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const messengerBtn = document.getElementById('messengerBtn');
    const closeModal = document.getElementById('closeModal');
    
    // Datos del formulario que se capturarán
    let formData = {};
    
    // Manejar el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar formulario
        if (!validateForm()) {
            return;
        }
        
        // Capturar datos del formulario
        formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            eventType: document.getElementById('event-type').value,
            message: document.getElementById('message').value
        };
        
        // Mostrar modal de redes sociales
        socialModal.style.display = 'flex';
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        socialModal.style.display = 'none';
    });
    
    // Enviar por WhatsApp
    whatsappBtn.addEventListener('click', function() {
        const phoneNumber = '50558164037'; // Tu número sin el +
        const message = buildMessage();
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        socialModal.style.display = 'none';
        window.open(url, '_blank');
    });
    
    // Enviar por Messenger
    messengerBtn.addEventListener('click', function() {
        const pageId = 'TU_PAGINA_DE_FACEBOOK'; // Reemplaza con tu página de Facebook
        const message = buildMessage();
        const url = `https://m.me/${pageId}?text=${encodeURIComponent(message)}`;
        
        socialModal.style.display = 'none';
        window.open(url, '_blank');
    });
    
    // Construir el mensaje
    function buildMessage() {
    const eventTypeText = document.querySelector(`#event-type option[value="${formData.eventType}"]`).textContent;
    
    return `🎵 *¡Hola Disco Móvil ThunderCats!* 🎉\n\n` +
           `Mi nombre es *${formData.name}* y me encantaría contar con ustedes para mi ${eventTypeText.toLowerCase()}.\n\n` +
           `📋 *Detalles del evento:*\n` +
           `▫️ *Tipo:* ${eventTypeText}\n` +
           `▫️ *Fecha tentativa:* [Indicar fecha si aplica]\n` +
           `▫️ *Lugar aproximado:* [Indicar ubicación si conoces]\n\n` +
           `📱 *Mis datos de contacto:*\n` +
           `▫️ *Teléfono:* ${formData.phone}\n` +
           `▫️ *Correo:* ${formData.email}\n\n` +
           `💬 *Mensaje adicional:*\n"${formData.message}"\n\n` +
           `✨ Espero poder contar con su talento para hacer de este evento algo increíble. \n` +
           `¿Podrían darme más información sobre disponibilidad y paquetes? 😊\n\n` +
           `¡Quedo atento(a) a su respuesta! 🙌`;
}
    
    // Validar formulario
    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
                
                // Quitar el estilo después de 2 segundos
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 2000);
            }
        });
        
        if (!isValid) {
            alert('Por favor complete todos los campos requeridos');
        }
        
        return isValid;
    }
});