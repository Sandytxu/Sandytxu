fetch("../bd/maquinas.json").then(response => response.json()).then(data=> {
    //Aqui trabajo cno los datos cargados desde el json.
    //Obetnemos el contenedor donde se mostrarán las tarjetas.
    const maquinasContainer = document.getElementById("maquinas-container");

    //Recorremos el JSON y creamos las tarjetas
    data.maquinas_resueltas.forEach(maquina => {
        //Creamos una tarjeta para cáda máquina virtual
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        //Contenido de la tarjeta
        tarjeta.innerHTML = `
        <h2>${maquina.nombre}</h2>
        <p><strong>Web:</strong> ${maquina.web}</p>
        <p><strong>IP:</strong> ${maquina.ip}</p>
        <p><strong>Vulnerabilidades:</strong> ${maquina.vulnerabilidades.join(", ")}</p>
        <p><strong>Descripción:</strong> ${maquina.descripcion}</p>
        <button class="boton-writeup" onclick="window.open('${maquina.writeup}')">Ver writeup</button>
    `;

    //Agregamos la tarjeta al contenedor
    maquinasContainer.appendChild(tarjeta);
    })

    console.log(data);
}).catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
});