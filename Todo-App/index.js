console.log("running");

let todos =[];
let todoElement;
displayItem();
function addTodo(){
    let todo =document.querySelector('#todo-input');
    
    let dateElement =document.querySelector('#todo-date');
    let todoDate=dateElement.value;
todoElement= todo.value;
console.log(todoElement);

todos.push({item: todoElement,dueDate: todoDate});
todo.value='';
dateElement='';
displayItem();
}
console.log(todos);

function displayItem(){
let containerElement =document.querySelector('.todo-container');
let newHtml='';
for(let i=0;i<todos.length;i++){
    let todoItem=todos[i].item;
    let todoDate=todos[i].dueDate;
    newHtml+=`
    
    <span>${todoItem}</span>
    <span>${todoDate}</span>
    <button class="btn-delete" onclick="todos.splice(${i},1); 
    displayItem();" >Delete</button>
    
    `;
}
containerElement.innerHTML=newHtml;



}