const persona = {
  nombre: "Lorena",
  apellido: "Guartazaca",
  edad: 28,
  direccion: {
    ciudad: "Lago Agrio",
    zip: 523123,
    lat: 14.3232,
    lng: 34.456842,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Leo";

console.log(persona);
console.log(persona2);
