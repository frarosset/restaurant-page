import renderHome from './renderHome.js';

export default function initWebpage(){
    const contentDiv = document.querySelector('main#content');
    renderHome(contentDiv);
}