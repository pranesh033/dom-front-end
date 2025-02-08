// Define a variable

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


loadEventlisteners();


function loadEventlisteners(){

    // //Get Task Event
    document.addEventListener("DOMContentLoaded", getTask);
    
    //ADD Task Event
    form.addEventListener("submit", addTask);

    //Clear Specific task
    taskList.addEventListener("click", removeTask);

    //Clear Task
    clearBtn.addEventListener("click", clearTask);


}

function getTask(){

    let tasks;

    if(localStorage.getItem("tasks") === null){

        tasks = [];

        } else {

        tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.forEach(function(element){

        //Create Li element
        const li = document.createElement("li");

        // Add class name
        li.className = "collection-item";

        // Create a text
        li.innerText = element;

        // create a link element
        const link = document.createElement("a");

        //Add Class to link
        link.className = "delete-item secondary-content";

        //Add icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        //Add to list
        li.append(link);

        //Add li to ul
        taskList.append(li);

        })
        
    }  

}


function addTask(e){

    e.preventDefault();

    if(taskInput.value === " "){
        alert("Please input the text");
    }else{
        
        //Create Li element
        const li = document.createElement("li");

        // Add class name
        li.className = "collection-item";

        // Create a text
        li.innerText = taskInput.value;

        // create a link element
        const link = document.createElement("a");

        //Add Class to link
        link.className = "delete-item secondary-content";

        //Add icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        //Add to list
        li.append(link);

        //Add li to ul
        taskList.append(li);

        //Store to lS
        storeToLocalStorage(taskInput.value);


        taskInput.value = " ";

    }

 
}



function storeToLocalStorage(task){

    let tasks;

    if(localStorage.getItem("tasks")=== null){

        tasks = [];

        tasks.push(task);

        console.log("step 1");

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }else{

        tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.push(task);

        console.log(tasks);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        console.log("step 2");

    }
    

}






function removeTask(e){

        if(e.target.parentElement.className ==="delete-item secondary-content"){

            if(confirm("Are you Sure?")){

                e.target.parentElement.parentElement.remove()
                

                // Remove From the LocalStorage  
                removeFromLocalStorage(e.target.parentElement.parentElement.innerText);

            }
        }
    
    }


function removeFromLocalStorage(liText){

    let tasks;

    if(localStorage.getItem("tasks")=== null){

        tasks = [];

    }else{

        tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.forEach(function(task , index){

            if(liText === task){

                tasks.splice(index, 1);


            }

        })

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

   

}



function clearTask(){

    const lists = document.querySelectorAll("li");

    lists.forEach(function(li){

        li.remove();
    
    })

    clearFromLocalStorage();

}

function clearFromLocalStorage(){

    localStorage.clear();

    localStorage.removeItem("tasks");

}




























































// // Define a variable
// const form = document.querySelector("#task-form");
// const taskInput = document.querySelector("#task");
// const taskList = document.querySelector(".collection");
// const clearBtn = document.querySelector(".clear-tasks");


// loadEventlistener();

// function loadEventlistener(){

//     //taking input
//     form.addEventListener("submit" , addTask);

//     // remove a seperate list
//     taskList.addEventListener("click", removeTask);

//     // clearing task list
//     clearBtn.addEventListener("click", clearTask);
// }


// // ADd task event
// function addTask(e){

//     // stops refreshing
//     e.preventDefault();

//     if(taskInput.value === ""){
//         alert("please enter the text");
//     }else{
        
//         // Create a li element
//         const li = document.createElement("li");

//         // Add class name 
//         li.className = "collection-item";

//         // create a text
//         li.innerText = taskInput.value;

//         // create a new link ele
//         const link = document.createElement("a");
        
//         //add class to link
//         link.className = "delete-item secondary-content";

//         //add icon 
//         link.innerHTML = `<i class="fa fa-remove"></i>`;

//         // add to li
//         li.appendChild(link);

//         // add li to ul
//         taskList.appendChild(li);

//         taskInput.value = " ";
//     }

// }

// function removeTask(e){
//     if(e.target.parentElement.className ==="delete-item secondary-content"){
//         if(confirm("Are you Sure?")){
//             e.target.parentElement.parentElement.remove();
//         }
//     }

// }




// function clearTask(){

// //   document.querySelector(".collection").innerHTML = null;
// //   document.querySelector(".collection").innerHTML = " ";
  
// const lists = document.querySelectorAll("li");
    
//     lists.forEach(function(li){
//         li.remove();
//     }

// )}

