
const text = document.querySelector('#text');

const texts = [ 'Graphic Designer', 'Freelancer', 'Learner']
let index = 0;

function textLoad()  {
    text.textContent = texts[index]
    index = (index + 1) % texts.length
}

textLoad()
setInterval(textLoad, 4000)


const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
console.log(filterBtns);
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-filter-item");
const totalPortfolioItem = portfolioItems.length;

console.log(totalPortfolioItem);

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function() {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        console.log(filterValue);

        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === 'all' || filterValue === portfolioItems[k].getAttribute('data-category')) {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            } else {
                portfolioItems[k].classList.add('hide');
                portfolioItems[k].classList.remove('show');
            }
        }
    });
}
