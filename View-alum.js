import { stdin } from "process";
import readline from "readline"

//10- Añadir un alumno nuevo con los siguientes datos:
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//PRPDUCTOR
function viewInfo(){
    const promise =new Promise((resolve,reject) => {
        rl.question("Introduce tu edad: ", (age) => {
            rl.pause();
            resolve(age);
        });
        rl.question("Introduce tu genero: ", (gender) => {
            rl.pause();
            resolve(gender);
        });
        rl.question("Introduce tu nombre: ", (name) => {
            rl.pause();
            resolve(name);
    });
    
    return promise;
}
//CONSUMIDOR
const infoFromConsola = await viewInfo()

console.log(infoFromConsola)
/*console.log("Añadir alumno")
const arr = ['First item', 'Second item', 'Third item'];

arr.push('Fourth item');

console.log(arr); // ['First item', 'Second item', 'Third item', 'Fourth item']*/