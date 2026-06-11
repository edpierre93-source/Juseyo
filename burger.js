const body = document.querySelector("body")
const nav = document.querySelector("nav")
const sidebarOpen = document.querySelector(".sidebar-open")
const sidebarClose = document.querySelector(".sidebar-close")

// js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active")
})
body.addEventListener('click', e => {
    let clickedElm = e.target

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
    nav.classList.remove("active")
    }
})