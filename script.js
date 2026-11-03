// Navigasi mobile: tutup menu setelah link dipilih.
document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu && menu.classList.contains('show') && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Form kontak ini masih demo; belum terhubung ke server pengirim pesan.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const alertBox = document.getElementById('formAlert');
    if (!nama || !email || !pesan) {
      alertBox.textContent = 'Harap isi semua kolom terlebih dahulu.';
      alertBox.className = 'alert alert-warning mt-3';
      return;
    }
    alertBox.textContent = 'Terima kasih, ' + nama + '! Formulir berhasil diperiksa. Ini hanya demo; pesan belum dikirim.';
    alertBox.className = 'alert alert-success mt-3';
    contactForm.reset();
  });
}
