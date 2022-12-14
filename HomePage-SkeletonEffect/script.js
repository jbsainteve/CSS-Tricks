const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelectorAll(".card");


function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

async function myAsyncFunction(){
    //Do what you want here 
    console.log("Before the delay")

    let aa = await delay(3);
    console.log('promise',aa)

    console.log("After the delay")
    //Do what you want here too
    console.log('Avant le loadContent')
	loadContent()
}

const loadContent = async () => {
  const results = await fetch("https://picsum.photos/v2/list")
  const data = await results.json()
  createCards(data)
}

const createCards = (data) => {

  let cardsList = '';

  for(let i = 0; i < cards.length; i++) {

    const newCard = `
    <div class="card">
      <img src=${data[i].download_url} class="top-img" />
      <div class="content">
        <h3 class="card-title">Lorem, ipsum dolor sit amet</h3>
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus.</p>
        <p class="card-text">Lorem, ipsum dolor</p>
      </div>
    </div>
    `
    cardsList += newCard;
  }
  cardsGrid.innerHTML = cardsList;
}

myAsyncFunction();
console.log('Dernière ligne du programme')

