console.log("POO")

//Objeto de JS
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: 12,
    color: "pink"
}

//Como crear una clase
class Ajolonauta {
    constructor(name, mission, age, color) {
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }
}

//Objeto de JS
const woopa_obj_js = {}
console.log(woopa_obj_js)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink") //Instanciar un objeto
console.log(woopa)

const wooper = new Ajolonauta("Wooper", "Java", 9, "Purple")
console.log(wooper)