/* ════════════════════════════════════════════════════════════════
   KSF CYBER RADIO - LÓGICA DE CONTROL Y REPRODUCCIÓN PREMIUM
   ════════════════════════════════════════════════════════════════ */

// ── Respaldo de Canciones con Duraciones Reales (Evita fallos CORS en local/file://) ──
const BACKUP_CANCIONES = [
  {
    "id": "cancion_01",
    "artista": "Alan Walker",
    "titulo": "Fade",
    "duracion_segundos": 260,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Alan%20Walker%20-%20Fade%20%5BCOPYRIGHTED%20NCS%20Release%5D%20%5BD9syciL3Xsg%5D.mp3"
  },
  {
    "id": "cancion_02",
    "artista": "Alan Walker",
    "titulo": "Spectre",
    "duracion_segundos": 226,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Alan%20Walker%20-%20Spectre%20%5BCOPYRIGHTED%20NCS%20Release%5D%20%5BBSDPQ1uP7GI%5D.mp3"
  },
  {
    "id": "cancion_03",
    "artista": "Cartoon, Jéja",
    "titulo": "C U Again ft. Mikk Mäe",
    "duracion_segundos": 203,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Cartoon,%20J%C3%A9ja%20-%20C%20U%20Again%20ft.%20Mikk%20M%C3%A4e%20(Cartoon,%20J%C3%A9ja,%20Futuristik%20VIP)%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BNJNp6DnAAIo%5D.mp3"
  },
  {
    "id": "cancion_04",
    "artista": "Cartoon, Jéja",
    "titulo": "On & On (feat. Daniel Levi)",
    "duracion_segundos": 180,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Cartoon,%20J%C3%A9ja%20-%20On%20&%20On%20(feat.%20Daniel%20Levi)%20%EF%BD%9C%20Electronic%20Pop%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BK4DyBUG242c%5D.temp.mp3"
  },
  {
    "id": "cancion_05",
    "artista": "DEAF KEV",
    "titulo": "Invincible",
    "duracion_segundos": 273,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/DEAF%20KEV%20-%20Invincible%20%EF%BD%9C%20Glitch%20Hop%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BJ2X5mJ3HDYE%5D.mp3"
  },
  {
    "id": "cancion_06",
    "artista": "Desmeon",
    "duracion_segundos": 226,
    "titulo": "Hellcat",
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Desmeon%20-%20Hellcat%20%EF%BD%9C%20Drumstep%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BJSY6vBPunpY%5D.mp3"
  },
  {
    "id": "cancion_07",
    "artista": "Different Heaven & EH!DE",
    "titulo": "My Heart",
    "duracion_segundos": 267,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Different%20Heaven%20&%20EH!DE%20-%20My%20Heart%20%EF%BD%9C%20Drumstep%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BjK2aIUmmdP4%5D.mp3"
  },
  {
    "id": "cancion_08",
    "artista": "Disfigure",
    "titulo": "Blank",
    "duracion_segundos": 209,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Disfigure%20-%20Blank%20%EF%BD%9C%20Melodic%20Dubstep%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5Bp7ZsBPK656s%5D.mp3"
  },
  {
    "id": "cancion_09",
    "artista": "Electro-Light",
    "titulo": "Symbolism",
    "duracion_segundos": 291,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Electro-Light%20-%20Symbolism%20%EF%BD%9C%20Trap%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5B__CRWE-L45k%5D.mp3"
  },
  {
    "id": "cancion_10",
    "artista": "Elektronomia",
    "titulo": "Sky High",
    "duracion_segundos": 238,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Elektronomia%20-%20Sky%20High%20%EF%BD%9C%20Progressive%20House%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BTW9d8vYrVFQ%5D.mp3"
  },
  {
    "id": "cancion_11",
    "artista": "Lost Sky",
    "titulo": "Dreams pt. II (feat. Sara Skinner)",
    "duracion_segundos": 215,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Lost%20Sky%20-%20Dreams%20pt.%20II%20(feat.%20Sara%20Skinner)%20%EF%BD%9C%20Trap%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5BL7kF4MXXCoA%5D.mp3"
  },
  {
    "id": "cancion_12",
    "artista": "Spektrem",
    "titulo": "Shine",
    "duracion_segundos": 259,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Spektrem%20-%20Shine%20%EF%BD%9C%20Progressive%20House%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5Bn4tK7LYFxI0%5D.mp3"
  },
  {
    "id": "cancion_13",
    "artista": "Syn Cole",
    "titulo": "Feel Good",
    "duracion_segundos": 182,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/Syn%20Cole%20-%20Feel%20Good%20%EF%BD%9C%20Future%20House%20%EF%BD%9C%20NCS%20-%20Copyright%20Free%20Music%20%5Bq1ULJ92aldE%5D.mp3"
  },
  {
    "id": "cancion_14",
    "artista": "TheFatRat",
    "titulo": "Fly Away feat. Anjulie",
    "duracion_segundos": 194,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20Fly%20Away%20feat.%20Anjulie%20%5BcMg8KaMdDYo%5D.mp3"
  },
  {
    "id": "cancion_15",
    "artista": "TheFatRat",
    "titulo": "Jackpot",
    "duracion_segundos": 196,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20Jackpot%20(Jackpot%20EP%20Track%201)%20%5BkL8CyVqzmkc%5D.mp3"
  },
  {
    "id": "cancion_16",
    "artista": "TheFatRat",
    "titulo": "Monody (feat. Laura Brehm)",
    "duracion_segundos": 291,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20Monody%20(feat.%20Laura%20Brehm)%20%5BB7xai5u_tnk%5D.mp3"
  },
  {
    "id": "cancion_17",
    "artista": "TheFatRat",
    "titulo": "Never Be Alone",
    "duracion_segundos": 263,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20Never%20Be%20Alone%20%5BIc-gZlPFTkQ%5D.mp3"
  },
  {
    "id": "cancion_18",
    "artista": "TheFatRat",
    "titulo": "The Calling (feat. Laura Brehm)",
    "duracion_segundos": 234,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20The%20Calling%20(feat.%20Laura%20Brehm)%20%5BKR-eV7fHNbM%5D.mp3"
  },
  {
    "id": "cancion_19",
    "artista": "TheFatRat",
    "titulo": "Time Lapse",
    "duracion_segundos": 185,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20Time%20Lapse%20%5B3fxq7kqyWO8%5D.mp3"
  },
  {
    "id": "cancion_20",
    "artista": "TheFatRat",
    "titulo": "Xenogenesis",
    "duracion_segundos": 236,
    "url_audio": "https://github.com/Katthon/radio-assets/raw/refs/heads/main/TheFatRat%20-%20Xenogenesis%20(Outro%20Song)%20%5B2Ax_EIb1zks%5D.mp3"
  }
];

