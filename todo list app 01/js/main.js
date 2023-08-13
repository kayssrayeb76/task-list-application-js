window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions')

        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerHTML = 'Edit';

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete');
        delete_btn.innerHTML = 'Delete';

        task_actions_el.appendChild(edit_btn);
        task_actions_el.appendChild(delete_btn);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        edit_btn.addEventListener('click', () => {
            if (edit_btn.innerText.toLowerCase() == 'edit') {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                edit_btn.innerText = 'Save';
            } else {
                task_input_el.setAttribute('readonly', 'readonly');
                edit_btn.innerText = 'Edit';
            }
        });
        delete_btn.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})