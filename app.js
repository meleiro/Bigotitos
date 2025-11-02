// función flecha: busca un producto por id en la colección 'productos'
const buscarProducto = id => productos.find(p => p.id === id);

// Demostración del comportamiento de 'var' (hoisting y redeclaración)
function demoVar() {
    var sinDeclarar; // declarada pero sin valor => undefined
    console.log(sinDeclarar === undefined ? "sinDeclarar es undefined" : "declarada");
    var sinDeclarar = "aquí estoy"; // con 'var' puedes redeclarar en el mismo ámbito
}
demoVar();

let carrito = []; // array de líneas de carrito [{id,nombre,cantidad,subtotal}]

{
   // Ámbito de bloque: 'let' y 'const' solo viven aquí
   let cantidad = 3;
   const IVA = 0.21;      // constante: no puede reasignarse
   cantidad = cantidad + 3;
   console.log("cantidad: ", cantidad, "IVA:", IVA); // 6 y 0.21
}

// Operadores y conversiones
console.log("1" + 2);        // concatenación -> "12"
console.log(+"1" + 2);       // +"1" -> 1 (number), 1+2=3
console.log(+"pepe" * 2);    // +"pepe" -> NaN, NaN*2 = NaN
console.log("6" / 2);        // "6" se convierte a número -> 3

// Asignaciones compuestas
let puntos = 10;
puntos += 5; // 15
console.log("puntos: ", puntos);

// Tipos primitivos y valores especiales
const n = 4;
const t = "kdpskd";
const ok = false;
let nada = null;      // null = ausencia intencional de valor
let noDefinido;       // undefined

// Objeto literal
const cliente1 = { id: 1, nombre: "juan", saldo: 12.5, esVIP: true };
console.log(cliente1["nombre"]); // acceso por clave dinámica

// Recorrer propiedades enumerables
for (let clave in cliente1){
    console.log(clave, ":", cliente1[clave]);
}

console.log(Object.keys(cliente1));   // ["id","nombre","saldo","esVIP"]
console.log(Object.values(cliente1)); // [1,"juan",12.5,true]

// Template literals (plantillas)
const mascota = "Perro";
let kilos = 20;
const frase = `Hola, ${mascota}, pesas ${kilos}`;

// Operadores ternarios y lógica condicional
let stock= 20;
let mensaje;

if (stock < 20) {
    mensaje = "bajo mínimo";
} else {
    mensaje = "ok";
}

let mensaje2 = stock < 20 ? "bajo mínimo" : "ok";
let mensaje3 = stock > 50 ? "sobrado" : "ok";

// Ternarios encadenados (equivalente a if/else-if)
const nota = 7;
const resultado = nota >= 9 ? "Sobresaliente"
                  : nota >= 7 ? "Notable"
                  : nota >= 5 ? "Aprobado"
                  :"Suspenso";

console.log(resultado); // "Notable"
console.log(mensaje);
console.log(mensaje2);
console.log(frase);

// Selectores de DOM
const elGridQuery = document.querySelector("#gridProductos");   // CSS selector
const elGridByID = document.getElementById("gridProductos");    // por id
const todosLosGrid = document.querySelectorAll(".product");     // NodeList de .product

console.log("SELECTORES:", { elGridByID, elGridQuery, todosLosGrid});

// Crear y añadir un elemento al DOM
const demoElemento = document.createElement("span");
demoElemento.className="demoClass";
demoElemento.textContent="Hola soy Camile";
document.querySelector(".topbar nav").appendChild(demoElemento);

// Modificar atributos de un elemento existente
const span1 = document.querySelector("nav .demoClass");
span1.setAttribute("id" , "Camilo");
span1.setAttribute("title", "Holaaaa");
span1.setAttribute("style", "color: purple"); // estilo inline (mejor evitar en producción)

// innerHTML vs textContent
const info = document.createElement("p");
info.className="infoClass";
//info.textContent = 'Total = <strong>20</strong>€'; // Muestra las etiquetas como texto
info.innerHTML = 'Total = <strong>20</strong>€';     // Interpreta HTML
document.querySelector(".container").appendChild(info);

// Aviso temporal que se elimina pasado un tiempo
const aviso = document.createElement("div");
aviso.className = "avisoClass";
aviso.textContent = "Mensaje temporal (durará 2 segundos)";
document.body.appendChild(aviso);
setTimeout(() => aviso.remove(), 5000); // se elimina a los 5s (comentario dice 2s, pero es 5000ms)

// --- Eventos de UI --- //
const btnSaludo = document.querySelector('#btnSaludo');
btnSaludo.addEventListener("click", () => {
    // prompt devuelve string o null
    const nombre = prompt("¿Cómo te llamas", "Invitado");
    if (nombre) {
        alert(`¡Hola ${nombre}!`);
    } else {
        alert("No pasa nada, sigues como invitado");
    }
});