// ── Estado Global del Reproductor ─────────────────────────────────
let canciones = [...BACKUP_CANCIONES]; // Se poblará por fetch o fallback
let cancionActual = null;
let modoVivo = true; // true: Sincronizado en vivo, false: On-demand (Manual tuning)
let indexManual = 0; // Índice usado en modo on-demand
let audio = new Audio();
let trackerInterval = null;
let safetyTimeout = null;

// ── Elementos del DOM ─────────────────────────────────────────────
const radioDeck         = document.getElementById("radioDeck");
const liveIndicator     = document.getElementById("liveIndicator");
const liveText          = document.getElementById("liveText");
const signalStrength    = document.getElementById("signalStrength");
const trackTitle        = document.getElementById("trackTitle");
const trackArtist       = document.getElementById("trackArtist");
const progressBarFill   = document.getElementById("progressBarFill");
const progressBarGhost  = document.getElementById("progressBarGhost");
const progressBarContainer = document.getElementById("progressBarContainer");
const timeCurrent       = document.getElementById("timeCurrent");
const timeTotal         = document.getElementById("timeTotal");
const btnPlayPause      = document.getElementById("btnPlayPause");
const playPath          = document.getElementById("playPath");
const volSlider         = document.getElementById("volSlider");
const volFillTrack      = document.getElementById("volFillTrack");
const volPct            = document.getElementById("volPct");
const statusMessage     = document.getElementById("statusMessage");
const songCounter       = document.getElementById("songCounter");
const staticOverlay     = document.getElementById("staticOverlay");

// Playlist Sidebar
const playlistSidebar   = document.getElementById("playlistSidebar");
const btnPlaylistToggle = document.getElementById("btnPlaylistToggle");
const btnCloseSidebar   = document.getElementById("btnCloseSidebar");
const playlistListContainer = document.getElementById("playlistListContainer");
const btnLiveTune       = document.getElementById("btnLiveTune");
const btnInfoToggle     = document.getElementById("btnInfoToggle");
const discContainer     = document.getElementById("discContainer");

