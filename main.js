#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance = 10000;
let myPin = 4563;
let user = await inquirer.prompt({ name: "pin", type: "number", message: "Please Enter your Pin Code " });
if (user.pin === myPin) {
    console.log(chalk.green(`Pin Code Accessed`));
    let options = await inquirer.prompt({ name: "select", type: "list", message: "Please Select an Option.", choices: ['Withdraw', 'Balance inquiry'] });
    if (options.select === 'Withdraw') {
        let choose = await inquirer.prompt([
            { name: "fastCash", type: "list", message: "Chose Amount for fast Cash or Enter Your amount", choices: ['1000', '2000', '5000', 'Enter'] }
        ]);
        if (choose.fastCash === '1000') {
            if (choose.fastCash <= balance) {
                balance -= choose.fastCash;
                console.log(chalk.green("Transiction Successful"));
                console.log(chalk.bgBlue(`Your Remaining Balance is ${balance}`));
            }
            else {
                console.log(chalk.yellow("Sorry Low Balance"));
            }
        }
        else if (choose.fastCash === '2000') {
            if (choose.fastCash <= balance) {
                balance -= choose.fastCash;
                console.log(chalk.green("Transiction Successful"));
                console.log(chalk.bgBlue(`Your Remaining Balance is ${balance}`));
            }
            else {
                console.log(chalk.yellow("Sorry Low Balance"));
            }
        }
        else if (choose.fastCash === '5000') {
            if (choose.fastCash <= balance) {
                balance -= choose.fastCash;
                console.log(chalk.green("Transiction Successful"));
                console.log(chalk.bgBlue(`Your Remaining Balance is ${balance}`));
            }
            else {
                console.log(chalk.yellow("Sorry Low Balance"));
            }
        }
        else {
            let enterAmount = await inquirer.prompt({ name: "myAmount", type: "number", message: "Enter Your Amount" });
            if (enterAmount.myAmount <= balance) {
                balance -= enterAmount.myAmount;
                console.log(chalk.green("Transiction Successful"));
                console.log(chalk.bgBlue(`Your Remaining Balance is ${balance}`));
            }
            else {
                console.log(chalk.yellow("Sorry Low Balance"));
            }
        }
    }
    else {
        console.log(chalk.bgBlue(`Your Account Balance is: ${balance}`));
    }
}
else {
    console.log(chalk.red(`Access Denied..!! Enter Correct Pin!!`));
    console.log(chalk.red(`Try This "4563"`));
}
