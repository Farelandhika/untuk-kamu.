function jawabYes() {
  const popup = document.getElementById('popup');
  const hearts = document.getElementById('hearts');
  popup.style.display = 'block';

  // Efek hati-hati terbang
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    hearts.appendChild(heart);

    // Hapus elemen hati setelah animasi selesai
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

function gerak() {
  const button = document.querySelector('.btn.no');
  const x = Math.floor(Math.random() * window.innerWidth - button.clientWidth);
  const y = Math.floor(Math.random() * window.innerHeight - button.clientHeight);

  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
function jawabYes() {
  // Ganti nomor dan pesan sesuai kebutuhan kamu
  const nomor = '62 857-5567-2948'; // Ganti dengan nomor WA kamu (awali dengan 62, tanpa +)
  const pesan = encodeURIComponent('BOLEH AJA!, Aku juga mau kita lebih kenal lebih dekat lagi 😍💖');
  const url = `https://wa.me/${nomor}?text=${pesan}`;

  window.open(url, '_blank');
}

