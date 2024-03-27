import inquirer from "inquirer";

type anstype ={
    userGuess:number
}


const systemgeneratedno = Math.floor(Math.random() * 10);

// console.log(systemgeneratedno);
const answers: anstype =  await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"write your guess b/w 5 to 10:"
    }
])
// console.log(answers.userGuess)


const {userGuess} = answers;

console.log(userGuess,"userGuess",systemgeneratedno, 'sys')
if(userGuess === systemgeneratedno){
  
    console.log("yeaa your answer is correct  /n you win!")
}else {
    console.log("please try again better luck next time!")
}
