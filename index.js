const productos = [
  {
    id: 1,
    nombre: "Refrigerador Samsung RF28R7351SG",
    descripcion: "Refrigerador de 4 puertas con dispensador de agua y hielo, tecnología Twin Cooling Plus, capacidad 28 pies cúbicos",
    precio: 1299.99,
    imagen: "img/helader.webp",
    stock: 15
  },
  {
    id: 2,
    nombre: "Lavadora LG WM3900HWA",
    descripcion: "Lavadora de carga frontal con capacidad de 4.5 pies cúbicos, tecnología TurboWash y WiFi integrado",
    precio: 849.99,
    imagen: "img/lavadora.webp",
    stock: 23
  },
  {
    id: 3,
    nombre: "Microondas Panasonic NN-SN966S",
    descripcion: "Microondas de acero inoxidable con tecnología inverter, 2.2 pies cúbicos, 1250W de potencia",
    precio: 189.99,
    imagen: "img/microondas.webp",
    stock: 45
  },
  {
    id: 4,
    nombre: "Lavavajillas Bosch SHPM88Z75N",
    descripcion: "Lavavajillas empotrable ultra silencioso con tercera bandeja, tecnología PrecisionWash",
    precio: 1199.99,
    imagen: "img/",
    stock: 12
  },
  {
    id: 5,
    nombre: "Aspiradora Dyson V15 Detect",
    descripcion: "Aspiradora inalámbrica con detección láser de partículas, motor Hyperdymium y hasta 60 min de autonomía",
    precio: 749.99,
    imagen: "img/aspiradora.webp",
    stock: 8
  },
  {
    id: 6,
    nombre: "Aire Acondicionado Carrier 53WCE12",
    descripcion: "Aire acondicionado de ventana 12,000 BTU con control remoto y filtro antimicrobiano",
    precio: 449.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 19
  },
  {
    id: 7,
    nombre: "Estufa Whirlpool WFG975H0HZ",
    descripcion: "Estufa de gas de acero inoxidable con 5 quemadores, horno de convección y parrilla integrada",
    precio: 1599.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 6
  },
  {
    id: 8,
    nombre: "Secadora Electrolux EFME627UTT",
    descripcion: "Secadora eléctrica de 8.0 pies cúbicos con sensor de humedad y tecnología Perfect Steam",
    precio: 899.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 14
  },
  {
    id: 9,
    nombre: "Cafetera Keurig K-Elite",
    descripcion: "Cafetera de cápsulas con 5 tamaños de taza, depósito de 75 oz y función de café helado",
    precio: 169.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 32
  },
  {
    id: 10,
    nombre: "Licuadora Vitamix A3500",
    descripcion: "Licuadora de alta potencia con pantalla táctil, tecnología Self-Detect y conectividad inalámbrica",
    precio: 549.99,
    imagen: "img/licuadora.webp",
    stock: 11
  },
  {
    id: 11,
    nombre: "Tostadora Breville BOV900BSS",
    descripcion: "Horno tostador inteligente con 13 funciones preestablecidas, pantalla LCD y interior de acero inoxidable",
    precio: 299.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 27
  },
  {
    id: 12,
    nombre: "Plancha Black+Decker D3030",
    descripcion: "Plancha de vapor digital con suela antiadherente, apagado automático y tanque de 350ml",
    precio: 79.99,
    imagen: "img/plancha.webp",
    stock: 38
  },
  {
    id: 13,
    nombre: "Ventilador Honeywell HYF290B",
    descripcion: "Ventilador de torre oscilante con control remoto, temporizador y 3 velocidades",
    precio: 129.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 22
  },
  {
    id: 14,
    nombre: "Purificador de Aire Levoit Core 300",
    descripcion: "Purificador de aire HEPA para habitaciones hasta 215 pies cuadrados, ultra silencioso",
    precio: 99.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 41
  },
  {
    id: 15,
    nombre: "Freidora de Aire Ninja AF101",
    descripcion: "Freidora de aire de 4 cuartos con 4 funciones programables y cesta antiadherente",
    precio: 99.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 29
  },
  {
    id: 16,
    nombre: "Batidora KitchenAid KSM150PSER",
    descripcion: "Batidora de pie artesanal de 5 cuartos con 10 velocidades y tazón de acero inoxidable",
    precio: 379.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 16
  },
  {
    id: 17,
    nombre: "Calentador de Agua Rheem RTEX-13",
    descripcion: "Calentador de agua eléctrico sin tanque de 13kW para toda la casa con termostato digital",
    precio: 449.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 9
  },
  {
    id: 18,
    nombre: "Extractor de Jugos Omega J8006HDS",
    descripcion: "Extractor de jugos masticador con motor de baja velocidad y 15 años de garantía",
    precio: 299.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 13
  },
  /*
  {
    id: 19,
    nombre: "Humidificador Crane EE-5301W",
    descripcion: "Humidificador ultrasónico de vapor frío con tanque de 2.3 litros y funcionamiento silencioso",
    precio: 59.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 35
  },
  {
    id: 20,
    nombre: "Robot de Cocina Instant Pot Duo 7-en-1",
    descripcion: "Olla de presión eléctrica multifuncional de 6 cuartos con 13 programas inteligentes",
    precio: 99.99,
    imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
    stock: 24
  }*/
];

function cargarproductos() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML = `
                    <h2 id="nombreproducto">${producto.nombre}</h2>
                    <img src="${producto.imagen}" alt="" id="${producto.imagen}">
                    <h3 id="precioproducto">${producto.precio}</h3>
                    <button id="btncomprar" onclick="verdetalle(${producto.id})">Ver</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}

cargarproductos()

function verdetalle(id) {
  let productoseleccionado = productos.find(producto => producto.id == id)
  let productojson = JSON.stringify(productoseleccionado)
  localStorage.setItem("detalle", productojson)
  window.location.href = "detalle.html"
}