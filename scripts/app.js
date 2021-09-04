const checkmarks = document.querySelectorAll(".checkmark");
const check = document.querySelector(".checkmark-mark");
const todoItem = document.querySelectorAll(".todo-item");
const itemsLeft = document.querySelectorAll(".items");
const footerContols = document.querySelectorAll(".footer-controls");

const todoCount = () => {
  itemsLeft.forEach((item) => {
    item.textContent = todoItem.length;
  });
};

todoCount();

// Places blue color on currently active footer control
const checkForActiveControl = () => {
  footerContols.forEach((control) => {
    control.classList.remove("active");
  });
};

const checkForAllFooterControl = () => {
  todoItem.forEach((todo) => {
    todo.classList.remove("hide");
  });
};

const checkForActiveFooterControl = () => {
  todoItem.forEach((todo) => {
    if (todo.classList.contains("completed")) {
      todo.classList.add("hide");
    } else {
      todo.classList.remove("hide");
    }
  });
};

const checkForCompleted = () => {
  todoItem.forEach((todo) => {
    if (todo.classList.contains("completed")) {
      todo.classList.remove("hide");
    } else {
      todo.classList.add("hide");
    }
  });
};

checkmarks.forEach((checkmark) => {
  checkmark.addEventListener("click", (event) => {
    event.currentTarget.parentElement.parentElement.classList.toggle(
      "completed"
    );
  });
});

// for checkmark button and striketrhough on click
checkmarks.forEach((checkmark) => {
  checkmark.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("showGradient");
    event.currentTarget.firstElementChild.classList.toggle("checkmark-check");
    event.currentTarget.nextElementSibling.classList.toggle("strike");
  });
});

// Add active class to footer control
footerContols.forEach((control) => {
  control.addEventListener("click", (event) => {
    checkForActiveControl();
    event.currentTarget.classList.add("active");

    if (event.currentTarget.innerText === "Completed") {
      checkForCompleted();
    } else if (event.currentTarget.innerText === "Active") {
      checkForActiveFooterControl();
    } else if (event.currentTarget.innerText === "All") {
      checkForAllFooterControl();
    }
  });
});
