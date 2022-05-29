const fetchPokemon = () => {
    const url = `https://intern-pokedex.myriadapps.com/api/v1/pokemon`;
    fetch(url).then( res => {
        return res.json();
    }).then( data => {
        console.log(data);
    })
}

fetchPokemon();