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

wnl.forEach(option => option.addEventListener('click', toggle))
hypo.forEach(option => option.addEventListener('click', toggle))
hyper.forEach(option => option.addEventListener('click', toggle))

// for selection of items in the C T L table
const ctlTable = document.querySelectorAll('#ctl tbody tr')
//creating a copy of the original array to choose only the first 3 rows of the table
const arr = Array.from(ctlTable)
const ctlTableCopy = arr.slice(0, 3); 
//doing an inner for loop inside the forEach because I don't want the first cells to be circled when clicked
ctlTableCopy.forEach(element => {
  for (let i = 1; i < element.cells.length; i ++) {
      element.cells[i].addEventListener('click', toggle)
    }
  })



