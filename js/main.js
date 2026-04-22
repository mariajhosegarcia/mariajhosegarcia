document.addEventListener('DOMContentLoaded', () => {
    // Email Protection Logic
    const emailDisplay = document.getElementById('email-display');
    const copyStatus = document.getElementById('copy-status');
    
    // Obfuscated email components
    const user = "hola";
    const domain = "mariajosegarcia.com";
    const fullEmail = `${user}@${domain}`;

    if (emailDisplay) {
        emailDisplay.addEventListener('click', () => {
            // Reveal email
            emailDisplay.textContent = fullEmail;
            
            // Copy to clipboard
            navigator.clipboard.writeText(fullEmail).then(() => {
                copyStatus.textContent = "¡Copiado al portapapeles!";
                setTimeout(() => {
                    copyStatus.textContent = "";
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar: ', err);
                copyStatus.textContent = "No se pudo copiar automáticamente.";
            });
        });
    }

    // Scroll Animations (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });

    // Skills accordion logic
    document.querySelectorAll('.skill-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });
});

