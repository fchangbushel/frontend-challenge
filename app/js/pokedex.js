const pokedex = document.getElementById("pokedex");

const fetchPokemons = () => {
    const url = `https://intern-pokedex.myriadapps.com/api/v1/pokemon`;
    const pokemons = [];

    fetch(url).then((res) => {
        return res.json();
    }).then((result) => {
            const pokemon = result.data.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.image,
            types: data.types
        }));
        displayPokemon(pokemon);
    });
}

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map ( pokeman => `
    <li class="card">
        <h2 class="card-title">${pokeman.name}</h2>
        <img class="card-image" src="${pokeman.image}">
        <p class="card-types">${pokeman.types}</p>
    </li>
    `).join('');
    pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemons();