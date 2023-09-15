//setting today's date at load
const date = document.querySelector('#date');
date.valueAsDate = new Date();

//Function to toggle the border on certain elements in the form
const toggle = ({target}) => {
  if (target.style.border === 'none') target.style.border = 'solid 1px black'
  else target.style.border = 'none'
}

//for selection of items in sensory table
const wnl = document.querySelectorAll('#wnl');
const hypo = document.querySelectorAll('#hypo');
const hyper = document.querySelectorAll('#hyper');

wnl.forEach(option => option.addEventListener('click', toggle));
hypo.forEach(option => option.addEventListener('click', toggle));
hyper.forEach(option => option.addEventListener('click', toggle));

// for selection of items in the C T L table
const ctlTable = document.querySelectorAll('#ctl tbody tr');
//creating copy of the original array with rows to to split the rows of the table
const ctlRows = Array.from(ctlTable)
const ctlRows1_3 = ctlRows.slice(0, 3); 
const row4 = ctlRows.slice(3);
//doing an inner for loop inside the forEach because I don't want the first cells to be circled when clicked
ctlRows1_3.forEach(tr => {
  for (let i = 1; i < tr.cells.length; i ++) {
      tr.cells[i].addEventListener('click', toggle);
    }
  });
//selecting just 2 cells of last row so they are affected by the click
row4.forEach(tr => {
  for (let i = 1; i < 3; i ++) {
      tr.cells[i].addEventListener('click', toggle);
    }
});

//printing button
const printBtn = document.querySelector('.print button');
printBtn.onclick = e => window.print();



