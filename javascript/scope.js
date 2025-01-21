const elements = document.querySelectorAll('.mydiv');
const input = document.getElementById('input');  // Get the input element
let isModified = false;

// Apply initial styles to all .mydiv elements
elements.forEach(div => {
  div.style.backgroundColor = 'white';
  div.style.color = 'green';
});

const button = document.getElementById('myBtn');  // Get the button element
button.addEventListener('click', (event) => {
  console.log('Clicked element:', event.target);

  // Log the current input value when the button is clicked
  console.log('Input value:', input.value);

  // Toggle between modified and original state
  if (isModified) {
    button.innerHTML = 'Click me';
    button.style.borderRadius = 'initial';  // Reset to initial state
    button.style.gridAutoFlow = 'initial';  // Reset gridAutoFlow style (if needed)
  } else {
    button.innerHTML = 'Hii I am Button';
    button.style.borderRadius = '50px';
    button.style.gridAutoFlow = '10';
  }

  // Toggle the modified state
  isModified = !isModified;
});

// Add an event listener to the input to capture its value when changed (optional)
input.addEventListener('input', (e) => {
  console.log('Input value (on change):', e.target.value);
});
