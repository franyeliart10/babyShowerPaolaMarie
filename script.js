/* =========================================================
   ELEMENTOS PRINCIPALES
   ========================================================= */

const portada = document.getElementById("portada");
const invitacion = document.getElementById("invitacion");
const abrirInvitacion = document.getElementById("abrirInvitacion");
const transicion = document.getElementById("transicion");

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");
const textoMusica = document.getElementById("textoMusica");


/* =========================================================
   ABRIR INVITACIÓN
   ========================================================= */

if (abrirInvitacion) {
  abrirInvitacion.addEventListener("click", () => {

    if (transicion) {
      transicion.classList.add("activa");
    }

    setTimeout(() => {

      portada.style.display = "none";

      invitacion.style.display = "block";
      invitacion.classList.add("visible");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

      if (transicion) {
        setTimeout(() => {
          transicion.classList.remove("activa");
        }, 150);
      }

    }, 650);

  });
}


/* =========================================================
   MÚSICA
   ========================================================= */

function reproducirMusica() {

  if (!musica) {
    return;
  }

  musica.play()
    .then(() => {

      if (botonMusica) {
        botonMusica.classList.add("reproduciendo");
      }

      if (textoMusica) {
        textoMusica.textContent = "MÚSICA ACTIVADA";
      }

    })
    .catch((error) => {
      console.log("No se pudo reproducir la música:", error);
    });
}


function pausarMusica() {

  if (!musica) {
    return;
  }

  musica.pause();

  if (botonMusica) {
    botonMusica.classList.remove("reproduciendo");
  }

  if (textoMusica) {
    textoMusica.textContent = "TOCA PARA ESCUCHAR";
  }
}


function alternarMusica() {

  if (!musica) {
    return;
  }

  if (musica.paused) {
    reproducirMusica();
  } else {
    pausarMusica();
  }
}


if (botonMusica) {
  botonMusica.addEventListener("click", alternarMusica);
}


if (textoMusica) {
  textoMusica.addEventListener("click", alternarMusica);
}


/* =========================================================
   CUENTA REGRESIVA
   ========================================================= */

const fechaEvento = new Date("2026-11-01T15:00:00");

const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

const mensajeContador = document.getElementById("mensajeContador");


function actualizarCuentaRegresiva() {

  const ahora = new Date();

  const diferencia = fechaEvento.getTime() - ahora.getTime();

  if (diferencia <= 0) {

    if (diasElemento) diasElemento.textContent = "00";
    if (horasElemento) horasElemento.textContent = "00";
    if (minutosElemento) minutosElemento.textContent = "00";
    if (segundosElemento) segundosElemento.textContent = "00";

    return;
  }

  const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferencia / (1000 * 60 * 60)) % 24
  );

  const minutos = Math.floor(
    (diferencia / (1000 * 60)) % 60
  );

  const segundos = Math.floor(
    (diferencia / 1000) % 60
  );


  if (diasElemento) {
    diasElemento.textContent = String(dias).padStart(2, "0");
  }

  if (horasElemento) {
    horasElemento.textContent = String(horas).padStart(2, "0");
  }

  if (minutosElemento) {
    minutosElemento.textContent = String(minutos).padStart(2, "0");
  }

  if (segundosElemento) {
    segundosElemento.textContent = String(segundos).padStart(2, "0");
  }
}


actualizarCuentaRegresiva();

setInterval(actualizarCuentaRegresiva, 1000);


/* =========================================================
   INTERACCIÓN DE LA CUENTA REGRESIVA
   ========================================================= */

const contadorItems = document.querySelectorAll(".contador-item");

contadorItems.forEach((item) => {

  item.addEventListener("click", () => {

    const tipo = item.dataset.tipo || "";

    if (!mensajeContador) {
      return;
    }

    mensajeContador.textContent =
      `Cada ${tipo} cuenta para conocer a Paola Marie ♡`;

    mensajeContador.classList.add("visible");

    clearTimeout(item._mensajeTimeout);

    item._mensajeTimeout = setTimeout(() => {
      mensajeContador.classList.remove("visible");
    }, 2200);

  });

});


/* =========================================================
   BOTÓN CALENDARIO
   ========================================================= */

const calendarioBtn = document.getElementById("calendarioBtn");

if (calendarioBtn) {

  calendarioBtn.addEventListener("click", () => {

    const titulo = encodeURIComponent(
      "Baby Shower Paola Marie"
    );

    const detalles = encodeURIComponent(
      "Baby Shower de Paola Marie ♡"
    );

    const ubicacion = encodeURIComponent(
      "Silver Club"
    );

    const inicio = "20261101T130000";
    const fin = "20261101T200000";

    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      `&text=${titulo}` +
      `&dates=${inicio}/${fin}` +
      `&details=${detalles}` +
      `&location=${ubicacion}`;

    window.open(url, "_blank");

  });

}


/* =========================================================
   DRESS CODE
   ========================================================= */

const colores = document.querySelectorAll(".color-btn");
const mensajeColor = document.getElementById("mensajeColor");

colores.forEach((boton) => {

  boton.addEventListener("click", () => {

    const color = boton.dataset.color || "";

    if (mensajeColor) {

      mensajeColor.textContent =
        `Elegiste ${color} ♡`;

      mensajeColor.classList.add("visible");

      clearTimeout(boton._colorTimeout);

      boton._colorTimeout = setTimeout(() => {
        mensajeColor.classList.remove("visible");
      }, 2200);

    }

  });

});


/* =========================================================
   FRESITAS RSVP
   ========================================================= */

const fresas = document.querySelectorAll(".grafico-fresa");

fresas.forEach((fresa) => {

  fresa.addEventListener("click", () => {

    fresa.classList.remove("animada");

    void fresa.offsetWidth;

    fresa.classList.add("animada");

  });

});


/* =========================================================
   RSVP WHATSAPP
   ========================================================= */

const rsvpSi = document.getElementById("rsvpSi");
const rsvpNo = document.getElementById("rsvpNo");


/*
   Cambia este número por el número de WhatsApp
   que ya utilizabas en tu invitación.
*/

const numeroWhatsApp = "0000000000";


if (rsvpSi) {

  rsvpSi.addEventListener("click", (event) => {

    event.preventDefault();

    const mensaje = encodeURIComponent(
      "Hola ♡ Confirmo mi asistencia al Baby Shower de Paola Marie. ¡Allí estaré!"
    );

    const url =
      `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(url, "_blank");

  });

}


if (rsvpNo) {

  rsvpNo.addEventListener("click", (event) => {

    event.preventDefault();

    const mensaje = encodeURIComponent(
      "Hola ♡ Gracias por la invitación al Baby Shower de Paola Marie. Lamentablemente no podré asistir."
    );

    const url =
      `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(url, "_blank");

  });

}


/* =========================================================
   ANIMACIÓN AL ENTRAR EN CADA SECCIÓN
   ========================================================= */

const secciones = document.querySelectorAll(".seccion");


const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("activa");

      }

    });

  },
  {
    threshold: 0.12
  }
);


secciones.forEach((seccion) => {
  observer.observe(seccion);
});


/* =========================================================
   ACTIVAR LA PRIMERA SECCIÓN
   ========================================================= */

const primeraSeccion = document.querySelector(".seccion");

if (primeraSeccion) {
  primeraSeccion.classList.add("activa");
}