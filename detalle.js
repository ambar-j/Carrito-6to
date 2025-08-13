let productoseleccionado = JSON.parse(localStorage.getItem("detalle"));
let contador = 0;
function cargarproducto() {

     let parrafo = document.createElement("div");
        parrafo.id="boxproducto";
        parrafo.innerHTML = `
        <div>
            <h2 id="nombreproducto">${productoseleccionado.nombre}</h2>
            <h3 id="precioproducto">${productoseleccionado.precio}</h3>
            <img src="${productoseleccionado.imagen}" alt="" id="imagenproducto" >
            <p id="descripcionproducto">${productoseleccionado.descripcion}</p>
            <p id="stockproducto">Stock : ${productoseleccionado.stock}</p>
                <div id="boxcontador">
                    <button id="sumarproducto" onclick="sumarproducto()">+</button>
                    <p id="pcontador">0</p>
                    <button id="restarproducto" onclick="restarproducto()">-</button>
                </div>
            <button id="agregarproducto" onclick ="agregarcarrito()">Agregar productos</button>
        <div>
        `
        document.getElementById("boxproductos").appendChild(parrafo);


}

cargarproducto()

function sumarproducto() {
    contador = contador + 1;
    document.getElementById("pcontador").innerText = contador;

}

function restarproducto() {
    contador = contador - 1;
    document.getElementById("pcontador").innerText = contador;
}

function agregarcarrito() {
    let productojson = JSON.stringify(productoseleccionado);
    localStorage.setItem("carrito", productojson);
    window.location.href = "carrito.html";
}