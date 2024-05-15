// JavaScript untuk mengatur animasi garis
const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
  const line = circle.querySelector('.line line');
  const delay = index * 0.5; // menyesuaikan delay antara setiap animasi

  // Animasi fade in dan out
  setInterval(() => {
    line.style.animation = `dash 2s ease-in-out ${delay}s alternate`;
  }, 5000); // mengatur ulang animasi setiap 5 detik
});