// Modal de Información (About / Help)
const infoModal         = document.getElementById("infoModal");
const infoModalBackdrop = document.getElementById("infoModalBackdrop");
const btnCloseInfo      = document.getElementById("btnCloseInfo");
const btnModalLiveSync  = document.getElementById("btnModalLiveSync");

// Canvas
const waveCanvas        = document.getElementById("waveCanvas");
const ctx               = waveCanvas.getContext("2d");

// ── Ajustar Dimensiones del Canvas ────────────────────────────────
function resizeCanvas() {
  waveCanvas.width = waveCanvas.parentElement.clientWidth;
  waveCanvas.height = waveCanvas.parentElement.clientHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// ── Helpers de Formateo ───────────────────────────────────────────
const fmtTime = s => {
  if (isNaN(s) || s === Infinity) return "00:00";
  const sec = Math.max(0, Math.floor(s));
  const m = Math.floor(sec / 60);
  const r = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
};

// ── Inicializar Playlist en el Sidebar ─────────────────────────────
function renderPlaylist() {
  playlistListContainer.innerHTML = canciones.map((s, idx) => `
    <div class="playlist-item" data-index="${idx}" id="pl-item-${idx}">
      <span class="pl-num">${String(idx + 1).padStart(2, "0")}</span>
      <div class="pl-details">
        <h4 class="pl-title">${s.titulo}</h4>
        <p class="pl-artist">${s.artista}</p>
      </div>
      <span class="pl-duration">${fmtTime(s.duracion_segundos)}</span>
    </div>
  `).join("");

  // Añadir eventos click a los items
  document.querySelectorAll(".playlist-item").forEach(item => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.getAttribute("data-index"));
      sintonizarCancionManual(idx);
    });
  });
}

