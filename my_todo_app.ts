
import { log } from "console";
import inquirer from "inquirer";
let todoList:string[]=[];
let whileCondition:boolean=true

while (whileCondition===true) {
    
    let myList= await inquirer.prompt([
        {
            name:"selection",
            type:"list",
            message:"what would you like to do ?",
            choices:['Add','Delete','Update']
        }
    ]);

    if(myList.selection==='Add')
    {
        let addTodo= await inquirer.prompt([
            {
                name:"addIn",
                type:"input",
                message:"write something to add in todo list"
            }
        ]);
        if(addTodo.addIn!=='')
        {
            todoList.push(addTodo.addIn);
            console.log("Recored added successfully!");
        }
        else {
            console.log("Please write something to add in todo list");
        }
    }

    else if(myList.selection==='Delete')
    {
        let removeFromTodo=await inquirer.prompt([
            {
                type:"list",
                name:"removeItem",
                message:"Choose an item to remove from todo list",
                choices:todoList
            }
        ]);
        let index=todoList.indexOf(removeFromTodo.removeItem);
        if (index >=0) {
            todoList.splice(index,1);
            console.log("You Deleted",removeFromTodo.removeItem);
            
        }
        
    }
    
    else if(myList.selection==='Update')
    {
        let updateRecord= await inquirer.prompt([
            {
                name:"myUpdate",
                type:"list",
                message:"choose any record to update ?",
                choices:todoList
            }
        ]);
        let updateIndex= todoList.indexOf(updateRecord.myUpdate);        
            if(updateIndex>=0)
            {
                let updateAns= await inquirer.prompt([
                    {
                        type:"input",
                        name:"updateItem",
                        message:"Enter New Name ot update in todo list"
                    }
                ]);
                todoList[updateIndex]=updateAns.updateItem;
                console.log("Recored updated successfully!");
                
            }
        }
        

    console.log(todoList);

    let confirm= await inquirer.prompt([
        {
            name:"choice",
            type:"confirm",
            message:"do you like to continue ?",
            default:true
        }
    ]);

    if(confirm.choice===false)
    {
        whileCondition=false;
    }
}
    
console.log("**************************************");
console.log("Thanks for using todo list.");
console.log("**************************************");
