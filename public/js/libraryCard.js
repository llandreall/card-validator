(function () {
  let regex;
  // Usando function expression para validar la cantidad de carácteres que ingresa el usuario como nro de tarjeta
  var lengthCard = (input) => {
    /* condicional para verificar si el campo esta vacío o contiene un nro de longitud correcta
    (si campo esta vacío en  la fase de creación del contexto de ejecución el interprete asigna el valor undefined por default */
    if (input === undefined) {
      return undefined;
    } else if (input.trim().length === 16) {
      return input;
    }
  }

  // función arrown en ES6 y utilizando expresión regular
  const onlyNumbers = (input) => {
    regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  }

  const onlyLetters = (input) => {
    regex = /[A-Za-z]+$/;
    if (regex.test(input)) {
      return input;
    }
  }
 const validateFormatDate = (fecha) => {

    let fechaArr = fecha.split('-');
    let dia = fechaArr[2];
    let mes = fechaArr[1];
    let año = fechaArr[0];
    let valor = new Date(año, mes - 1, dia); 
    if ((valor.getFullYear() == año) && (valor.getMonth() == (mes - 1)) && (valor.getDate() == dia)) {
      return fecha;
    } else {
      return undefined;
    }
  }
 const validateCvv = (cvv) =>{
    if (cvv === undefined) {
      return undefined;
    } else if (cvv.trim().length === 6) {
      return cvv;
    }
  }
  const validateName = (name) => {
    if (name === undefined) {
      return undefined;
    } else if (name.trim().length > 6) {
      return name;
    }
  }
  const find = (array, element) =>{
    debugger;
    var encontro = false;
    // your code here
    for (var i = 0; i < array.length; i++) {
      if (array[i] === element) {
        var encontro = true;
        return encontro;
      }
    }
  }
  function lhun(numberCard) {
    // debugger;
    var creditCardNumber = onlyNumbers(lengthCard(numberCard));
    if (creditCardNumber !== undefined) {
      var arr = [];
      var sumaTotal = 0;
      for (var index = creditCardNumber.length - 1; index >= 0; index--) {
        arr.push(creditCardNumber[index]);
      }
      for (var index = 1; index < arr.length; index = index + 2) {
        arr[index] = arr[index] * 2;
        if (arr[index] >= 10) {
          arr[index] = arr[index] - 9;
        }
      }

      for (var index = 0; index < arr.length; index++) {
        sumaTotal = sumaTotal + parseInt(arr[index]);
      }

      if (sumaTotal % 10 === 0) {
        console.log('Es una tarjeta valida');
        return true;
      } else {
        console.log('No es un numero valido');
        return false;
      }
    } else {
      console.log('Verifique el numero de su tarjeta');
      return false;
    }
  }
  function validaCampos(name, cvv, date) {
    var validaDate = validateFormatDate(date);
    var validarCvv = onlyNumbers(validateCvv(cvv));
    var validarName = onlyLetters(validateName(name));
    if (validaDate !== undefined && validarCvv !== undefined && validarName !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  var libraryCard = {
    isValidCreditCard: function (name, numberCard, cvv, date, arr, json) {
      debugger;
      if (lhun(numberCard) && validaCampos(name, cvv, date)) {
        if (find(arr, numberCard)) {
          if (find(json[numberCard], cvv)) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };
  if (typeof window.libraryCard === 'undefined') {
    window.libraryCard = window._ = libraryCard;
  } else {
    console.log('Ya existe libreria');
  }
})();
