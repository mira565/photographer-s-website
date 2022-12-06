import i18Obj from './translate.js';

let portfolioBtn = document.querySelectorAll('.btn-light');
let portfolioBtns = document.querySelector('.box');
let portfolioImages = document.querySelectorAll ('.pictures-pic');
let languages = document.querySelector('.languages');
let lngs =document.querySelectorAll('.language');

// portfolioBtn.addEventListener('click', function() {
// portfolioImages.forEach((image, index) => {
//      image.src = `assets/JPG/winter/${index + 1}.jpg`
// })
// });

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((image, index) => {
             image.src = `assets/JPG/${event.target.dataset.season}/${index + 1}.jpg`
          })

    }
}


function changeActiveForBtns() {
    portfolioBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            portfolioBtn.forEach(button => button.classList.remove('active'))
                btn.classList.add('active');
            })
        })
    }

// перевод страницы 


function getTranslate(lang){
    const dataAttributes = document.body.querySelectorAll('[data-i18n]');
    let keys= i18Obj[lang];

    dataAttributes.forEach(data => {
        let dataValue = data.dataset.i18n;

        for (let i in keys) {
            if (i == dataValue) {
                data.textContent = keys [dataValue]
            }
        }
    })

}

function getLanguage(event) {
    if (event.target.classList.contains('language')) {
        getTranslate(event.target.textContent)
    }
}

function changeActiveForLngs() {
    lngs.forEach(lng => {
        lng.addEventListener('click', () => {
            lngs.forEach(language => language.classList.remove('active'))
                lng.classList.add('active');
            })
        })
    }




// languages[1].addEventListener('click', getTranslate('ru'))
// getTranslate('ru')

languages.addEventListener('click', getLanguage)
changeActiveForLngs();
changeActiveForBtns();
portfolioBtns.addEventListener('click', changeImage)

// console.log(portfolioBtn)
// console.log(portfolioImages)