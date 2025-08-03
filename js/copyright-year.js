// Función para actualizar el año del copyright
function updateCopyrightYear() {
        const yearElement = document.getElementById('current-year');
        const currentYear = new Date().getFullYear();
        if (yearElement && yearElement.textContent != currentYear) {
            yearElement.textContent = currentYear;
        }
    }
// Ejecutar al cargar y ante cambios en el DOM (útil para SPA/PWA)
    document.addEventListener('DOMContentLoaded', updateCopyrightYear);
    const observer = new MutationObserver(updateCopyrightYear);
    observer.observe(document.body, { childList: true, subtree: true });


// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', updateCopyrightYear);

// También actualizar si hay cambios en el DOM (para SPA/PWA)
document.addEventListener('DOMSubtreeModified', updateCopyrightYear);