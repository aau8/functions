// Если инпут не будет пустой, элементу с классом input будет присвоен класс _valid
validInput();
function validInput() {
  const elems = document.querySelectorAll('.input');

  for (let i = 0; i < elems.length; i++) {
    const input = elems[i].querySelector('input');

    input.addEventListener('input', () => {
      if (input.value != '') {
        input.parentElement.classList.add('_valid');
      }
      else {
        input.parentElement.classList.remove('_valid');
      }
    })
  }
}

// Если инпут с классом _req будет пустым, ему присвоется класс 
requiredInput();
function requiredInput() {
  const inputElems = document.querySelectorAll('._req');

  for (let i = 0; i < inputElems.length; i++) {
    const input = inputElems[i];

    input.addEventListener('input', () => {
      if (input.value == '') {
        input.parentElement.classList.add('_error');
      }
      else {
        input.parentElement.classList.remove('_error');
      }
    })
  }
}

// Первая буква каждого слова будет в высоком регистре
upperCaseAllFirstLetter('input');
function upperCaseAllFirstLetter(inputs) {
  const inputElems = document.querySelectorAll(inputs);

  for (let i = 0; i < inputElems.length; i++) {
    const input = inputElems[i];
   
    input.addEventListener('input', () => {
      input.value = input.value.replace(/(\s|^)[а-яёa-z]/g, function(match) {
        return match.toUpperCase();
      });
    })
  }
}

// В инпуте могут быть только буквы английские и русские
validInputName();
function validInputName() {
  const inputElems = document.querySelectorAll('input[name="user_name"]');

  for (let i = 0; i < inputElems.length; i++) {
    const input = inputElems[i];
    
    input.addEventListener('keypress', function(e) {
      const inputCharCode = e.charCode;
      if((inputCharCode >= 48 && inputCharCode <= 57) && (inputCharCode != 43 && inputCharCode != 0 && inputCharCode != 40 && inputCharCode != 41 && inputCharCode != 45)) {
        e.preventDefault();
      }
    });
  }
  // inputElems.forEach(input => {
  // })
}

// В начале не может быть пробела. 2 пробела подряд меняются на один
inputSpace();
function inputSpace() {
  const inputElems = document.querySelectorAll('input, textarea');
  for (let i = 0; i < inputElems.length; i++) {
    const input = inputElems[i];
    
    input.addEventListener('keypress', (e) => {
      if (input.value.length < 1) {
        const inputCharCode = e.charCode;
        if (inputCharCode == 32) {
          e.preventDefault();
        }
      }
    })
    
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\s\s+/g, ' ');
    })
  }
}
