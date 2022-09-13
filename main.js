//todas las etiquetas de html son nodos de elementos
//todas las etiquetas que tienen texto son nodos de textos, contenidos en etiquetas de elementos

//iner.html reemplaza lo que tengo dentro 

// console.dir(document);// uso dir para que muestre las propiedades del body, si uso log muestra solo las etiquetas
// console.dir(document.body);]
//las class y cualquier atributo de html se lee como un nodo de attr

//Con el ID lo utilizo para acceder a elementos especificos con JS, para css debo utilizar otras cosas

// const wrapper = document.getElementById('app');
// const child = document.getElementById('paragraph');

//console.log('Wrapper: ', wrapper);
// console.log('Wrapper: ', wrapper.innerHTML);//.inner para ver el contenido que esta dentro del nodo wrapper
//console.log('Child: ', child);
// console.log('Child: ', child.innerText);

//si trabajo con class me devuelve un array de objetos, puede ser uno o mas
//Busco acceder al html mediante el uso de class
// const wrapper = document.getElementById('app');
// const child = document.getElementsByClassName('paragraph');

// console.log(wrapper);
// console.log(child);

//si quiero recorrer los p que cree en el html, lo debo hacer con un for
// for (el of child {
//     console.log(el.innerText);
// }

//Accedo al html mediante el nombre de la etiqueta
// const child = document.getElementsByTagName('div');
// console.log(child);

//con inner text puedo modificar el contenido de un elemento
// const wrapper = document.getElementById('app');
// const child = document.getElementsByClassName('paragraph');
// console.log(wrapper);
// console.log(child);

// for (Hello of child) {
//     if(Hello.innerText == 'Hello'){
//         const entrada = prompt('Ingrese un valor');
//         Hello.innerText = entrada;
//     }
// }

//Puedo agregar etiquetas con info desde js con innerHTML
// const wrapper = document.getElementById('app');
// wrapper.innerHTML = '<h2>Hola Mundo</h2><p>Desde etiquetas agregadas por javascript</p>'//me cambia el texto que tengo en p/ lo reemplaza/ no agrega

//Si busco agregar o quitar nodos
//creacion de elementos- 1ro creo elementos con document.createElement(), desde agrego texto con .innerHTML y luego agrego con append()

//si quiero eliminar elementos con remove() 

//soluciono creando una nueva variable divider el problema que me genera el utilizar el .innerHTML que me reemplaza la info, asi puedo agregar sin borrar
/* const wrapper = document.getElementById('app');
const divider = document.createElement('div');

divider.innerHTML = '<h2>Hola Mundo</h2><p>Desde etiquetas agregadas por javascript</p>';

wrapper.append(divider);
 */
//si quiero obtener datos desde el input/ debo acceder al value de cada input

//este de formularios no funciona porque no se dio eventos y no puedo usar el button
/* const username = document.getElementById('username');
const lastname = document.getElementById('lastname');

username.value = 'Pepe';
lastname.value = 'Grillo'; */

//ejemplo con array de objetos

const superheroes = [
    {
        name: 'Tony',
        lastname: 'Stark',
        heroe: 'Iron Man'
    },
    {
        name: 'Peter',
        lastname: 'Parker',
        heroe: 'Spiderman'
    },
    {
        name: 'Bruce',
        lastname: 'Banner',
        heroe: 'Hulk'
    },
];
const menu = document.getElementById('menu');

// for (heroe of superheroes){
//     const item = document.createElement('li');
//     item.innerHTML = '<h3>' + heroe.name + ' ' + heroe.lastname + '</h2><p>' + heroe.heroe + '</p>';
//     menu.append(item);
// }

//template string- para evitar estar escribiendo las etiquetas html y las ''

for (heroe of superheroes){
    const item = document.createElement('li');
    item.innerHTML = `<h3>${heroe.name} ${heroe.lastname}</h3>
                        <p>${heroe.heroe}</p>`;//lo que pongo estre${}es variable, el resto es text
    menu.append(item);
}

//query selector- nos permiten seleccionar nodos con la misma sintaxis que utilizamos en los selectores de css/ puedo ser mas selectivo/ trae el 1ro que coincida
// const menu = document.getElementById('menu');/ me trae solo el 1ro

//si quiero traer todos los que coincidan, utilizo qs all
//document.querySelectorAll('.items')// me trae todos los items de la lista