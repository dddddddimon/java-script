// вивести 20 символiв "O"

function Osymbols() {
  let symb = 0;
  while (symb < 20) {
    document.write(`O`);
    symb++;
  }
}

// вивести трикутник з символiв "O"

function triangle() {
  let i = 0;
  let lines = 7;
  let str = " ";
  let symb2 = "O";
  while (i < lines) {
    str += symb2;
    document.write(`<br/>`);
    document.write(str);
    i++;
  }
}

// Вивести на екран таблицю розмірністю 4*3 (4 рядки, 3 стовпці). У кожній клітинці вставити її порядковий номер.

function table3x4() {
  document.write(`
           <table border="2px">`);

  for (let j = 0; j < 4; j++) {
    document.write(`<tr>`);

    for (let i = 0; i < 3; i++) {
      document.write(`<td>${i + 1}</td>`);
    }

    document.write(`</tr>`);
  }

  document.write(`   </table>`);
}

// За допомогою циклів вивести на екран ненумерований список

function nonnumberedlist() {
  let i = 0;
  while (i < 7) {
    document.write(`
<li>
                Пункт ${i + 1}</li>
      
            `);
    i++;
  }
}

// За допомогою циклів вивести на екран нумерований список

function numberedlist() {
  let i = 1;
  while (i < 7) {
    document.write(`
      <ol>
            <li>Пункт ${i++}</li>
            <li>Пункт ${i++}</li>
            <li>Пункт ${i++}</li>
            <li>Пункт ${i++}</li>
            <li>Пункт ${i++}</li>
            <li>Пункт ${i++}</li>
            <li>Пункт ${i++}</li>
      </ol>
            `);
  }
}
