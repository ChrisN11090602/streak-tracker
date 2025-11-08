const completeBtn = document.getElementById("completeDayBtn");
const resetBtn = document.getElementById("resetBtn");
const dayCount = document.getElementById("dayCount");
const streakNameInput = document.getElementById("streakName");
// ⭐ NUEVO ELEMENTO: Contenedor para mostrar la mejor racha
const bestStreakDisplay = document.getElementById("bestStreakDisplay");

let streak = 0;
let streakName = "";
let bestStreak = 0; // ⭐ NUEVA VARIABLE para la mejor racha

// 🧩 Recuperar datos guardados al iniciar
window.addEventListener("DOMContentLoaded", () => {
    const savedStreak = localStorage.getItem("streakCount");
    const savedName = localStorage.getItem("streakName");
    // ⭐ RECUPERAR MEJOR RACHA
    const savedBestStreak = localStorage.getItem("bestStreak");

    if (savedStreak) {
        streak = parseInt(savedStreak);
        dayCount.textContent = streak;
    } else {
        // Si no hay racha guardada, asegúrate de que el contador sea 0
        dayCount.textContent = 0;
    }

    if (savedName) {
        streakName = savedName;
        streakNameInput.value = streakName;
    }

    // ⭐ MOSTRAR MEJOR RACHA AL INICIAR
    if (savedBestStreak) {
        bestStreak = parseInt(savedBestStreak);
        bestStreakDisplay.textContent = `Mejor Racha: ${bestStreak} días`;
    }
});

// ✅ Cuando el usuario hace clic en “Día completado”
completeBtn.addEventListener("click", () => {
    streak++;
    dayCount.textContent = streak;
    localStorage.setItem("streakCount", streak);
    localStorage.setItem("streakName", streakNameInput.value);
    
    // ⭐ ACTUALIZAR LA MEJOR RACHA SI LA ACTUAL ES MAYOR
    if (streak > bestStreak) {
        bestStreak = streak;
        localStorage.setItem("bestStreak", bestStreak);
        bestStreakDisplay.textContent = `Mejor Racha: ${bestStreak} días`;
    }

    animateCounter();
});

// 🔄 Reiniciar racha
resetBtn.addEventListener("click", () => {
    // 1. Antes de reiniciar, verifica si la racha actual es la mejor (ya se hizo arriba)
    
    // 2. Establecer variables y UI a cero/vacío
    streak = 0;
    streakName = "";
    dayCount.textContent = streak;
    streakNameInput.value = "";

    // 3. Eliminar las claves para que la racha parezca "nueva" al recargar.
    //    La "bestStreak" se mantiene.
    localStorage.removeItem("streakCount");
    localStorage.removeItem("streakName");

    animateReset();

    // ✨ Animación visual del botón (rebote/parpadeo)
    resetBtn.style.transform = "scale(0.9)";
    resetBtn.style.transition = "transform 0.1s ease";
    setTimeout(() => {
        resetBtn.style.transform = "scale(1)";
    }, 100);
});

// ✨ Animaciones visuales
function animateCounter() {
    dayCount.style.transform = "scale(1.2)";
    dayCount.style.transition = "transform 0.2s ease";
    setTimeout(() => {
        dayCount.style.transform = "scale(1)";
    }, 200);
}

function animateReset() {
    dayCount.style.color = "#dc2626"; // rojo temporal
    setTimeout(() => {
        dayCount.style.color = "#16a34a"; // verde original
    }, 400);
}