//let fruitchaat = ["banana","orange","mango"];
//.push()  method ==> last add melon
//fruitchaat.push("melon");
//console.log(fruitchaat);


//let fruitchaatt = ["banana","orange","mango"];
//.pop()  method ==> last mango remove
//fruitchaatt.pop();
//console.log(fruitchaatt);

import inquirer from "inquirer";
let Todos = [];
let condition = true;

while(condition)
{let AddTask = await inquirer.prompt(
    [
    {
        name:"todo",
        type:"input",
        message:"what you want to add in your todos?"
    },
    {
        name:"addMore",
        type:"confirm",
        message:"what you want to add more?",
        default:"false"
    }
]
);
Todos.push(AddTask.todo);
condition = AddTask.addMore
console.log(Todos);
}