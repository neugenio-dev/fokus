import { resetTimer } from "./timer"

const tabs = document.querySelectorAll('.timer-card__tab')
const page = document.querySelector('.page')

const modeImage  = document.querySelector('.banner img')

const bannerTitleText = document.querySelector('.banner__title--text')
const bannerTitleHighlight = document.querySelector('.banner__title--highlight')

let mode = 1

const context = {
    '1': {
        title:'Otimize sua produtividade,',
        highLight:'Mergulhe no que importa'
    },
    '2': {
        title:'Que tal dar uma respirada?',
        highLight:'Faça uma pausa Curta'
    },
    '3': {
        title:'Hora de voltar á Superficie',
        highLight:'Faça uma pausa Longa'
    },
}

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        console.log("Yes", event.currentTarget)
        mode = event.currentTarget.dataset.mode
        page.dataset.mode = mode

        tabs.forEach(tab => {

            tab.disable = false
            tab.classList.remove('timer-card__tab--active')
            tab.setAttribute('aria-selected', false)
        })

    
        const imageModeSrc = `mode-${mode}.png`;
        const modeContext = context[mode];
        bannerTitleText.textContent = modeContext.title;
        bannerTitleHighlight.textContent = modeContext.highLight;

        modeImage.setAttribute('src', imageModeSrc);

        resetTimer(mode)

        event.currentTarget.disable = true;
        event.currentTarget.classList.add('timer-card__tab--active');
        event.currentTarget.setAttribute('aria-selected', true);

    console.log("yes", mode)
    })
})