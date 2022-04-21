console.log("2) Creación de un objeto con propiedades")
const explorer = {
    name: "Xicoani",
    age: 20,
    mission: "Node JS",
    stack: ["JS", "node", "react", "vue"],
    blog: { url: "github.com/XicoaniCS/blog" } //Esto es un objeto 
}
console.log(explorer)

console.log("Accediendo a las propiedades del objeto")
console.log(explorer.age)
console.log(explorer["age"])

console.log("Ejemplo 3: Objeto con métodos")

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHellowToExplorers: function() {
        console.log("Soy el ajolonauta, Qué onda?!")
    },
    tellMeMore: function() {
        console.log(`Ajolonauta: ${this.name}`)
    }
}
console.log("Ajolonauta:")
console.log(ajolonauta)
ajolonauta.sayHellowToExplorers()
console.log(ajolonauta.tellMeMore())