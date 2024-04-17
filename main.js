#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; // dollar
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinanswer.pin === mypin) {
    console.log("corrcet pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your aamount",
                type: "number",
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("insufficent balance");
        }
        // = += -=
        else {
            mybalance -= amountAns.amount;
            console.log(`your remaining balance is ${mybalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        mybalance -= fast.fastcash;
        console.log(`you have successfully withdrawal ${fast.fastcash} \nyour remaining balance is ${mybalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining balanc is ${mybalance}`);
    }
}
else {
    console.log("incorrcet pin code!!!");
}
