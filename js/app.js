(() => {
   const input = document.getElementById('text-field');
   const addBtn = document.getElementById('add');
   const form = document.getElementById('form');
   const ul = document.getElementById('ul');
   const clearTasksBtn = document.getElementById('clear-tasks');
   // const changeBorderBottom = () => {
   //    if (input.length > 0) {
   //       input.style.borderBottomColor = '#658DF2';
   //    } else {
   //       input.style.borderBottomColor = 'red';
   //    }
   // }

   // input.addEventListener('keypress', changeBorderBottom)

   // Add task
   const addTask = (value) => {
      const list = document.createElement('li');
      list.classList.add('list');
      list.innerHTML = `
         <div>
            <input type="checkbox" name="" id="">
         </div>
         <div>
            <p contenteditable="true">${value}</p>
         </div>
         <div class="delete-btn">
            <button class="btn delete">Delete</button>
         </div>
      `;
      ul.appendChild(list);
   }

   // Remove from task   
   const removeTask = (event) => {
      if (event.target.classList.contains('delete')) {
         event.target.parentElement.parentElement.remove();
      }
   }

   // Show clear tasks button
   const showClearTasksBtn = () => {
      clearTasksBtn.style.display = 'inline';
   }

   // Clear tasks
   const clearAllTask = () => {
      ul.innerHTML = '';
   }

   // Clear field
   const clearField = () => {
      input.value = '';
   }

   form.addEventListener('submit', (event) => {
      addTask(input.value);
      clearField();
      showClearTasksBtn();
     event.preventDefault();
   });

   ul.addEventListener('click', removeTask)

})();