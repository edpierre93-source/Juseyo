const body = document.querySelector("body")
const nav = document.querySelector("nav")
const sidebarOpen = document.querySelector(".sidebar-open")
const sidebarClose = document.querySelector(".sidebar-close")

// js code to toggle sidebar
// 1. Ouvrir la sidebar au clic sur le burger
sidebarOpen.addEventListener("click", (e) => {
    e.stopPropagation(); // Évite que le clic sur le burger déclenche la fermeture du body juste après !
    nav.classList.add("active")
})

// 2. Fermer la sidebar au clic sur le bouton de fermeture
if (sidebarClose) {
    sidebarClose.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

// 3. Fermer la sidebar si on clique n'importe où en dehors du menu
body.addEventListener('click', (e) => {
    let clickedElm = e.target

    // On vérifie si l'élément cliqué n'est PAS le menu et n'est PAS à l'intérieur du menu
    // On utilise .closest() pour s'assurer qu'on ne clique pas sur un sous-élément du menu
    if (!clickedElm.closest(".menu") && !clickedElm.closest(".sidebar-open")) {
        nav.classList.remove("active")
    }
})

