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

async function citaEnDOM(citaBiblica){
    const data = await getBibles(citaBiblica);
   
    const template = document.getElementById('cita-biblica'); 
    const contenedorCita = document.getElementById('contenedor-cita'); 
    const citaClon = template.content.cloneNode(true);

    citaClon.querySelector('[data-id="referencia"]').textContent = data.reference;
    citaClon.querySelector('[data-id="texto-cita"]').textContent = data.text;
    
    contenedorCita.appendChild(citaClon);
}

const citaBiblica = 'Isa13:16-18';

getBibles(citaBiblica)
    .then(data => console.log('Datos de la Biblia obtenidos: ',data));
    
citaEnDOM(citaBiblica);



