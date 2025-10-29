//función flecha buscar producto en colección productos
const buscarProducto = id => productos.find(p => p.id === id);

function demoVar() {
    var sinDeclarar;
    console.log(sinDeclarar === undefined ? "sinDeclarar es undefined" : "declarada");
    var sinDeclarar = "aquí estoy";
}
demoVar();

let carrito = []; //


{
   let cantidad = 3;
   const IVA = 0.21;
   cantidad = cantidad + 3;
   
   console.log("cantidad: ", cantidad, "IVA:", IVA);
  
}

console.log("1" + 2);
console.log(+"1" + 2);
console.log(+"pepe" * 2);
console.log("6" / 2);

let puntos = 10;
puntos += 5;
console.log("puntos: ", puntos);

const n = 4;
const t = "kdpskd";
const ok = false;
let nada = null;
let noDefinido;

const cliente1 = { id: 1, nombre: "juan", saldo: 12.5, esVIP: true };

console.log(cliente1["nombre"]);

for (let clave in cliente1){
    console.log(clave, ":", cliente1[clave]);
}

console.log(Object.keys(cliente1));
console.log(Object.values(cliente1));

const mascota = "Perro";
let kilos = 20;

const frase = `Hola, ${mascota}, pesas ${kilos}`;

let stock= 20;
let mensaje;

if (stock < 20) {
    mensaje = "bajo mínimo";
} else {
    mensaje = "ok";
}

let mensaje2 = stock < 20 ? "bajo mínimo" : "ok";
let mensaje3 = stock > 50 ? "sobrado" : "ok";

const nota = 7;

const resultado = nota >= 9 ? "Sobresaliente"
                  : nota >= 7 ? "Notable"
                  : nota >= 5 ? "Aprobado"
                  :"Suspenso";

console.log(resultado);

console.log(mensaje);
console.log(mensaje2);



console.log(frase);

const btnSaludo = document.querySelector('#btnSaludo');
btnSaludo.addEventListener("click", () => {
  
    const nombre = prompt("¿Cómo te llamas", "Invitado");

    if (nombre) {
        alert(`¡Hola ${nombre}!`);
    } else {
        alert("No pasa nada, sigues como invitado");
    }

});

function precioConIVA(precio = 0, iva= 0.21){

    return precio + (precio * iva);

}

console.log(precioConIVA(10));
console.log(precioConIVA(10, 0.10));

//catálogo

const productos = [

    { id: 1, nombre: "Pienso para cabras", tipo: "cabras", precio: 12.99 },
    { id: 2, nombre: "Pienso para jatos", tipo: "jato", precio: 14.962 },
     { id: 3, nombre: "Piensweara cabras", tipo: "cabras", precio: 12.9 },
    { id: 4, nombre: "Pienso para jatos", tipo: "jato", precio: 14.92 },
    { id: 5, nombre: "Pienso para jatos", tipo: "jato", precio: 14.99 },
    { id: 6, nombre: "Pienso para jatos", tipo: "jato", precio: 14.99 },

];

function aEuros(importe) {
    return `${importe.toFixed(2)} €`;
}

let importe = 3;
console.log("A EUROS:", aEuros(2,3));


function sumarTodos(...nums){

   let total = 0;
   for (const n of nums) total += n;
   return total;
}

console.log("Sumar Todos: ", sumarTodos(1,4,5));
console.log("Sumar Todos: ", sumarTodos(1,4));
console.log("Sumar Todos: ", sumarTodos(1,4,5,3,3,3,4,5));

let n5 = 3;
let n6 = n5;

let colores = ["verde", "azul", "rojo"];
let copiaColores = colores;

const combinado =["marron", ...colores, "negro"];







const aEuros2 = numero1 => `${numero1.toFixed(2)} €`; 
const suma = (a,b) => a + b;

console.log('Prueba flecha: ', aEuros2(13.5));


let x = 3;
let m = 7;

console.log(suma ( x , m));




const catalogo = document.querySelector("#gridProductos");

for (const p of productos){
            const card = document.createElement("article");
            card.className = "product";
            card.innerHTML = `
            <h4>${p.nombre}</h4>
            <p>Tipo: ${p.tipo}</p>
            <p class="price">${aEuros(p.precio)}</p>
            <button class="btn" data-id="${p.id}">Añadir</button>       
            `;            
            catalogo.appendChild(card);
}

const grid = document.querySelector("#gridProductos");

grid.addEventListener("click", (ev) =>{

    const btn = ev.target.closest('button[data-id]');
    //comprobar que el botón
    //capturar en una variable el id de produto
    //agregar(id)


});


function agregar(idProducto){

    
    const p = buscarProducto(idProducto);
    if (!p) return;

    const linea = carrito.find(l => l.id === idProducto);

    if (linea){

        linea.cantidad += 1;
        linea.subtotal = +(linea.cantidad * p.precio).toFixed(2);
    }else{
       carrito.push({  id: p.id, nombre: p.nombre, cantidad: 1, subtotal: +p.precio.toFixed(2)});
    }


   dibujarCarrito(carrito);


}

function dibujarCarrito(lineas = []){

    const ulCarrito = document.querySelector("#listaCarrito");
    const txtTotal  = document.querySelector("#txtTotal");
    const txtUds = document.querySelector("#txtUnidades");

    //limpiar el carrito
 
    ulCarrito.innerHTML = "";
    let tUnidades = 0;
    let tImporte = 0;



    //reccorrer el vector carrito 


    for (const l of lineas) {

       const li =document.createElement("li");
       li.textContent = ` ${l.nombre} - ${l.cantidad} uds - ${aEuros(l.subtotal)}`;
       ulCarrito.appendChild(li);

       tUnidades += l.cantidad;
       tImporte += l.subtotal; 

    }

    //para cada linea componer ulcarrito

    //actualizar total y unidades
    //dos variables nuevas

    txtUds.textContent = `${tUnidades} ud`;
    txtTotal.textContent = aEuros(precioConIVA(tImporte));

}


