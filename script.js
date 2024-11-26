let map = document.querySelector('#map');
let parts = map.querySelectorAll('path');
let turnFirstTeam = true;
let turn = {
    counter: 0,
    t1: 0,
    t2: 0,
    last: {}
};

let team1 = new Team,
    team2 = new Team;

function Team(counter, resources) {
    this.counter = 0;
    this.resources = {
        wheat: 0,
        cow: 0,
        gold: 0,
        diamond: 0,
        stone: 0,
        coal: 0,
        fish: 0,
        choco: 0
    };
    this.calc = this
}

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