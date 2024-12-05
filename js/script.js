// window.addEventListener("load", function () {
//     document.getElementById("btnSubmit").addEventListener("click", function () {
//         alert("Gracias por contactarnos.");
//     });
// });

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (item) {
    item.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});




/*NUEVO EVENTO GENERAL DE VALIDACION Y ALERTAS */
document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Objeto que guarda los elementos del formulario    
    const formElements = {
        name: document.getElementById("name"),
        surname: document.getElementById("surname"),
        email: document.getElementById("exampleInputEmail1"),
        codigoArea: document.getElementById("codigoarea"),
        telefono: document.getElementById("telefono"),
        floatingTextarea2: document.getElementById("floatingTextarea2"),
        enviarComprobante: document.getElementById("exampleCheck1"),
        opcionRadio: document.getElementsByName("opcionRadio")
    };

    // Selecciona y limpia cualquier mensaje de error previo
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.style.display = "none";
        element.textContent = "";
    });

    let isValid = true;

    // Validación de código de área
    switch (formElements.codigoArea.value) {
        case "011": // Buenos Aires
        case "351": // Córdoba
        case "341": // Rosario
        case "261": // Mendoza
            break;
        case "":
            showError("codigoareaError", "El código de área es requerido.");
            isValid = false;
            break;
        default:
            showError("codigoareaError", "Código de área no válido.");
            isValid = false;
    }

    const radioButtons = formElements.opcionRadio;  
    let isChecked = false;  // Variable para saber si algún radio está seleccionado

    // Recorre todos los radio buttons
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isChecked = true;  // Si hay uno seleccionado, isChecked es true
            break;
        }
    }

    if (!isChecked) {
        showError("opcionRadioError", "Debe seleccionar una opción.");
        isValid = false;
    }


    // Validación de campos requeridos
    Object.entries(formElements).forEach(([key, element]) => {
        if (!element.value && key !== "enviarComprobante" && key !== "opcionRadio") {
            showError(`${key}Error`, "Este campo es requerido.");
            isValid = false;
        }
    });

    // Función para mostrar errores
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

/*una alerta flotante para cuando no se ingrese un dato y sea mas visible que el textInner rojo del html */
    if (!isValid || !isChecked) {
        alert("Error al completar los datos. Intente nuevamente.");

        
    } else{
        alert("Formulario enviado correctamente");
        /* se cambió la alerta y remplazo el evento del submit juntandolo con el evento general del formulario*/
        alert("Gracias por contactarnos.");
    }
});

