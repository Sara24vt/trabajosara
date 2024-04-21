const maxPersons = 6;
const maxSongs = 3;

const personas = [];

function agregarPersona() {
    if (personas.length >= maxPersons) {
        console.log("Se ha alcanzado el límite de personas.");
        return;
    }

    const persona = {
        nombre: prompt("Ingrese el nombre de la persona:"),
        cedula: prompt("Ingrese el número de identificación (cédula):"),
        fechaNacimiento: prompt("Ingrese la fecha de nacimiento:"),
        correo: prompt("Ingrese el correo electrónico:"),
        residencia: prompt("Ingrese la ciudad de residencia:"),
        origen: prompt("Ingrese la ciudad de origen:")
    };

    persona.cancionesFavoritas = [];
    for (let i = 0; i < maxSongs; i++) {
        const artista = prompt(`Ingrese el artista de la canción favorita ${i + 1}:`);
        const titulo = prompt(`Ingrese el título de la canción favorita ${i + 1}:`);
        persona.cancionesFavoritas.push({ artista, titulo });
    }

    personas.push(persona);
    console.log("Persona agregada correctamente.");
}

function mostrarInfoPersona(posicion) {
    if (posicion >= 0 && posicion < personas.length) {
        const persona = personas[posicion];
        console.log("Información de la persona:");
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Cédula: ${persona.cedula}`);
        console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        console.log(`Correo Electrónico: ${persona.correo}`);
        console.log(`Ciudad de Residencia: ${persona.residencia}`);
        console.log(`Ciudad de Origen: ${persona.origen}`);
        console.log("Canciones Favoritas:");
        persona.cancionesFavoritas.forEach((cancion, index) => {
            console.log(`Canción ${index + 1}: ${cancion.titulo} - ${cancion.artista}`);
        });
    } else {
        console.log("Posición inválida.");
    }
}

function mostrarMenu() {
    console.log("=== Menú ===");
    console.log("a. Agregar una persona");
    console.log("b. Mostrar información de una persona por posición");
    console.log("x. Salir");
}

function main() {
    let opcion = "";
    while (opcion !== "x") {
        mostrarMenu();
        opcion = prompt("Seleccione una opción:");
        switch (opcion) {
            case "a":
                agregarPersona();
                break;
            case "b":
                const posicion = parseInt(prompt("Ingrese la posición de la persona:"));
                mostrarInfoPersona(posicion);
                break;
            case "x":
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción inválida.");
        }
    }
}

main();
