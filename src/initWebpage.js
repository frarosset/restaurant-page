import renderHome from './renderHome.js';
import renderAbout from './renderAbout.js';

export default function initWebpage(){
    const contentDiv = document.querySelector('main#content');
    renderHome(contentDiv);

    const logoAndName = document.querySelector('.logo-and-name');
    logoAndName.contentDiv = contentDiv;
    logoAndName.addEventListener('click',(e) => {renderHome(e.currentTarget.contentDiv)});

    const aboutBtn = document.querySelector('.about-btn');
    aboutBtn.contentDiv = contentDiv;
    aboutBtn.addEventListener('click',(e) => {renderAbout(e.currentTarget.contentDiv)});
}