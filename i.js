const icon = document.querySelector('.icon');
const search = document.querySelector('.search');

icon.onclick = function () {
    search.classList.toggle('active');
};
const api = `https://gist.githubusercontent.com/VasilyMur
/43ef6df83bba694f871f11a16ed7556d/raw/
b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;
const stations = [];

fetch(api).then(res => res.json()).
    then(data => {
        console.log('data>>>', data)

        data.forEach(line => {
            stations.push(...line.stations);

        })
    }
    );
function getOptions(word, stations) {
    return stations.filter(s => {
        const regex = new RegExp(word, 'gi')
        return s.name.match(regex)
    })
}
function displayOptions() {
    console.log('this.value>>', this.value);

    const options = getOptions(this.value, stations);
    const html = options.map(stations => {
      
        return `<li><span>${stations.name}</span></li>`;
    }).slice(0, 10). join(' ');
    searchObhans.innerHTML = this.value? html: null;
}

const searchInput = document.querySelector('.fr');
const searchObhans = document.querySelector('.options');
searchInput.addEventListener('change', displayOptions);
searchInput.addEventListener('keyup', displayOptions);

