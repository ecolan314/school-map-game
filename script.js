let map = document.querySelector('#map');
let parts = map.querySelectorAll('path');
let partsImages = map.querySelectorAll('image');
let turnFirstTeam = true;

console.log(parts);

parts.forEach(item => {
    item.addEventListener('click', () => {
        if(turnFirstTeam === true) {
            item.classList.remove('t2');
            item.classList.add('t1');
            turnFirstTeam = false;
        } else {
            item.classList.remove('t1');
            item.classList.add('t2');
            turnFirstTeam = true;
        }
    })
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if(turnFirstTeam === true) {
            item.classList.remove('t2');
        } else {
            item.classList.remove('t1');
        }
    })
})
partsImages.forEach(item=> {
    item.addEventListener('click', () => {
        if(turnFirstTeam === true) {
            item.previousElementSibling.classList.remove('t2');
            item.previousElementSibling.classList.add('t1');
            turnFirstTeam = false;
        } else {
            item.previousElementSibling.classList.remove('t1');
            item.previousElementSibling.classList.add('t2');
            turnFirstTeam = true;
        }
    })
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if(turnFirstTeam === true) {
            item.previousElementSibling.classList.remove('t2');
        } else {
            item.previousElementSibling.classList.remove('t1');
        }
    })
})