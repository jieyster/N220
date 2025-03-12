// Refrences to DOM
const detailsSectionRef = document.querySelector("#details");

// Data: this is an object that contains an array
const pokemon = {
    name: "Ponyta",
    type: "Fire",
    weaknesses: ["Water", "Ground", "Rock"],
};

console.log("My starter pokemon:", pokemon);
console.log("My pokemon's type:", pokemon.type);

// this is an array of objects
const myParty = [
    { name: "Ponyta", type: "Fire" },
    { name: "Chimchar", type: "Fire" },
    { name: "Meowth", type: "Normal" },
    { name: "Houndoom", type: "Dark|Fire" },
]
// you recall objects within an array with their index number
console.log("First pokemon", myParty[0]);
console.log("Last pokemon", myParty[myParty.length -1].name);

for(let i = 0; i < myParty.length; i++) {
    const currentPokemon = myParty[i];
    detailsSectionRef.innerHTML += "<div>";
    detailsSectionRef.innerHTML += "<h4>" + currentPokemon.name + "</h4>";
    detailsSectionRef.innerHTML += "<p>Types(s):" + currentPokemon.type + "</p>";
    detailsSectionRef.innerHTML += "</div>";
}
