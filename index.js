const todoInput = document.querySelector(".js-todo-input");
const dueDate = document.querySelector(".js-date-input");

let todoList = [];

function addTodo() {
    todoList.push({
      Name: todoInput.value,
      DueDate: dueDate.value,
    });

    todoInput.value = "";
    dueDate.value = ""
    addToBrowser();
  }

   

function addToBrowser (){
  let tableHeader = document.querySelector('.js-table-header')
  let tableBody = document.querySelector('.js-table-body');

  tableHeader.innerHTML = "";
    tableBody.innerHTML = "";

  let row = document.createElement('tr');
  tableHeader.appendChild(row)
  
  let keys = Object.keys(todoList[0])

  keys.forEach((key) => {
    let th = document.createElement('th');
    row.appendChild(th)
    th.textContent = key;
  })

  

  todoList.forEach((item) => {
    let row = document.createElement('tr');

  keys.forEach((key) => {
    let td = document.createElement('td')
    td.textContent = item[key];
    row.appendChild(td)
  })

  tableBody.appendChild(row)
})

}


  
  



// 1. want to make the first letter of name Upper Case
// 2. the Date should be in day/month/year
// 3. some validations if name is not entered or the date is not entered
