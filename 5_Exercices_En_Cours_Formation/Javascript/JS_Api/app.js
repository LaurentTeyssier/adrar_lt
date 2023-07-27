apiDiv = document.querySelector('#apiContact');

async function contactAPI(){
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    console.log(data);
    let dataTransformed = await data.json();
    
    console.log(dataTransformed);
    apiDiv.innerHTML = dataTransformed.sprites.other.home.front_default;

}

contactAPI();