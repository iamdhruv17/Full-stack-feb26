// export default function EventToDo(){
//     // function handleClick({name}){
//     //     alert(`you pressed button ${name}`);
//     // }

//     function handleSubmit(e){
//         e.preventDefault();
//         const input =e.target.task;
//         const inputValues= input.value.trim();
//         if(inputValues===""){
//             alert("Task can not be empty");
//             return;
//         }
//         const li=document.createElement("li");
//         li.innerHTML=`<span>${inputValues}</span>
//         <button class="deletebtn">Delete</button>`;
//         document.getElementById("task List").appendChild(li);

//     }
//     function handleClickList(e){
//         if(e.target.className==="deletebtn"){
//             e.target.className==="deletebtn";
//             li.remove();
//         }}
//     return(
//         <>
//         <h1>To Do App</h1>
//         <button onClick={()=>handleClick({name:"Kiet"})}>Click Me</button>
        
//         <form onSubmit={handleSubmit}>
//         <input type="text" name="task" placeholder="Add your task here"/>
//         <button type="submit">Add Task</button>
        
//         </form>
//         <ul id="task List" onClick={handleClickList}>
            
//         </ul>
//         </>
        
//     );
// }



import { useState } from "react";
import './EventToDo.css'
export default function EventToDo()
{  
/*    function handleSubmit(e)
    {
        e.preventDefault();
        //console.log("Event Happen");
        const input=e.target.task;
        const taskValue=input.value.trim();
        if(taskValue==="")
        {
            alert("Can not add empty task"); 
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=`<span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);

    }

    function handleListClick(e)
    {
        if(e.target.className==="deleteBtn")
        {
            e.target.parentElement.remove();
        }
    }

    return(
    <>
    <h1> To Do List</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" name="task" placeholder="Enter Task"/>
    <button type="submit">Add Task</button>

    </form>
    <ul id="taskList" onClick={handleListClick}></ul>
    </>);*/

   const[task,setTask]=useState("");
   const[tasks,setTasks]=useState([]);


 function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }


    return(
        <div className="todo-container">
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
);
}
