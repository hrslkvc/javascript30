const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint).then(res => res.json()).then(result => cities.push(...result));

const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('keyup', (e) => {
    renderMatches(findMatches(e.target.value, cities), e.target.value);
});

const findMatches = (searchQuery, citiesData) => {
    return citiesData.filter(city => {
        const regex = new RegExp(searchQuery, 'gi');
        return city.city.match(regex) || city.state.match(regex);
    });
}

const renderMatches = (matches, searchQuery) => {
    const matchesHtml = matches.map(match => {
        const regex = new RegExp(searchQuery, 'gi');
        const formattedName = match.city.replace(regex, `<span class="hl">${searchQuery}</span>`);
        const formattedState = match.state.replace(regex, `<span class="hl">${searchQuery}</span>`);
        return `
            <p>
                <span>${formattedName}, ${formattedState}</span>
                <span>${new Intl.NumberFormat().format(match.population)}</span>
            </p>
        `
    }).join('');
    resultsDiv.innerHTML = matchesHtml;
}