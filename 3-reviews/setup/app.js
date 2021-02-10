// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "./res/elsa.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "./res/mia.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "lexi lore",
    job: "intern",
    img:
      "./res/lexi.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const rand = document.getElementById("rand");

var switchNumber = 0;

next.addEventListener("click", () => {
  if (switchNumber > reviews.length - 1) switchNumber = 0;
  if (switchNumber < 0) switchNumber = reviews.length - 1;
  itemSwitch(reviews, "next");
  pushData(switchNumber);
  console.log("next EventListener succeeded");
})

rand.addEventListener("click", () => {
  let randomInt = getRandomInt(4);
  pushData(randomInt);
})

function pushData(id){
  console.log(reviews.indexOf("id: 4"));
  document.getElementById("person-img").src = reviews[id].img;
  document.querySelector("h4.author").textContent = reviews[id].name;
  document.getElementById("job").textContent = reviews[id].job;
  document.querySelector("p#info").textContent = reviews[id].text;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function itemSwitch(array, direction){
  if (switchNumber >= 0 && switchNumber < array.length){
    console.log("itemSwitch: switchNumber " + switchNumber);
    if (direction == "next") switchNumber++;
    else switchNumber--;
  }
}
