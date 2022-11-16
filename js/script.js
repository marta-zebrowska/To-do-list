const tasks = [
  {
content: "iść na próbę",
done: false,
  },
  {
content: "zjeść obiad",
done: true,
  }, 
]; 

const render = () => {
let htmlString = "";
for (const task of tasks) {
  htmlString += `
  <li 
  class="list__item ${task.done ? "list__item--done" : ""}"
>
<button class="js-done">zrobione?</button>
<button class="js-remove">usuń</button>
${task.content}
</li>
  `;
}
document.querySelector(".js-tasks").innerHTML = htmlString;
};

const init = () => {
  render();
  };

init();