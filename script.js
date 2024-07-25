
const text = document.querySelector('#text');

const texts = [ 'Graphic Designer', 'Freelancer', 'Learner']
let index = 0;

function textLoad()  {
    text.textContent = texts[index]
    index = (index + 1) % texts.length
}

textLoad()
setInterval(textLoad, 4000)