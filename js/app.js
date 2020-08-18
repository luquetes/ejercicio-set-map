// Punto 1
const Array1 = ['manzana', 3, {color: 'rojo'}, false, [3, 7, 1, true]]

// Punto 2
const Array2 = [2, 3, 1, 6, 3, 'hola', 5, 9, 1, 8, 7, '9', false, 4, 'chau', true, 'false', 'hola']

// Punto 3
let Set1 = new Set([3, 6, 9, 12, 15])

//Respuesta 1
Array1.map( (element, index) => {
  console.log("El índice", index ,"contiene a:", element);
})

//Respuesta 2
const newArray = Array.from(new Set(Array2));
console.log("Array original", Array2);
console.log("Array sin duplicados", newArray);

//Respuesta 3
/*Paso 1*/
const Array3 = Array.from(Set1);
console.log("Array original", Array3);

/*Paso 2*/
let prueba = [];

Array3.map( numbers => {
  prueba.push(numbers * 2);
})

// Array.from([prueba], x => x + x)
console.log("Array con los valores multiplicados", prueba);

/*Paso 3*/
const divList = document.getElementById('lista');
const newElement = document.createElement('ul');
divList.appendChild(newElement)
// const newUl = divList.insertAdjacentElement('beforeend', newElement);

prueba.map(item => {
  const newLi = document.createElement('li');
  newLi.innerHTML = item
  newElement.appendChild(newLi)
})