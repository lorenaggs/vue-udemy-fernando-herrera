const saludar = (x) => `Hola ${x}`;
const name = "Lorena";
console.log(saludar(name));

const getUser = () => ({ uid: "ABC123", username: "Tony001" });
console.log(getUser());

const heroes = [
  { id: 1, name: "Batman" },
  { id: 2, name: "Superman" },
];

const heroe = heroes.find((heroe) => heroe.id === 1);

console.log(heroe);
