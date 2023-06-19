const all = [
  {
    id: 1,
    img: "../img/dacha/dacha1.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 2,
    img: "../img/dacha/dacha2.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 3,
    img: "../img/dacha/dacha3.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 4,
    img: "../img/dacha/dacha4.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 5,
    img: "../img/dacha/dacha1.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 6,
    img: "../img/dacha/dacha2.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 7,
    img: "../img/dacha/dacha3.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 8,
    img: "../img/dacha/dacha4.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
];
const brevno = [
  {
      id: 2,
      img: "../img/dacha/dacha2.jpg",
      title: "ДД14",
      size: "96 м&sup2",
      price: "493 000 ₽",
    },
    {
      id: 6,
      img: "../img/dacha/dacha2.jpg",
      title: "ДД14",
      size: "96 м&sup2",
      price: "493 000 ₽",
    },
];
const banya = [
  {
    id: 2,
    img: "../img/house/banya/2.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
];
const brus = [
  {
    id: 8,
    img: "../img/dacha/dacha4.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 4,
    img: "../img/dacha/dacha4.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
];
const carcas = [
  {
    id: 3,
    img: "../img/dacha/dacha3.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 7,
    img: "../img/dacha/dacha3.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
];
const derevo = [
  {
    id: 1,
    img: "../img/dacha/dacha1.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 5,
    img: "../img/dacha/dacha1.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
];
const fundament = [
  {
      id: 4,
    img: "../img/dacha/dacha4.jpg",
    title: "ДД14",
    size: "96 м&sup2",
    price: "493 000 ₽",
  },
  {
    id: 4,
  img: "../img/dacha/dacha4.jpg",
  title: "ДД14",
  size: "96 м&sup2",
  price: "493 000 ₽",
  },
]


const parent = document.getElementById("filterProgects");

const renderHTML = (value = all) => {
  for (let item of value) {
    const toHTML = `
    <picture class="projects__result-picture">
      <img src="${item.img}">
    </picture>
    <div class="projects__result-data">
      <h2 class="projects__result-title">
        ${item.title}
      </h2>
      <div class="projects__group flex">
        <div class="projects__result-size">
          ${item.size}
        </div>
        <div class="projects__result-price">
          ${item.price}
        </div>
        <button class="btn projects__button-secondary projects__result-button">
          Подробности
        </button>
      </div>
    </div>
    `;
    const li = document.createElement("li");
    li.className = "projects__result-item flex";
    li.innerHTML = toHTML;
    parent.appendChild(li);
  }
};
const checkingValue = () => {
  const value = document.querySelector(
    'input[name = "project_radio"]:checked'
  ).value;
  while (parent.children.length > 1) {
    parent.removeChild(parent.lastChild);
  }
  switch (value) {
    case "all":
      renderHTML(all);
      break;
    case "dacha":
      renderHTML(all);
      break;
    case "brevno":
      renderHTML(brevno);
      break;
    case "banya":
      renderHTML(banya);
      break;
    case "brus":
      renderHTML(brus);
      break;
    case "carcas":
      renderHTML(carcas);
      break;
      case "derevo":
      renderHTML(derevo);
      break;
    case "fundament":
      renderHTML(fundament);
      break;
  }
};
renderHTML();
