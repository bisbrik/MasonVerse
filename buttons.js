class Button {
    constructor(label, url) {
        this.label = label;
        this.url = url;
    }
    
    // Method to create a button element
    createElement() {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = this.label;
        buttonElement.onclick = () => window.open(this.url, '_blank'); // Open URL in new tab
        return buttonElement;
    }
}

let buttons = [
    new Button('PatriotWeb', 'https://patriotweb.gmu.edu/'),
    new Button('Blackboard', 'https://mymasonportal.gmu.edu/ultra/institution-page'),
    new Button('Outlook', 'https://outlook.office.com/mail/'),
];

// Function to add a new button to the array and update the display
function addButton(label, url) {
    buttons.push(new Button(label, url));
    updateButtons();
}

// Function to update the display of buttons
function updateButtons() {
    const container = document.getElementById('buttonContainer');
    container.innerHTML = ''; // Clear existing buttons
    buttons.forEach(button => {
        container.appendChild(button.createElement());
    });
}

// Function to create and add a button from input fields
function createAndAddButton() {
    const label = document.getElementById('newButtonLabel').value;
    const url = document.getElementById('newButtonUrl').value;
    // Check for duplicate label or URL
    const isDuplicate = buttons.some(button => button.label === label || button.url === url);
    
    if (!label || !url) {
        alert('Please enter both a label and a URL.');
    } else if (isDuplicate) {
        alert('A button with this label or URL already exists.');
    } else {
        addButton(label, url);
        // Clear input fields after adding
        document.getElementById('newButtonLabel').value = '';
        document.getElementById('newButtonUrl').value = '';
    }
}

// Initial call to display buttons
document.addEventListener('DOMContentLoaded', () => {
    updateButtons();
});
