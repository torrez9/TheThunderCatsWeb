// Función para actualizar el año del copyright
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', updateCopyrightYear);

// También actualizar si hay cambios en el DOM (para SPA/PWA)
document.addEventListener('DOMSubtreeModified', updateCopyrightYear);