// Función con parámetros por defecto
function precioConIVA(precio = 0, iva= 0.21){
    return precio + (precio * iva);
}

console.log(precioConIVA(10));         // 12.1
console.log(precioConIVA(10, 0.10));   // 11

// --- Catálogo de productos (array de objetos) --- //
const productos = [
    { id: 1, nombre: "Pienso para cabras", tipo: "cabras", precio: 12.99 },
    { id: 2, nombre: "Pienso para jatos",  tipo: "jato",   precio: 14.962 },
    { id: 3, nombre: "Piensweara cabras",  tipo: "cabras", precio: 12.9 },
    { id: 4, nombre: "Pienso para jatos",  tipo: "jato",   precio: 14.92 },
    { id: 5, nombre: "Pienso para jatos",  tipo: "jato",   precio: 14.99 },
    { id: 6, nombre: "Pienso para jatos",  tipo: "jato",   precio: 14.99 },
];

// Formateo de importe a euros con 2 decimales
function aEuros(importe) {
    return `${importe.toFixed(2)} €`;
}

let importe = 3;
console.log("A EUROS:", aEuros(2,3)); // El segundo argumento extra se ignora; JS permite args extra

// Parámetros rest y bucle for..of
function sumarTodos(...nums){
   let total = 0;
   for (const n of nums) total += n;
   return total;
}
console.log("Sumar Todos: ", sumarTodos(1,4,5));
console.log("Sumar Todos: ", sumarTodos(1,4));
console.log("Sumar Todos: ", sumarTodos(1,4,5,3,3,3,4,5));

// Primitivos vs referencias
let n5 = 3;
let n6 = n5; // copia de valor (primitivo)

let colores = ["verde", "azul", "rojo"];
let copiaColores = colores; // misma referencia (ambos apuntan al mismo array)

const combinado = ["marron", ...colores, "negro"]; // spread: crea uno nuevo mezclando

// Funciones flecha abreviadas
const aEuros2 = numero1 => `${numero1.toFixed(2)} €`; 
const suma = (a,b) => a + b;

console.log('Prueba flecha: ', aEuros2(13.5));

let x = 3;
let m = 7;
console.log(suma(x, m)); // 10

// --- Render dinámico del catálogo en el DOM --- //
const catalogo = document.querySelector("#gridProductos");

for (const p of productos){
    const card = document.createElement("article");
    card.className = "product";
    // innerHTML para pintar la tarjeta
    card.innerHTML = `
        <h4>${p.nombre}</h4>
        <p>Tipo: ${p.tipo}</p>
        <p class="price">${aEuros(p.precio)}</p>
        <button class="btn" data-id="${p.id}">Añadir</button>
    `;
    catalogo.appendChild(card);
}

// Delegación de eventos en el grid de productos
const grid = document.querySelector("#gridProductos");
grid.addEventListener("click", (ev) =>{
    // closest busca el botón más cercano con data-id (sirve aunque hagas click en el <h4> dentro)
    const btn = ev.target.closest('button[data-id]');
    if (!btn) return;                // si no se pulsó un botón válido, salir
    const id = +btn.dataset.id;      // dataset trae atributos data-*. '+' convierte a number
    agregar(id);
});

// Vaciar carrito
document.querySelector("#btnVaciar").addEventListener("click", () =>{
    carrito = [];             // vaciar array
    dibujarCarrito(carrito);  // refrescar UI
});

// Añadir producto al carrito
function agregar(idProducto){
    const p = buscarProducto(idProducto); // busca en catálogo
    if (!p) return;

    const linea = carrito.find(l => l.id === idProducto);
    if (linea){
        // ya existe: aumentar cantidad y recalcular subtotal
        linea.cantidad += 1;
        linea.subtotal = +(linea.cantidad * p.precio).toFixed(2);
    } else {
        // no existe: crear nueva línea
        carrito.push({ id: p.id, nombre: p.nombre, cantidad: 1, subtotal: +p.precio.toFixed(2) });
    }
    dibujarCarrito(carrito); // actualizar la vista
}

// Pintar el carrito en la interfaz
function dibujarCarrito(lineas = []){
    const ulCarrito = document.querySelector("#listaCarrito");
    const txtTotal  = document.querySelector("#txtTotal");
    const txtUds    = document.querySelector("#txtUnidades");

    // 1) limpiar el listado
    ulCarrito.innerHTML = "";
    let tUnidades = 0;
    let tImporte = 0;

    // 2) recorrer líneas y construir <li> por cada una
    for (const l of lineas) {
       const li = document.createElement("li");
       li.textContent = ` ${l.nombre} - ${l.cantidad} uds - ${aEuros(l.subtotal)}`;
       ulCarrito.appendChild(li);

       tUnidades += l.cantidad;
       tImporte += l.subtotal; 
    }

    // 3) actualizar totales (unidades y total con IVA)
    txtUds.textContent = `${tUnidades} ud`;
    txtTotal.textContent = aEuros(precioConIVA(tImporte));
}
