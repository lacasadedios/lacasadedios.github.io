document.getElementById("formContacto").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
    };

    try {
        const respuesta = await fetch("https://script.google.com/macros/s/AKfycby3oQSkKgVd_p_zLHeKgGVlC02TqJcmTi4ZP02NMZmUd7PYamM1UunWLk83edkKva6m/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const resultado = await respuesta.json();

        if (resultado.success) {
            document.getElementById("mensajeExito").style.display = "block";
            document.getElementById("formContacto").reset();
        } else {
            alert("Error al enviar el mensaje.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un gran problema al enviar el mensaje.");
    }
});

