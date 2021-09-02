const checkmarks = document.querySelectorAll(".checkmark");
const check = document.querySelector(".checkmark-mark");
const todoItem = document.querySelectorAll(".todo-item");
const itemsLeft = document.querySelector(".items");

checkmarks.forEach((checkmark) => {
  checkmark.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    event.currentTarget.firstElementChild.classList.toggle("checkmark-check");
    event.currentTarget.nextElementSibling.classList.toggle("strike");
  });
});

// show todo count
itemsLeft.textContent = todoItem.length;

// const todoInput = document.querySelector(".todo-input");
// const addTodo = document.querySelector(".add-todo");
// const todoItemContainer = document.querySelector(".todo-item-container");
// const closeBtn = document.querySelectorAll(".delete-todo");
// const todoItem = document.querySelectorAll(".todo-item");

// closeBtn.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     event.path[2].style.display = "none";
//     console.log(event);
//   });
// });

// addTodo.addEventListener("keydown", (event) => {
//   if (event.key === "Enter" && event.currentTarget.value === "") {
//     todoInput.classList.add("active");
//     event.currentTarget.classList.add("active");
//     event.currentTarget.style.outlineColor = "#fff";
//     todoInput.style.animation =
//       "shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both";
//   } else {
//     todoInput.classList.remove("active");
//     event.currentTarget.classList.remove("active");
//     event.currentTarget.style.outlineColor = "#c058f3";
//     todoInput.style.animation = "";

//     // insert todo
//     todoItemContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//           <div class="todo-item">
//           <div class="todo-item-check">
//             <div role="button" class="checkmark">
//               <!-- <img src="/images/icon-check.svg" alt="toggle todo" /> -->
//             </div>
//             <p class="todo-item-text">${event.currentTarget.value}</p>
//           </div>
//           <figure role="button" class="delete-todo" hidden>
//             <img src="/images/icon-cross.svg" alt="delete todo item" />
//           </figure>
//         </div>
//           `
//     );

//     event.currentTarget.value = "";
//   }
// });
