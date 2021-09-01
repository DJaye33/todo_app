const todoInput = document.querySelector(".todo-input");
const addTodo = document.querySelector(".add-todo");

addTodo.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.currentTarget.value === "") {
    todoInput.classList.add("active");
    event.currentTarget.classList.add("active");
    event.currentTarget.style.outlineColor = "#fff";
    todoInput.style.animation =
      "shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both";
  } else {
    todoInput.classList.remove("active");
    event.currentTarget.classList.remove("active");
    event.currentTarget.style.outlineColor = "#c058f3";
    todoInput.style.animation = "";
  }
});
