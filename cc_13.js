// Task 2: Adding Employee Cards Dynamically

// function to create employee card
function addEmployeeCard(name, position) {
    
    // creating a new div for the employee card
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
    
    // creating the employee name element
    const employeeName = document.createElement('h3');
    employeeName.textContent = name;

    // creating the employee position element
    const employeePosition = document.createElement('p');
    employeePosition.textContent = position;

    // creating the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('class', 'remove-btn');
    
    // adding functionality to remove the card when clicked
    removeButton.addEventListener('click', () => {
        card.remove();
    });

     // appending the elements to the container (name, postion, remove button)
    card.appendChild(employeeName); // adding name
    card.appendChild(employeePosition); // adding postion
    card.appendChild(removeButton); // adding remove button

    const employeeContainer = document.getElementById('employeeContainer'); 
    employeeContainer.appendChild(card);
}

// append the elements to the container
addEmployeeCard('Jeigh Ives', 'Engineer at NASA'); // output: Jeigh Ives Engineer at NASA
addEmployeeCard('Alex Adey', 'Nurse at St. Josephs'); // output: Alex Adey Nurse at St. Josepshs
addEmployeeCard('Sam Reynolds', 'PA at Tampa General'); // output: Sam Reynolds PA at Tampa General




