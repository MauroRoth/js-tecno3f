// OBTENER LA CITA BIBLICA DE LA API
async function getBibles(citaBiblica) {
    const API_URL = `https://bible-api.com/${citaBiblica}`; 
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        if (!response.ok) { 
            throw new Error(`Error HTTP! Estado: ${response.status}`); 
        }

        const data = await response.json(); 

        return data;
    } catch (error) { return error; }
}

// MANEJO DEL DOM PARA COLOCAR LA CITA
async function citaEnDOM(citaBiblica){
    const data = await getBibles(citaBiblica);
   
    const template = document.getElementById('cita-biblica'); 
    const contenedorCita = document.getElementById('contenedor-cita'); 
    const citaClon = template.content.cloneNode(true);

    contenedorCita.innerHTML = '';
    citaClon.querySelector('[data-id="referencia"]').textContent = data.reference;
    citaClon.querySelector('[data-id="texto-cita"]').textContent = data.text;
    
    contenedorCita.appendChild(citaClon);
}

// FORMULARIO BÚSQUEDA CITA BIBLICA
function formularioBusqueda(){
    const formulario = document.getElementById("formularioBusqueda");

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const inputBusqueda = document.getElementById("busqueda");

        const citaBiblica = inputBusqueda.value;

        if (citaBiblica.trim() === "") {
            alert("Por favor, ingresa una cita bíblica (ej: Jn3:16-21).");
            return;
        }

        citaEnDOM(citaBiblica);

        inputBusqueda.value = "";
    });

}

citaEnDOM('Jn3:16-21'); // Cita que se muestra al inicio.
formularioBusqueda(); // Cita a partir del ingreso de datos al formulario.





