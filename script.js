let menubtn = document.getElementById('menu');
let navlist = document.getElementById('nav-list');


    menubtn.addEventListener("click", (e)=> {
        e.preventDefault();
        navlist.classList.toggle('active');
    }
);



//    Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');

        console.log(slides.length)
        console.log(dots)
        function goToSlide() {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
        currentSlide++;
        if(currentSlide>=slides.length){
            currentSlide = 0;
        }
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        

        setInterval(goToSlide, 2000);



const cards = [
  {id:1, name: "Blue-Eyes White", image: "images/10691144.jpg", atk: 3000, def: 2500, description: "Un dragon mythique doté d'une puissance incroyable et d'une aura glaciale.", price: 500, rarity: "Legendary" ,button:1},
  {id:2, name: "Dark Magician", image: "images/72330894.jpg", atk: 2500, def: 2100, description: "Un magicien sombre maître des arcanes qui manipule la magie ancienne.", price: 450, rarity: "Epique" },
  {id:3, name: "Red-Eyes Black", image: "images/64475743.jpg", atk: 2400, def: 2000, description: "Un dragon féroce aux yeux rouges, symbole de colère et de puissance brute.", price: 350, rarity: "Rare" },
  {id:4, name: "Summoned Skull", image: "images/84962466.jpg", atk: 2500, def: 1200, description: "Un démon ténébreux invoqué des profondeurs pour semer la destruction.", price: 280, rarity: "Commune" },
  {id:5, name: "Dark Paladin", image: "images/87209160.jpg", atk: 2900, def: 2400, description: "Un chevalier-magicien fusionnant la force du mage et du guerrier ancien.", price: 600, rarity: "Legendary" },
  {id:6, name: "Elemental HERO", image: "images/92223430.jpg", atk: 2500, def: 2000, description: "Un héros venu d’un autre monde, porteur d’une lumière protectrice divine.", price: 320, rarity: "Epique" },
  {id:7, name: "Celtic Guardian", image: "images/84962466.jpg", atk: 1400, def: 1200, description: "Un elfe agile au courage indomptable, défenseur des forêts anciennes.", price: 150, rarity: "Commune" },
  {id:8, name: "The Tormentor", image: "images/10691144.jpg", atk: 4000, def: 4000, description: "L’un des dieux égyptiens, symbole absolu de la puissance et de la peur.", price: 1000, rarity: "Legendary" },
  {id:9, name: "Slifer the Sky", image: "images/64475743.jpg", atk: 5000, def: 5000, description: "Un dragon divin qui rugit du ciel, frappant ses ennemis de la foudre.", price: 1200, rarity: "Rare" },
  {id:10, name: "Kuriboh", image: "images/72330894.jpg", atk: 300, def: 200, description: "Une petite créature courageuse qui se sacrifie pour protéger son maître.", price: 80, rarity: "Commune" }
];




const cardscontainer = document.getElementById("cards")

function displaycards(listcards){
    cardscontainer.innerHTML = "";
    listcards.forEach(card => {
        const div = document.createElement("div")
        div.classList.add("card");

        div.innerHTML = `
        <div class = "part1">
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name}">
            <div class="details">
                <p class="title">${card.name}</p>
                <p class="paragraphe">${card.description}</p>
                <div class="atk-def">
                    <span>ATK/${card.atk}</span>
                    <span>DEF/${card.def}</span>
                </div>
            </div>
        </div>
        <div class="part2">
            <p class="price">${card.price}$</p>
                <button id="ajouter" data-id="${card.id}" class="ajouter"><i class="fas fa-shopping-cart" style="color: #ffffff;"></i>Ajouter au pannier</button>
                <button id="save" class="favorite"><i class="fa-regular fa-heart" style="color: #ffffff;"></i></button>
        </div>
        `

        cardscontainer.appendChild(div)
    })
}


displaycards(cards)



let All = document.getElementById("All");
let Commune = document.getElementById("Commune");
let Rare = document.getElementById("Rare");
let Epique = document.getElementById("Epique");
let Legendary = document.getElementById("Legendary");

let categories = document.querySelector('.categories');
let buttons = categories.querySelectorAll('button');

// All button
All.onclick = () => {
    displaycards(cards);
    buttons.forEach(btn => btn.classList.remove('active'));
    All.classList.add('active');
};

// Commune button
Commune.onclick = () => {
    let filter = cards.filter(card => card.rarity === "Commune");
    displaycards(filter);
    buttons.forEach(btn => btn.classList.remove('active'));
    Commune.classList.add('active');
};

// Rare button
Rare.onclick = () => {
    let filter = cards.filter(card => card.rarity === "Rare");
    displaycards(filter);
    buttons.forEach(btn => btn.classList.remove('active'));
    Rare.classList.add('active');
};

// Epique button
Epique.onclick = () => {
    let filter = cards.filter(card => card.rarity === "Epique");
    displaycards(filter);
    buttons.forEach(btn => btn.classList.remove('active'));
    Epique.classList.add('active');
};

// Legendary button
Legendary.onclick = () => {
    let filter = cards.filter(card => card.rarity === "Legendary");
    displaycards(filter);
    buttons.forEach(btn => btn.classList.remove('active'));
    Legendary.classList.add('active');
};





let panniercontainer = document.getElementById("pannier")
let pannier =[]
let allbuttons = document.querySelectorAll('.ajouter');
allbuttons.forEach(btn=>{
    btn.onclick = ()=> {
        btn.classList.add("active")
    btn.disabled = true
        let id = btn.getAttribute('data-id')
        let select = cards.find(card => card.id == id) ?? {}
        pannier.push(select)
        localStorage.setItem("selectedcart",JSON.stringify(pannier))
    }
})







