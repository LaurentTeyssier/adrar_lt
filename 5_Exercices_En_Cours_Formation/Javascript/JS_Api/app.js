apiDiv = document.querySelector('#apiContact');

async function contactAPI(){
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    console.log(data);
    let dataTransformed = await data.json();
    
    console.log(dataTransformed);
    apiDiv.innerHTML = dataTransformed.sprites.other.home.front_default;

}

contactAPI();

const pokemonListe = document.getElementById('pokeListe');
console.log(pokemonListe);
// de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const pokemonApiContact = async () => {
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    // Boucle pour parcourir le tableau results dans la réponse
    for(let i=0;i<pokemonDataTransformed.results.length;i++){
        let listElement = document.createElement('p');
        listElement.innerText = pokemonDataTransformed.results[i].name;
        pokemonListe.append(listElement);
    }
    const pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemonDataTransformed.results[0].name;
    document.body.append(pokemonName);
};
pokemonApiContact();