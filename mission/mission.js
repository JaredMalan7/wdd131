let selectElem = document.querySelector('#mode');
let logo = document.querySelector('#logo img');
let page = document.querySelector('.page');
let body = document.body;

const lightLogo = '../images/byui-logo-blue.webp';
const darkLogo = '../images/byui-logo-white.png';

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        body.style.backgroundColor = '#3a3a3a';
        body.style.color = '#ffffff';

        page.style.backgroundColor = '#3a3a3a';
        page.style.color = '#ffffff';
        logo.src = darkLogo;
    } else {
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#111111';

        page.style.backgroundColor = '#ffffff';
        page.style.color = '#111111';
        logo.src = lightLogo;
    }
}
