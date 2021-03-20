// let on = true;

// boton.onclick = () =>{
//     const texto = on ? 'Has dado clic al botón!' : 'Manipulación del DOM';
//     h1.innerText = texto;
//     on = !on;
// }




/*

*/



const nombre = document.getElementById('nombre');
const h1 = document.getElementById('titulo');
const boton = document.getElementById('boton');


console.log(nombre);

boton.onclick = ()=>{
    h1.innerText = `Hola ${nombre.value}`;
}

