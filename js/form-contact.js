document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');
    if (!form) return; // Evita errores si no existe el formulario

    // Datos del formulario que se capturarán
    let formData = {};

    // Manejar el envío del formulario
    form.addEventListener('submit', function (e) {
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

        // Enviar directamente por WhatsApp
        const phoneNumber = '50558164037'; // Tu número sin el +
        const message = buildMessage();
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank', 'noopener,noreferrer');

        // Limpiar formulario
        form.reset();
        mostrarMensajeExito();
    });

    // Construir el mensaje para WhatsApp
    function buildMessage() {
        const eventTypeText = document.querySelector(`#event-type option[value="${formData.eventType}"]`).textContent;

        return `🎵 *¡Hola Disco Móvil ThunderCats!* 🎉\n\n` +
            `Mi nombre es *${formData.name}* y me encantaría contar con ustedes para mi ${eventTypeText.toLowerCase()}.\n\n` +
            `📋 *Detalles del evento:*\n` +
            `▫️ *Tipo:* ${eventTypeText}\n` +
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

        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            alert('Ingrese un correo electrónico válido.');
            return false;
        }

        if (isNaN(phoneInput.value) || phoneInput.value.length < 7) {
            phoneInput.style.borderColor = 'red';
            alert('Ingrese un número de teléfono válido.');
            return false;
        }

        if (!isValid) {
            alert('Por favor complete todos los campos requeridos.');
        }

        return isValid;
    }

    // Función para mostrar mensaje de éxito
    function mostrarMensajeExito() {
        const mensajeExito = document.createElement('div');
        mensajeExito.className = 'mensaje-exito';
        mensajeExito.innerHTML = `
            <p>¡Mensaje enviado con éxito! <i class="fas fa-check-circle"></i></p>
        `;

        form.prepend(mensajeExito);

        // Desaparecer después de 3 segundos
        setTimeout(() => {
            mensajeExito.style.opacity = '0';
            setTimeout(() => mensajeExito.remove(), 500);
        }, 3000);
    }
});
