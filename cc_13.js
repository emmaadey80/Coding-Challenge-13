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
    removeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // (task 4) prevent the event from bubbling up
        card.remove(); // remove the card from the DOM
    });

    // Task 5: Inline Editing of Employee Details

    // (Task 5) adding functionality when double-click on the card
    card.addEventListener('dblclick', () => {
        // allows to edit
        const currentName = employeeName.textContent;
        const currentPosition = employeePosition.textContent;

        // replace editited info to show on card
        employeeName.innerHTML = `<input type="text" value="${currentName}" />`;
        employeePosition.innerHTML = `<input type="text" value="${currentPosition}" />`;

        // create save button and show info 
        const saveButton = document.createElement('button'); // create save button
        saveButton.textContent = 'Save';
        saveButton.setAttribute('class', 'save-btn');
        
        saveButton.addEventListener('click', () => { 
            // get the updated values from the input fields
            const updatedName = employeeName.querySelector('input').value;
            const updatedPosition = employeePosition.querySelector('input').value;

            // update the employee card with new values
            employeeName.textContent = updatedName;
            employeePosition.textContent = updatedPosition;

            // remove the "save" button after pressing save
            saveButton.remove();
        });

        // append the "save" button to the card
        card.appendChild(saveButton);
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

// Task 3: Converting NodeLists to Arrays for Bulk Updates

function updateEmployeeCards() {
    // use selectorAll to select all employee cards
    const employeeCards = document.querySelectorAll('.employee-card');

    // convert NodeList to an array using Array.from() or the spread operator
    const employeeCardsArray = Array.from(employeeCards);  

    // loop through each employee card and apply a style update or add a highlighting class
    employeeCardsArray.forEach((card) => {
        card.style.backgroundColor = 'lightpink'; // change background color of each card to pink
        card.style.border = '2px solid purple'; // add purple boarder
    });
}

// call the updateEmployeeCards function to highlight all employee cards
updateEmployeeCards();







