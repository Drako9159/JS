const fetchPokemon = () => {
    const $pokeNameInput = document.getElementById("pokeName");
    let pokeName = $pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) =>{
        if(res.status != "200"){
            pokeImage("https://media4.giphy.com/media/OazoCyXHeGyDm/200.webp?cid=ecf05e47xk1rxsk5f9bwi72caro1zr6b2kugzq197upe5n6y&rid=200.webp&ct=g");
            sinResultados = document.getElementById("pokemon");
            sinResultados.textContent = "SIN RESULTADOS";
        } else {
            return res.json();
        }
    }).then((data) =>{
        if(data){
        
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let specialAttack = data.stats[3].base_stat;
        let specialDefense = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;
        let pokeImg = data.sprites.other.home.front_default;
        //let pokeImg = data.sprites.front_default;//
        let type = data.types[0].type.name;
        let height = data.height;
        let weight = data.weight;
        let moves = data.moves[0].move.name;

        pokeImage(pokeImg);
        pokeType(type);
        pokemon(pokeName);
        pokeHp(hp);
        pokeAttack(attack);
        pokeDefense(defense);
        pokeSAttack(specialAttack);
        pokeSDefense(specialDefense);
        pokeSpeed(speed);
        pokeHeight(height);
        pokeWeight(weight);
        movesPoke(moves);
        
        }
    });
}
const movesPoke = (moves) => {
    const $movesPoke = document.getElementById("pokeMoves");
    $movesPoke.textContent = moves.toUpperCase();
}

const count = 1;
function pokeMov(){
    document.getElementById("lumine0").style.backgroundColor="rgb(255, 0, 0)";
    document.getElementById("lumine1").style.backgroundColor="rgb(255, 208, 0)";
    document.getElementById("lumine2").style.backgroundColor="rgb(20, 245, 0)";
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then((data) =>{
        if(data){
            let moves = data.moves[count].move.name;
            let movesPoke = document.getElementById("pokeMoves");
            movesPoke.textContent = moves.toUpperCase();
            count = count + 1;
        }
    })
}


const pokemon = (pokeName) => {
    const pokemon = document.getElementById("pokemon");
    pokemon.textContent = pokeName.toUpperCase();
}
const pokeImage = (url) =>{
    const pokePhoto = document.getElementById("pokeElegido");
    pokePhoto.src = url;
}
const pokeType = (type) => {
    const pokeType = document.getElementById("pokeType");
    pokeType.textContent = type.toUpperCase();
}
const pokeHp = (hp) =>{
    const pokeHp = document.getElementById("pokeHp");
    pokeHp.textContent = hp;
}
const pokeAttack = (attack) =>{
    const pokeAttack = document.getElementById("pokeAttack");
    pokeAttack.textContent = attack;
}
const pokeDefense = (defense) =>{
    const pokeDefense = document.getElementById("pokeDefense");
    pokeDefense.textContent = defense;
}
const pokeSAttack = (specialAttack) =>{
    const pokeSAttack = document.getElementById("pokeSAttack");
    pokeSAttack.textContent = specialAttack;
}
const pokeSDefense = (specialDefense) =>{
    const pokeSDefense = document.getElementById("pokeSDefense");
    pokeSDefense.textContent = specialDefense;
}
const pokeSpeed = (speed) =>{
    const pokeSpeed = document.getElementById("pokeSpeed");
    pokeSpeed.textContent = speed;
}
const pokeHeight = (height) =>{
    const pokeHeight = document.getElementById("pokeHeight");
    let reduceCheck = height*0.1;
    pokeHeight.textContent = reduceCheck + "M";
}
const pokeWeight = (weight) =>{
    const pokeWeight = document.getElementById("pokeWeight");
    let reduceCheck = weight*0.1; 
    pokeWeight.textContent = reduceCheck + " KG";
}


