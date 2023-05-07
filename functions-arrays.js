 
// Iteracion #1: Encontrar el maximo
const maxOfTwoNumbers = (numUno, numDos) => {
    if (numUno > numDos) {
      return numUno;
    } else {
      return numDos;
    }
  };
 
  // Iteración #2: Encontrar la palabra más larga  
  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot', 'esternocleidomastoideo'];
  const findLongestWord = (matrizDePalabras) => {
    if (matrizDePalabras.length === 0) return null;
    let palabraMasLarga = '';
    for (let i = 0; i < matrizDePalabras.length; i++) {
      if (palabraMasLarga.length < matrizDePalabras[i].length) {
        palabraMasLarga = matrizDePalabras[i];
      }
    }
    return palabraMasLarga;
  };
  console.log(`Iteration 002`);
  console.log(findLongestWord(words));
  console.log(`----------------`);
  findLongestWord(words);
 
  // Iteración #3: Calcular la suma

  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  const numbersEmpty = [];
  const sumNumbers = (matrizDeNumeros) => {
    if (matrizDeNumeros.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < matrizDeNumeros.length; i++) {
      suma += matrizDeNumeros[i];
    }
    return suma;
  };
  console.log(`La suma total de la matriz 'numbers' es de ${sumNumbers(numbers)}`);
  console.log(`La suma total de la matriz 'numbers' es de ${sumNumbers(numbersEmpty)}`)

 
 // Iteración #4: Calcular la media

  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  function averageNumbers(promedio) {
    let resultado = promedio.length;
    return sumNumbers(promedio) / resultado;
  }
  let promedio = averageNumbers(numbersAvg);
  console.log(promedio);
 

 
  // Nivel 2: matriz de cadena
  const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
  const averageWordLength = (arrayDePalabras) => {
    if (arrayDePalabras.length === 0) return 0;
    let sumaTotal = 0;
    for (let i = 0; i < arrayDePalabras.length; i++) {
      sumaTotal += arrayDePalabras[i].length;
    }
    let operacionMatematica = sumaTotal / arrayDePalabras.length;
    console.log(operacionMatematica);
  };
  averageWordLength(wordsArr);
 
  // Iteration #5: Arreglos Unicos
  const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
 
  const uniquifyArray = (wordArray) => {
    if (wordArray.length === 0) return null;
 
    let arrayLimpio = [];
    // forEach
    wordArray.forEach((elemento) => {
      // includes()
      if (!arrayLimpio.includes(elemento)) {
        arrayLimpio.push(elemento);
      }
    });
    console.log(arrayLimpio);
    return arrayLimpio;
  };
  uniquifyArray(wordsUnique);
 
  const uniqueArr = (wordArray) => {
    let arrayLimpio = [];
    for (let i = 0; i < wordArray.length; i++) {
      if (arrayLimpio.indexOf(wordArray[i]) === -1) {
        arrayLimpio.push(wordArray[i]);
      }
    }
    console.log(arrayLimpio);
    return arrayLimpio;
  };
  uniqueArr(wordsUnique);

  // Iteration #6: Buscar elementos
  const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
 
  function doesWordExist(arrayDePalabras, palabraABuscar) {
    if (arrayDePalabras.includes(palabraABuscar)) {
      console.log(`Palabra - ${palabraABuscar} se encuentra dentro del array`);
      return true;
    } else {
      console.log(`Palabra - ${palabraABuscar} no se encuentra dentro del array`);
      return false;
    }
  }
  function doesWordExistEmilio(arrayDePalabras, palabraABuscar) {
    for (let i = 0; i < arrayDePalabras; i++) {
      if (arrayDePalabras[i] === palabraABuscar) {
        console.log(`Palabra - ${palabraABuscar} se encuentra dentro del array`);
        return true;
      }
      console.log(`Palabra - ${palabraABuscar} no se encuentra dentro del array`);
      return false;
    }
  }
 
  doesWordExist(wordsFind, 'subset');
  doesWordExistEmilio(wordsFind, 'subset');

  // Iteration #7: contar la repeticion
  const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
 
  function howManyTimes( wordsArr, wordSearch ) {
    return wordsArr.filter( elm => elm === wordSearch).length
  }
 
  