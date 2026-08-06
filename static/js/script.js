document.addEventListener("DOMContentLoaded", () => {

    let currentLang = "es";

    const langBtn = document.getElementById("langBtn");

    langBtn.addEventListener("click", () => {

        currentLang = currentLang === "es" ? "en" : "es";

        langBtn.textContent =
            currentLang === "es"
                ? "EN / English"
                : "ES / Español";

        document.querySelectorAll("[data-es][data-en]").forEach(element => {
            element.innerHTML = element.dataset[currentLang];
        });

    });

});