
const students = [{
    age: 20,
    examScores: [],
    gender: 'male',
    name: 'Canguil'
  },
  {
    age: 35,
    examScores: [],
    gender: 'male',
    name: 'Marcelo'
  },
  {
    age: 23,
    examScores: [],
    gender: 'male',
    name: 'Victor'
  },
  {
    age: 29,
    examScores: [],
    gender: 'male',
    name: 'Leo'
  },
  {
    age: 35,
    examScores: [],
    gender: 'male',
    name: 'Francisco'
  },
  {
    age: 26,
    examScores: [],
    gender: 'male',
    name: 'Carlos'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'Cecilia'
  },
  {
    age: 25,
    examScores: [],
    gender: 'female',
    name: 'Vanessa'
  },
  {
    age: 33,
    examScores: [],
    gender: 'female',
    name: 'Luisa'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'Ana'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'Isabel'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'Rafaela'
  },
  {
    age: 27,
    examScores: [],
    gender: 'female',
    name: 'Ro'
  },
]



const allNames = ['Canguil', 'Marcelo', 'Victor', 'Leo', 'Francisco', 'Carlos', 'Cecilia', 'Vanessa', 'Luisa', 'Ana', 'Isabel', 'Rafaela'];
const availableMaleNames = ['Canguil', 'Marcelo', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Vanessa', 'Luisa', 'Ana', 'Isabel', 'Rafaela'];
const availableGenders = ['male', 'female'];

//1- Mostrar en formato de tabla todos los alumnos.
console.log("Tabla de alumnos:")
console.table(students)

//2- Mostrar por consola la cantidad de alumnos que hay en clase. 
console.log("Total de alumnos:", students.length)

//3- Mostrar por consola todos los nombres de los alumnos.
console.log("Nombres de todos los alumnos:", availableMaleNames, availableFemaleNames)
console.log("Nombres de todos los alumnos:", allNames)

//4- Eliminar el último alumno de la clase.
let last = students.pop ()
console.log("Elimino último alumno de la clase:")
console.table(students)

//5- Eliminar un alumno aleatoriamente de la clase.
let random = students;
function aleatorio (students) {
    return students[Math.floor(Math.random() * students.length)]
}
console.log("Alumno eliminado aleatoriamente de la clase:")
console.table(aleatorio (students))

//6- Mostrar por consola todos los datos de los alumnos que son chicas.
const femaleAlumn = students.filter(female => female.gender == "female");
console.log("Alumnas mujeres")
console.table(femaleAlumn);

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
console.log("Total de Mujeres:", availableFemaleNames.length)
console.log("Total de Hombres:", availableMaleNames.length)

//8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
let allfemale = "female"
console.log("¿Todos los alumnos de la clase son chicas?")
console.table (students == "female")

//9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
const rangoEdad = students.filter(alumn => alumn.age >=20 && alumn.age <=25);
console.log("Alumnos entre 20 y 25 años")
console.table(rangoEdad);



//11- Mostrar por consola el nombre de la persona más joven de la clase.
console.log("Persona más jóven:")
let min = Math.min(...students.map(youngest => youngest.age));
let minValues = students.filter(youngest => youngest.age == min);
console.table(minValues);

//12- Mostrar por consola la edad media de todos los alumnos de la clase.
console.log("Edad media de la clase:")
const MediaAge = students;
const Allalumns = MediaAge.filter(person => person.age);
const avr = Allalumns.reduce((total, next) => total + next.age, 0) / Allalumns.length;
console.log(avr);

//13- Mostrar por consola la edad media de las chicas de la clase.
console.log("Edad media de las alumnas:")
const people = students;
const females = people.filter(person => person.gender === 'female');
const average = females.reduce((total, next) => total + next.age, 0) / females.length;
console.log(average);

//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
console.log("Nueva nota aleatoria:")
for(let student of students){
  let max = 1
  let min = 10
student.examScores = Math.floor(Math.random() * (max - min) ) + min;
}
console.table(students);

//15- Ordenar el array de alumnos alfabéticamente según su nombre.
let ordenAlfabetico = (allNames);
ordenAlfabetico.sort();
console.log("Nombre de alumnos alfabéticamente:")
console.table (allNames)

//16- Mostrar por consola el alumno de la clase con las mejores notas.
console.log("Alumno con mejor nota:")
let bestscore = Math.max(...students.map(topscore => topscore.examScores));
let score = students.filter(topscore => topscore.examScores == bestscore);
console.table(score);



//10- Añadir un alumno nuevo con los siguientes datos:
console.log("Nuevo Alumno al final de la tabla:")


let array = students;

array.push({
   age: 22,
   examScores: [],
   gender: "female",
   name: "Carolina",
});

console.table(array)
