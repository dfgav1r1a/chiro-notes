//setting today's date at load
const date = document.querySelector('#date');
date.valueAsDate = new Date();

//for selection of items in sensory table
const wnl = document.querySelectorAll('#wnl');
const hypo = document.querySelectorAll('#hypo');
const hyper = document.querySelectorAll('#hyper');

wnl.forEach(option => {
    option.addEventListener('click', ({target}) => {
      if (target.style.border === 'none') target.style.border = 'solid 2px black'
      else target.style.border = 'none'
  })
})

hypo.forEach(option => {
    option.addEventListener('click', ({target}) => {
      if (target.style.border === 'none') target.style.border = 'solid 2px black'
      else target.style.border = 'none'
  })
})

hyper.forEach(option => {
    option.addEventListener('click', ({target}) => {
      if (target.style.border === 'none') target.style.border = 'solid 2px black'
      else target.style.border = 'none'
  })
})



