export default function EventToDo(){
    // function handleClick({name}){
    //     alert(`you pressed button ${name}`);
    // }

    function handleSubmit(e){
        e.preventDefault();
        const input =e.target.task;
        const inputValues= input.value.trim();
        if(inputValues===""){
            alert("Task can not be empty");
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=`<span>${inputValues}</span>
        <button class="deletebtn">Delete</button>`;
        document.getElementById("task List").appendChild(li);

    }
    function handleClickList(e){
        if(e.target.className==="deletebtn"){
            e.target.className==="deletebtn";
            li.remove();
        }}
    return(
        <>
        <h1>To Do App</h1>
        <button onClick={()=>handleClick({name:"Kiet"})}>Click Me</button>
        
        <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add your task here"/>
        <button type="submit">Add Task</button>
        
        </form>
        <ul id="task List" onClick={handleClickList}>
            
        </ul>
        </>
        
    );
}