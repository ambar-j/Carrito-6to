let productoseleccionado = JSON.parse(localStorage.getItem("carrito"));

function cargarCarrito() {
    if (!productoseleccionado) {
        console.log("No hay producto en el carrito.");
        return;
    }

    let cantidad = productoseleccionado.cantidad || 1;
    let total = productoseleccionado.precio * cantidad;

    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td><img src="${productoseleccionado.imagen}" alt="${productoseleccionado.nombre}" style="width:60px;"></td>            
        <td>
            <input class="editar-btn" type="number" value="${cantidad}" min="1" max="${productoseleccionado.stock}"
                   onchange="actualizarTotal(this, ${productoseleccionado.precio})">
        </td>            
        <td>${productoseleccionado.nombre}</td>   
        <td>$${productoseleccionado.precio.toLocaleString()}</td>         
        <td class="total">$${total.toLocaleString()}</td>            
        <td><button class="editar-btn" onclick="editarProducto()">X</button></td>
    `;

    document.getElementById("listadeproductos").appendChild(fila);
}

function actualizarTotal(input, precio) {
    const cantidad = parseInt(input.value);
    const totalCelda = input.parentElement.parentElement.querySelector(".total");
    const total = cantidad * precio;
    totalCelda.textContent = `$${total.toLocaleString()}`;
}

function editarProducto() {
    alert("Funcionalidad de edición pendiente...");
}

cargarCarrito();
