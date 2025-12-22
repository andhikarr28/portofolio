// 1. Ambil semua elemen link di dalam navbar
const navLinks = document.querySelectorAll('.menu ul li a');

// 2. Berikan fungsi pada setiap link saat diklik
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Mencegah perilaku default (langsung loncat/ganti URL)
        e.preventDefault();

        // Ambil target tujuan dari atribut href (misal: "#about")
        const targetId = this.getAttribute('href');
        
        // Cari elemen section yang punya ID tersebut
        const targetSection = document.querySelector(targetId);

        // Jika section ditemukan, lakukan scroll halus
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Scroll sampai bagian atas section pas di atas layar
            });
        }
    });
});