

//API https://rickandmortyapi.com/api/character

class characters {
    constructor(_id, _name, _species, _image){
        this.id = _id;
        this.name = _name;
        this.species = _species;
        this.image = _image

    }
    display(){
        let characters = [this.id, this.name, this.species, this.image];
        show(characters);
    }
};

let api_call = async() => {
    //let random_character = [...Array(20)].map(()=>{return Math.floor(Math.random()*(826 - 1 +1))}); 
    
    try{  
        const url = `https://rickandmortyapi.com/api/character`;      
        const response = await fetch(url);
        const data = await response.json();
        try{
        for (let i = 0; i < data.results.length; i++){
            const response2 = await axios.get(url);
            let data2 = response2.data;
            let id = data2.results[i].id;
            let name = data2.results[i].name;
            let species = data2.results[i].species;
            let image = data2.results[i].image;
            let list = new characters(id, name, species, image);
            list.display();
        }
    }catch(err){
        console.log(err+' error en llamada a axios')
    }
        
    }
    catch(err){
        console.log(err + ' en Fetch');
    }
} 

api_call()

const show = (characters) => {
    let card = `
    <div class="card" style="width: 18rem;">
  <img src="${[characters[3]]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${[characters[1]]}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${[characters[2]]}</li>
  </ul>
</div>`
    document.getElementById('card-container').innerHTML += card;
}