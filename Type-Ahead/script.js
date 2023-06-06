// const { lstat } = require("fs");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(req => req.json())
        .then(data => cities.push(...data));

function FindMatches(SearchedOne, cities)
{
    return (cities.filter(place => 
    {
        const rex = new RegExp(SearchedOne, 'gi');
        return (place.city.match(rex) || place.state.match(rex));       
    }));
}

function DiplayMatches()
{
    const matchArray = FindMatches(this.value, cities);
    console.log(matchArray);
    const html =  matchArray.map(place =>
        {
        const rex = new RegExp(this.value, 'gi'); 
        const city = place.city.replace(rex, `<span class="hl">${this.value}</span>`);
        const state = place.state.replace(rex, `<span class="hl">${this.value}</span>`);
               return `
        <li>
         <span class="name">${city}, ${state}</span>
         <span class="population">${place.population}</span>
        </li>
         `
      });
    suggestions.innerHTML = html;
    // console.log(this.value);
}

const SearchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

SearchInput.addEventListener('keyup',  DiplayMatches);