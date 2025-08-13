let productos = [
  {
    "id": 1,
    "nombre": "Refrigerador LG Smart",
    "imagen": "https://example.com/images/refrigerador-lg.jpg",
    "descripcion": "Refrigerador LG Smart con capacidad de 300 litros, tecnología inverter y control digital.",
    "precio": 85000,
    "stock": 10
  },
  {
    "id": 2,
    "nombre": "Microondas Samsung",
    "imagen": "https://example.com/images/microondas-samsung.jpg",
    "descripcion": "Microondas Samsung 800W con grill y varias funciones de cocción.",
    "precio": 12000,
    "stock": 15
  },
  {
    "id": 3,
    "nombre": "Licuadora Oster Pro",
    "imagen": "https://example.com/images/licuadora-oster.jpg",
    "descripcion": "Licuadora Oster Pro con motor de 600W y jarra de vidrio de 1.5 litros.",
    "precio": 6500,
    "stock": 25
  },
  {
    "id": 4,
    "nombre": "Lavadora Whirlpool",
    "imagen": "https://example.com/images/lavadora-whirlpool.jpg",
    "descripcion": "Lavadora Whirlpool automática de 7kg con múltiples programas de lavado.",
    "precio": 22000,
    "stock": 8
  },
  {
    "id": 5,
    "nombre": "Plancha Philips",
    "imagen": "https://example.com/images/plancha-philips.jpg",
    "descripcion": "Plancha a vapor Philips con suela antiadherente y función anti-goteo.",
    "precio": 4800,
    "stock": 30
  },
  {
    "id": 6,
    "nombre": "Aspiradora Dyson V10",
    "imagen": "https://example.com/images/aspiradora-dyson-v10.jpg",
    "descripcion": "Aspiradora inalámbrica Dyson V10 con potente succión y batería de larga duración.",
    "precio": 60000,
    "stock": 5
  },
  {
    "id": 7,
    "nombre": "Horno Eléctrico Teka",
    "imagen": "https://example.com/images/horno-teka.jpg",
    "descripcion": "Horno eléctrico Teka con capacidad de 45 litros y función de convección.",
    "precio": 28000,
    "stock": 12
  },
  {
    "id": 8,
    "nombre": "Extractor de jugos Philips",
    "imagen": "https://example.com/images/extractor-philips.jpg",
    "descripcion": "Extractor de jugos Philips con motor silencioso y sistema anti-goteo.",
    "precio": 7500,
    "stock": 20
  },
  {
    "id": 9,
    "nombre": "Cafetera Nespresso",
    "imagen": "https://example.com/images/cafetera-nespresso.jpg",
    "descripcion": "Cafetera Nespresso con sistema de cápsulas y presión de 19 bares.",
    "precio": 16000,
    "stock": 18
  },
  {
    "id": 10,
    "nombre": "Televisor Samsung 55\"",
    "imagen": "https://example.com/images/tv-samsung-55.jpg",
    "descripcion": "Televisor Samsung 55 pulgadas 4K UHD con HDR y Smart TV.",
    "precio": 45000,
    "stock": 7
  },
  {
    "id": 11,
    "nombre": "Calefón Bosch",
    "imagen": "https://example.com/images/calefon-bosch.jpg",
    "descripcion": "Calefón Bosch a gas con encendido electrónico y alta eficiencia energética.",
    "precio": 18000,
    "stock": 9
  },
  {
    "id": 12,
    "nombre": "Secadora Electrolux",
    "imagen": "https://example.com/images/secadora-electrolux.jpg",
    "descripcion": "Secadora Electrolux de 9kg con sensor de humedad y múltiples programas.",
    "precio": 35000,
    "stock": 6
  },
  {
    "id": 13,
    "nombre": "Sandwichera Oster",
    "imagen": "https://example.com/images/sandwichera-oster.jpg",
    "descripcion": "Sandwichera Oster con placas antiadherentes y termostato ajustable.",
    "precio": 3500,
    "stock": 40
  },
  {
    "id": 14,
    "nombre": "Freidora de aire Xiaomi",
    "imagen": "https://example.com/images/freidora-xiaomi.jpg",
    "descripcion": "Freidora de aire Xiaomi con capacidad de 3.5 litros y control táctil.",
    "precio": 11000,
    "stock": 22
  },
  {
    "id": 15,
    "nombre": "Batidora KitchenAid",
    "imagen": "https://example.com/images/batidora-kitchenaid.jpg",
    "descripcion": "Batidora KitchenAid profesional con motor potente y múltiples accesorios.",
    "precio": 42000,
    "stock": 10
  },
  {
    "id": 16,
    "nombre": "Aire acondicionado LG",
    "imagen": "https://example.com/images/aire-lg.jpg",
    "descripcion": "Aire acondicionado LG split frío/calor con eficiencia energética A++.",
    "precio": 65000,
    "stock": 4
  },
  {
    "id": 17,
    "nombre": "Tostadora Philips",
    "imagen": "https://example.com/images/tostadora-philips.jpg",
    "descripcion": "Tostadora Philips con ranuras extra anchas y control de temperatura.",
    "precio": 4200,
    "stock": 28
  },
  {
    "id": 18,
    "nombre": "Robot de cocina Moulinex",
    "imagen": "https://example.com/images/robot-moulinex.jpg",
    "descripcion": "Robot de cocina Moulinex multifuncional con capacidad de 3 litros.",
    "precio": 25000,
    "stock": 14
  },
  {
    "id": 19,
    "nombre": "Campana extractora Elica",
    "imagen": "https://example.com/images/campana-elica.jpg",
    "descripcion": "Campana extractora Elica de acero inoxidable con iluminación LED.",
    "precio": 22000,
    "stock": 11
  },
  {
    "id": 20,
    "nombre": "Parrilla eléctrica Black+Decker",
    "imagen": "https://example.com/images/parrilla-bd.jpg",
    "descripcion": "Parrilla eléctrica Black+Decker con placas antiadherentes y termostato regulable.",
    "precio": 8500,
    "stock": 26
  }
];

function cargarProductos() {
    const contenedor = document.getElementById("boxproductos");
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.className = "producto";
        divProducto.innerHTML = `
            <h2 id="nombreProducto">${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p id="descripcionProducto">${producto.descripcion}</p>
            <h3 id="precioProducto">Precio: $${producto.precio.toLocaleString()}</h3>
            <button id="btncomprar" onclick="verDetalle()">Comprar</button>
        `;
        contenedor.appendChild(divProducto);
    });
}

cargarProductos();

function verDetalle() {
  
}

