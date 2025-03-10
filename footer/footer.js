// Cargar el navbar en todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    fetch("/footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el footer:", error));
});