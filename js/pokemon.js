  function quantidadeSelecionar(e){
            e.preventDefault()
            const input = document.querySelector('[type=number]');
            const valor = input.value
            input.value= "";

            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${valor}&offset=0`)
            .then(res => res.json())
            .then(allpokemon =>{
            
                var pokemons =[];

                allpokemon.results.map((val)=>{

                    fetch(val.url)
                    .then(res => res.json())
                    .then(pokemonsingle=>{ 
                        pokemons.push({name:val.name,imagem:pokemonsingle.sprites.front_default});

                        if(pokemons.length == valor){

                                var pokemonBoxes = document.querySelector('.pokemon-boxes')
                                pokemonBoxes.innerHTML ="";

                                pokemons.map(function(val){
                                pokemonBoxes.innerHTML+=`

                                <div class="pokemon-box">
                                    <img src="${val.imagem}" alt="">
                                    <p>${val.name}</p>
                                </div>
                                `;

                                
        
                            })
                            
                        }

                        
                    })//then.map
                })//map
            })//then

        }

