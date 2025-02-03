document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu saat tombol menu ditekan
    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation(); // Mencegah event klik keluar navbar saat tombol ditekan
        navLinks.classList.toggle("nav-active");
    });

    // Tutup menu jika klik di luar navbar
    document.addEventListener("click", function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("nav-active");
        }
    });

    // Form Contact
    document.getElementById("contact-form").addEventListener("submit", function(event) {
     
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Simulasi pengiriman pesan
        setTimeout(() => {
            document.getElementById("form-status").textContent = 
                `Terima kasih, ${name}! Pesan Anda telah dikirim.`;
            document.getElementById("contact-form").reset();
        }, 1000);
    });
});
