document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");
  let english = false;
  langBtn.addEventListener("click", () => {
    english = !english;
    langBtn.textContent = english ? "ES / Español" : "EN / English";
    document.documentElement.lang = english ? "en" : "es";
    if (english) {
      document.querySelector(".hero .eyebrow").textContent = "INCLUSION · TALENT · OPPORTUNITIES";
      document.querySelector(".hero h1").innerHTML = 'JobXp: <span>Work Micro-Experiences</span>';
      document.querySelector(".hero p").textContent = "An assisted inclusion platform connecting young people without experience with real work opportunities in Chile.";
      document.querySelector(".primary-btn").textContent = "Discover the solution";
      document.querySelector(".secondary-btn").textContent = "Meet the team";
    } else {
      document.querySelector(".hero .eyebrow").textContent = "INCLUSIÓN · TALENTO · OPORTUNIDADES";
      document.querySelector(".hero h1").innerHTML = 'JobXp: <span>Microexperiencias Laborales</span>';
      document.querySelector(".hero p").textContent = "Plataforma de inclusión asistida que conecta a jóvenes sin experiencia con oportunidades laborales reales en Chile.";
      document.querySelector(".primary-btn").textContent = "Conocer la solución";
      document.querySelector(".secondary-btn").textContent = "Ver equipo";
    }
  });
});