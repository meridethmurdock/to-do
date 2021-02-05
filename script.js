let input = prompt("What would you like to do?");

const todos = ['Clean dishes', 'Clean cat litter box'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('*********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*********')
    } else if (input === 'new') {
        const newTodo = prompt('What would you like to add to the to-do list?');
        todos.push(newTodo);
        console.log(`${newTodo} has been added to the list!`);
    } else if (input === 'delete') {
        console.log('*********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*********')
        const userIndex = parseInt(prompt('Enter the index of the item you would like to delete.'));
        if (!Number.isNaN(userIndex)) {
            const deleted = todos.splice(userIndex, 1);
            console.log(`${deleted} has been removed from the list.`);
        } else {
            console.log('Unknown index.');
            input = prompt("What would you like to do?")
        }
    } input = prompt("What would you like to do?")
}

console.log("Okay, you quit the app.");
