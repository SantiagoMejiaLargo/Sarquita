// Configura la fecha de inicio del amor (puedes cambiarla)
const loveStartDate = new Date();
loveStartDate.setDate(loveStartDate.getDate() - 791);
loveStartDate.setHours(loveStartDate.getHours() - 23);
loveStartDate.setMinutes(loveStartDate.getMinutes() - 40);
loveStartDate.setSeconds(loveStartDate.getSeconds() - 6);

function updateTimer() {
  const now = new Date();
  const diff = now - loveStartDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById(
    "counter"
  ).textContent = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

// Actualizar el contador cada segundo
updateTimer();
setInterval(updateTimer, 1000);

// Crear corazones flotantes
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");

  // Posición aleatoria
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";

  // Tamaño aleatorio
  const size = Math.random() * 2 + 1;
  heart.style.fontSize = size + "rem";

  // Duración de animación aleatoria
  const duration = Math.random() * 3 + 2;
  heart.style.animationDuration = duration + "s";

  document.getElementById("heartsContainer").appendChild(heart);

  // Eliminar el corazón después de que termine la animación
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Crear corazones periódicamente
setInterval(createHeart, 300);
