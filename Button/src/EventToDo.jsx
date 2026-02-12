export default function EventToDo(){
    // function handleClick({name}){
    //     alert(`you pressed button ${name}`);
    // }

    function handleSubmit(e){
        e.preventDefault();
        const input =e.target.value;
        const inputValues= input.trim();
        if(inputValues===""){
            alert("Task can not be empty");
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=<span>${inputValues}</span>


    }
    return(
        <>
        <h1>To Do App</h1>
        <button onClick={()=>handleClick({name:"Kiet"})}>Click Me</button>
        
        <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add your task here"/>
        <input type="submit">Add Task</input>
        
        </form>
        <ul id="task List" onClick={handleClickList}>
            <li></li>
        </ul>
        </>
        
    );
}