const inputCiudad = document.getElementById('ciudadInput');
const boton_registrar = document.getElementById("bnt-signin");

const ciudades = [
    // Amazonas
    "Leticia",
    "Puerto Nariño",
    "Tarapacá",

    // Antioquia
    "Medellín",
    "Bello",
    "Itagüí",
    "Envigado",
    "Sabaneta",
    "Caucasia",
    "Turbo",
    "Rionegro",
    "La Ceja",
    "Brión",
    "Sonsón",
    "Guatapé",
    "Marinilla",
    "Valdivia",
    
    // Atlántico
    "Barranquilla",
    "Soledad",
    "Malambo",
    "Puerto Colombia",
    "Sabanalarga",
    "Baranoa",
    "Palmar de Varela",
    "Juan de Acosta",
    
    // Bolívar
    "Cartagena",
    "Magangué",
    "Turbaco",
    "El Carmen de Bolívar",
    "Santa Rosa del Sur",
    "Arjona",
    "Clemencia",
    
    // Boyacá
    "Tunja",
    "Duitama",
    "Sogamoso",
    "Chiquinquirá",
    "Nobsa",
    "Paipa",
    "Moniquirá",
    
    // Caldas
    "Manizales",
    "Villamaría",
    "Chinchiná",
    "Neira",
    "Palestina",
    "San José",
    
    // Caquetá
    "Florencia",
    "San Vicente del Caguán",
    "La Montañita",
    "Curillo",
    "Valparaíso",
    
    // Casanare
    "Yopal",
    "Aguazul",
    "Hato Corozal",
    "Tauramena",
    "Paz de Ariporo",
    
    // Cauca
    "Popayán",
    "Santander de Quilichao",
    "Caldono",
    "Jambaló",
    "El Tambo",
    
    // Cesar
    "Valledupar",
    "Aguachica",
    "Codazzi",
    "La Paz",
    "Chiriguaná",
    
    // Chocó
    "Quibdó",
    "Bahía Solano",
    "Juradó",
    "Tadó",
    "Condoto",
    
    // Córdoba
    "Montería",
    "Lorica",
    "Planeta Rica",
    "Cereté",
    "Tuchín",
    
    // Cundinamarca
    "Bogotá",
    "Soacha",
    "Chocontá",
    "La Calera",
    "Zipaquirá",
    "Cajicá",
    "Tenjo",
    "Fusagasugá",
    
    // Guainía
    "Inírida",
    
    // Guaviare
    "San José del Guaviare",
    
    // Huila
    "Neiva",
    "Pitalito",
    "La Plata",
    "Garzón",
    
    // La Guajira
    "Riohacha",
    "Maicao",
    "Uribia",
    "Manaure",
    
    // Magdalena
    "Santa Marta",
    "Ciénaga",
    "El Banco",
    "Fundación",
    
    // Meta
    "Villavicencio",
    "Acacías",
    "Restrepo",
    "Granada",
    
    // Nariño
    "Pasto",
    "Ipiales",
    "Tumaco",
    "Pueblo Nuevo",
    
    // Norte de Santander
    "Cúcuta",
    "Pamplona",
    "Ocaña",
    "Los Patios",
    
    // Putumayo
    "Mocoa",
    "Puerto Asís",
    "Orito",
    
    // Quindío
    "Armenia",
    "Calarcá",
    "Quimbaya",
    
    // Risaralda
    "Pereira",
    "Dosquebradas",
    "La Virginia",
    
    // San Andrés y Providencia
    "San Andrés",
    "Providencia",
    
    // Santander
    "Bucaramanga",
    "Floridablanca",
    "Barrancabermeja",
    
    // Sucre
    "Sincelejo",
    "Sampués",
    
    // Tolima
    "Ibagué",
    "Espinal",
    "Honda",
    
    // Valle del Cauca
    "Cali",
    "Palmira",
    "Buga",
    
    // Vaupés
    "Mitú",
    
    // Vichada
    "Puerto Carreño",
    "Santa Rosalía"
];
boton_registrar.addEventListener('click', () =>{
    var estado = 0;
    let input = inputCiudad.value;
    for(let ciudad of ciudades){
        if(ciudad==input){
            estado=1;
        }
    }
    if(!estado){
        alert("CIUDAD INCORRECTA");
    }
    var name = document.getElementById('floatingInput');
    if(name.value.length<3){
        alert("Nombre Incorrecto")
    }
    const inputFecha = document.getElementById('floatingDate');
    const valorFecha = inputFecha.value;
    if (!valorFecha) {
        alert('Por favor selecciona una fecha.');
    }
    const fechaSeleccionada = new Date(valorFecha);
    const fechaActual = new Date();
    if(fechaSeleccionada > fechaActual){
        alert("Fecha Incorrecta");
    }

})

const contenedorRecs = document.createElement('div');
contenedorRecs.className = 'recommendations';
document.querySelector('.form-floating').appendChild(contenedorRecs);


inputCiudad.addEventListener('input', () => {
    const valorInput = inputCiudad.value.toLowerCase().trim();
    contenedorRecs.innerHTML = '';

    const ciudadesFiltradas = ciudades.filter(ciudad => ciudad.toLowerCase().includes(valorInput));

    if (valorInput && ciudadesFiltradas.length > 0) {
        ciudadesFiltradas.forEach(ciudad => {
            const itemRec = document.createElement('div');
            itemRec.className = 'recommendation-item';
            itemRec.textContent = ciudad;
            
            itemRec.addEventListener('click', () => {
                inputCiudad.value = ciudad;
                contenedorRecs.style.display = 'none';
            });

            contenedorRecs.appendChild(itemRec);
        });

        contenedorRecs.style.display = 'block';
    } else {
        contenedorRecs.style.display = 'none';
    }
});

document.addEventListener('click', (evento) => {
    if (!inputCiudad.contains(evento.target) && !contenedorRecs.contains(evento.target)) {
        contenedorRecs.style.display = 'none';
    }
});
