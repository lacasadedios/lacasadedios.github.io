document.getElementById("formContacto").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
    };

    try {
        const respuesta = await fetch("https://script.google.com/macros/s/AKfycbwo8vaKHF-6jR8mdRXH35HGUP1hLXsyEC_yQlg_kFnxqBHFE9pA0oyKUG8l8bAfSkOQ/exec", {
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