function actualizarItemActivoPlaylist() {
  document.querySelectorAll(".playlist-item").forEach(item => item.classList.remove("active"));
  if (cancionActual) {
    const idx = canciones.findIndex(s => s.id === cancionActual.id);
    if (idx !== -1) {
      const activeItem = document.getElementById(`pl-item-${idx}`);
      if (activeItem) {
        activeItem.classList.add("active");
        // Desplazar suavemente el sidebar para mostrar el item activo
        activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }
}

// ── Algoritmo de Sincronización de Radio En Vivo ───────────────────
function obtenerCancionVivoGlobal() {
  // Aseguramos orden consistente
  canciones.sort((a, b) => a.id.localeCompare(b.id));

  // Duración total de la programación (24 canciones loop)
  const duracionTotal = canciones.reduce((acc, s) => acc + s.duracion_segundos, 0);

  // Tiempo UNIX actual en segundos
  const tiempoActual = Math.floor(Date.now() / 1000);

  // Posición del segundo actual dentro del gran bucle continuo
  const segundoEnElBucle = tiempoActual % duracionTotal;

  let tiempoAcumulado = 0;
  for (let s of canciones) {
    if (segundoEnElBucle < tiempoAcumulado + s.duracion_segundos) {
      const offset = segundoEnElBucle - tiempoAcumulado;
      return { cancion: s, offset };
    }
    tiempoAcumulado += s.duracion_segundos;
  }
  return { cancion: canciones[0], offset: 0 };
}

// ── Efecto de Ruido Estático al Sintonizar (Tuning) ──────────────
function dispararEfectoTuning(callback) {
  staticOverlay.classList.add("active");
  statusMessage.textContent = "Sintonizando frecuencia...";
  statusMessage.classList.add("active-song");
  
  // Pequeño bamboleo visual de interferencia
  discContainer.style.transform = "scale(0.9) rotate(-15deg)";
  
  setTimeout(() => {
    staticOverlay.classList.remove("active");
    discContainer.style.transform = "scale(1) rotate(0deg)";
    if (callback) callback();
  }, 400);
}

// ── Reproducción y Control Principal ──────────────────────────────
function reproducir() {
  // Limpiar temporizadores anteriores
  if (trackerInterval) clearInterval(trackerInterval);
  if (safetyTimeout) clearTimeout(safetyTimeout);

  let c = null;
  let offset = 0;

  if (modoVivo) {
    const live = obtenerCancionVivoGlobal();
    c = live.cancion;
    offset = live.offset;
    liveText.textContent = "EN VIVO";
    btnLiveTune.style.borderColor = "var(--neon-pink)";
    btnLiveTune.style.background = "rgba(255, 0, 127, 0.05)";
  } else {
    c = canciones[indexManual];
    offset = 0;
    liveText.textContent = "ON-DEMAND";
    btnLiveTune.style.borderColor = "var(--text-secondary)";
    btnLiveTune.style.background = "transparent";
  }

  cancionActual = c;

  // Actualizar UI con transición de fade suave
  trackTitle.classList.add("fade-out");
  trackArtist.classList.add("fade-out");

  setTimeout(() => {
    trackTitle.textContent = c.titulo;
    trackArtist.textContent = c.artista;
    trackTitle.classList.remove("fade-out");
    trackArtist.classList.remove("fade-out");
    statusMessage.textContent = `${c.artista} — ${c.titulo}`;
    statusMessage.classList.add("active-song");
  }, 250);

  timeTotal.textContent = fmtTime(c.duracion_segundos);
  actualizarItemActivoPlaylist();

  // Cargar audio
  audio.src = c.url_audio;
  audio.volume = parseFloat(volSlider.value);
  audio.load();

  // Posicionar al segundo exacto (solo en modo en vivo)
  audio.onloadedmetadata = () => {
    if (modoVivo) {
      // Si por retrasos de carga el offset excede la duración, vamos a la sig cancion
      if (offset >= c.duracion_segundos) {
        reproducir();
        return;
      }
      audio.currentTime = offset;
    } else {
      audio.currentTime = 0;
    }
  };

  // Reproducir una vez listo
  audio.oncanplay = () => {
    audio.play()
      .then(onAudioPlaying)
      .catch(err => {
        console.log("Auto-play bloqueado o pausado. Esperando click de usuario.", err);
        statusMessage.textContent = "▶ PRESIONA PLAY PARA SINTONIZAR";
        statusMessage.classList.remove("active-song");
        radioDeck.classList.remove("playing");
        setPlayIcon(true);
      });
  };

  audio.onerror = () => {
    console.error("Error al cargar audio:", c.titulo);
    statusMessage.textContent = "INTERRUPCIÓN DE SEÑAL, RECONECTANDO...";
    statusMessage.classList.remove("active-song");
    radioDeck.classList.remove("playing");
    
    // Si falla, reintenta en vivo en 2.5s
    if (safetyTimeout) clearTimeout(safetyTimeout);
    safetyTimeout = setTimeout(() => {
      modoVivo = true;
      reproducir();
    }, 2500);
  };
}

function onAudioPlaying() {
  radioDeck.classList.add("playing");
  setPlayIcon(false);

  // 1. Rastreador de progreso de barra y de tiempo (se actualiza a 60 FPS o similar)
  if (trackerInterval) clearInterval(trackerInterval);
  trackerInterval = setInterval(() => {
    const t = audio.currentTime;
    const dur = cancionActual.duracion_segundos || audio.duration || 1;
    progressBarFill.style.width = Math.min((t / dur) * 100, 100) + "%";
    timeCurrent.textContent = fmtTime(t);
    
    // Fluctúa levemente la fuerza de señal en vivo para dar realismo retro
    if (modoVivo && Math.random() > 0.7) {
      document.querySelectorAll(".sig-bar").forEach(b => {
        b.style.height = (25 + Math.random() * 75) + "%";
      });
    }
  }, 250);

  // 2. Transición perfecta de fin de canción
  // Usamos el evento ended nativo del navegador, que es sumamente preciso
  audio.onended = () => {
    progressBarFill.style.width = "100%";
    if (trackerInterval) clearInterval(trackerInterval);
    
    statusMessage.textContent = "Cargando siguiente pista...";
    
    setTimeout(() => {
      if (modoVivo) {
        // En modo vivo simplemente recalculamos la programación global del reloj
        reproducir();
      } else {
        // En modo manual, pasamos al siguiente tema de la lista
        indexManual = (indexManual + 1) % canciones.length;
        reproducir();
      }
    }, 500);
  };

  // Temporizador de seguridad por si la conexión a internet se congela o tiene lag extremo
  if (safetyTimeout) clearTimeout(safetyTimeout);
  if (modoVivo) {
    const tiempoRestanteMs = (cancionActual.duracion_segundos - audio.currentTime + 0.5) * 1000;
    safetyTimeout = setTimeout(() => {
      // Si la canción debería haber terminado pero no se disparó el ended por congelamiento:
      if (audio.currentTime >= cancionActual.duracion_segundos - 1 || audio.paused) {
        reproducir();
      }
    }, tiempoRestanteMs);
  }
}

// ── Botón Sintonizar / Pausar ─────────────────────────────────────
function togglePlayPause() {
  if (!cancionActual) {
    reproducir();
    return;
  }

  if (audio.paused) {
    if (modoVivo) {
      // Al reanudar en modo VIVO, resincronizamos con el reloj mundial
      dispararEfectoTuning(() => {
        reproducir();
      });
    } else {
      audio.play().then(onAudioPlaying).catch(() => {});
    }
  } else {
    audio.pause();
    radioDeck.classList.remove("playing");
    setPlayIcon(true);
    statusMessage.textContent = "RECEPCIÓN EN PAUSA";
    statusMessage.classList.remove("active-song");
    
    if (trackerInterval) clearInterval(trackerInterval);
    if (safetyTimeout) clearTimeout(safetyTimeout);
    
    // Señal cae a cero
    document.querySelectorAll(".sig-bar").forEach(b => {
      b.style.height = "10%";
    });
  }
}

function setPlayIcon(showPlay) {
  if (showPlay) {
    // Icono de Play
    playPath.setAttribute("d", "M8 5v14l11-7z");
  } else {
    // Icono de Pausa
    playPath.setAttribute("d", "M6 19h4V5H6v14zm8-14v14h4V5h-4z");
  }
}

// ── Cambiar entre Modos En Vivo y Manual ───────────────────────────
function sintonizarCancionManual(idx) {
  modoVivo = false;
  indexManual = idx;
  dispararEfectoTuning(() => {
    reproducir();
  });
}

function volverTransmisionEnVivo() {
  if (modoVivo && !audio.paused) return; // Ya está sintonizado en vivo
  modoVivo = true;
  dispararEfectoTuning(() => {
    reproducir();
  });
}

// ── Controlador de Volumen Modernizado ────────────────────────────
function updateVolume() {
  const val = parseFloat(volSlider.value);
  audio.volume = val;
  volFillTrack.style.width = (val * 100) + "%";
  volPct.textContent = Math.round(val * 100) + "%";
}

volSlider.addEventListener("input", updateVolume);
// Forzar visualización inicial del volumen
updateVolume();

// ── Hover/Ghost visual de progreso ────────────────────────────────
progressBarContainer.addEventListener("mousemove", e => {
  const rect = progressBarContainer.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  progressBarGhost.style.width = Math.min(Math.max(0, pct * 100), 100) + "%";
});

progressBarContainer.addEventListener("mouseleave", () => {
  progressBarGhost.style.width = "0%";
});

progressBarContainer.addEventListener("click", e => {
  // Solo permitimos adelantar en modo Manual/On-demand
  if (modoVivo) {
    statusMessage.textContent = "SEÑAL EN VIVO: BLOQUEO DE TIEMPO REAL";
    statusMessage.classList.add("active-song");
    setTimeout(() => {
      if (cancionActual) {
        statusMessage.textContent = `${cancionActual.artista} — ${cancionActual.titulo}`;
      }
    }, 2000);
    return;
  }
  const rect = progressBarContainer.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * (audio.duration || cancionActual.duracion_segundos || 1);
});

// ── Manejo del Sidebar (Playlist) y Backdrop en Android ───────────
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function openSidebar() {
  playlistSidebar.classList.add("open");
  sidebarBackdrop.classList.add("active");
}

function closeSidebar() {
  playlistSidebar.classList.remove("open");
  sidebarBackdrop.classList.remove("active");
}

function toggleSidebar() {
  if (playlistSidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

btnPlaylistToggle.addEventListener("click", toggleSidebar);
btnCloseSidebar.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);

btnLiveTune.addEventListener("click", () => {
  volverTransmisionEnVivo();
  closeSidebar();
});

// Modal de Información (Event Listeners)
function openInfoModal() {
  infoModal.classList.add("open");
  infoModalBackdrop.classList.add("active");
  // Cerramos el sidebar si está abierto en móvil para evitar superposiciones
  closeSidebar();
}

function closeInfoModal() {
  infoModal.classList.remove("open");
  infoModalBackdrop.classList.remove("active");
}

btnInfoToggle.addEventListener("click", openInfoModal);
btnCloseInfo.addEventListener("click", closeInfoModal);
infoModalBackdrop.addEventListener("click", closeInfoModal);

btnModalLiveSync.addEventListener("click", () => {
  volverTransmisionEnVivo();
  closeInfoModal();
});

btnPlayPause.addEventListener("click", togglePlayPause);

// Gesto táctil Swipe para abrir y cerrar (Altamente optimizado para Android)
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", e => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;
  
  // Solo actuar si el gesto es predominantemente horizontal (evita disparar al hacer scroll vertical en playlist)
  if (Math.abs(diffX) > Math.abs(diffY) * 1.5) {
    if (!playlistSidebar.classList.contains("open")) {
      // Swipe right desde el borde izquierdo (primeros 60px de la pantalla) para abrir
      if (diffX > 70 && touchStartX < 60) {
        openSidebar();
      }
    } else {
      // Swipe left en cualquier lugar para cerrar cuando la barra está abierta
      if (diffX < -70) {
        closeSidebar();
      }
    }
  }
}, { passive: true });

// ── Renderizado del Visualizador de Canvas Holográfico ────────────
let angle = 0;
function animateVisualizer() {
  requestAnimationFrame(animateVisualizer);

  // Limpiar con ligero rastro de desvanecimiento para simular persistencia de fósforo verde/azul
  ctx.fillStyle = "rgba(5, 8, 20, 0.15)";
  ctx.fillRect(0, 0, waveCanvas.width, waveCanvas.height);

  const isPlaying = !audio.paused && audio.currentTime > 0;
  const vol = isPlaying ? audio.volume : 0;
  
  // Incrementar velocidad del visualizador basado en si está tocando música
  if (isPlaying) {
    angle += 0.08;
  } else {
    angle += 0.005; // Ondulación ambiental muy suave en pausa
  }

  // Dibujar 3 capas de ondas neón semi-transparentes
  const waves = [
    { freq: 0.008, amp: isPlaying ? 35 * vol : 4, color: "rgba(0, 240, 255, 0.45)", speed: 1 },
    { freq: 0.015, amp: isPlaying ? 20 * vol : 2, color: "rgba(255, 0, 127, 0.35)", speed: -1.3 },
    { freq: 0.004, amp: isPlaying ? 45 * vol : 6, color: "rgba(139, 92, 246, 0.25)", speed: 0.6 }
  ];

  waves.forEach(w => {
    ctx.beginPath();
    ctx.lineWidth = w.amp > 6 ? 2.5 : 1.2;
    ctx.strokeStyle = w.color;
    
    // Brillo neón nativo del canvas
    ctx.shadowBlur = isPlaying ? 10 : 2;
    ctx.shadowColor = w.color;

    for (let x = 0; x < waveCanvas.width; x++) {
      // Fórmula matemática de superposición sinusoidal
      const y = (waveCanvas.height / 2) + 
                Math.sin(x * w.freq + angle * w.speed) * w.amp + 
                Math.cos(x * 0.02 - angle * 0.5) * (w.amp * 0.25);
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  });
  
  // Apagar glow para otras operaciones de canvas
  ctx.shadowBlur = 0;
}

// ── Carga de Datos desde JSON o Fallback Local ─────────────────────
async function cargarCanciones() {
  statusMessage.textContent = "Conectando al servidor KSF...";
  try {
    // Intentamos cargar el JSON local
    const response = await fetch("./RadioAssets.json");
    if (!response.ok) throw new Error("Fallo al obtener respuesta de red");
    
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      canciones = data;
      console.log("Canciones cargadas con éxito desde RadioAssets.json.");
    }
  } catch (error) {
    console.warn("Fallo el fetch de RadioAssets.json (CORS en local o archivo inexistente). Usando respaldo embebido:", error);
    // canciones ya está inicializado con BACKUP_CANCIONES, así que no hacemos nada
  } finally {
    songCounter.textContent = `${canciones.length} CANCIONES`;
    renderPlaylist();
    
    // Iniciar con transmisión en vivo sincronizada por defecto
    modoVivo = true;
    reproducir();
  }
}

// ── Ejecutar Inicio de la Aplicación ──────────────────────────────
cargarCanciones();
animateVisualizer();
