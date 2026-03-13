// Navbar muda ao rolar
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function copiarPix() {
    let chave = document.getElementById("chavePix").innerText;
    navigator.clipboard.writeText(chave);
    
}
