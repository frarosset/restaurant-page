import {removeDescendants} from './domUtils.js';

// in the following csv file, each line refers to a section in the about tab
import aboutTabSectionsInfo from './data/about-sections.csv';

import aboutImg_0 from './img/about-0.jpg';
import aboutImg_1 from './img/about-1.jpg';
import aboutImg_2 from './img/about-2.jpg';
import aboutImg_3 from './img/about-3.jpg';

const aboutImg = [aboutImg_0,aboutImg_1,aboutImg_2,aboutImg_3];


export default function renderAbout(contentDiv){
    removeDescendants(contentDiv);
    createAbout(contentDiv);
}

function createAbout(contentDiv){
    const titleH2 = document.createElement('h2');
    titleH2.textContent = 'about';
    // the following class will be used to style the about nav button when showing the about page
    titleH2.classList.add('about');

    const header = document.createElement('header');
    header.appendChild(titleH2);

    const sections = [];
    aboutTabSectionsInfo.forEach(sectionInfo => {
        const h3 = document.createElement('h3');
        h3.textContent = sectionInfo[1];

        const p = document.createElement('p');
        p.textContent = sectionInfo[2];
        
        const spaceDiv = document.createElement('div');
        spaceDiv.classList.add('space');

        const section = document.createElement('section');
        const sectionSolidBg = document.createElement('div');
        sectionSolidBg.classList.add('section-solid-bg');

        sectionSolidBg.appendChild(h3);
        sectionSolidBg.appendChild(p);

        section.appendChild(sectionSolidBg);
        section.appendChild(spaceDiv);
        section.style.backgroundImage = `url(${aboutImg[sectionInfo[0]]})`;
        sections.push(section);
    });

    contentDiv.classList.toggle('tab',true);
    contentDiv.appendChild(header);
    sections.forEach(section => contentDiv.appendChild(section));
}