/* Select Elements */
const plates = document.querySelector('.plates');
const addItemsForm = document.querySelector('.add-items');

const items = JSON.parse(localStorage.getItem('items')) || [];

/* Functions */
// Add Item
function addItem(e) {
  e.preventDefault();

  const text = this.querySelector('[type="text"]').value;

  if (!text.trim()) {
    alert('Fill Input');
  } else {
    const text = this.querySelector('[type="text"]').value.trim();
    const item = {
      text,
      done: false,
    };
    items.push(item);
    // Display Item
    displayItem(items, plates);
    // Add to localstorage
    localStorage.setItem('items', JSON.stringify(items));
    // Reset Input
    this.reset();
  }
}

// Display Item
function displayItem(items, plates) {
  plates.innerHTML = items
    .map((item, index) => {
      return /* html */ `
            <li>
            <input type="checkbox" data-index='${index}' id="item${
        index + 1
      }" ${item.done ? 'checked' : ''}>
            <label for="item${index + 1}">${item.text}</label>
            <button onclick="removeItem(${index})">Remove</button>
            </li>
        `;
    })
    .join('');
}

// Remove Item
function removeItem(index) {
  items.splice(index, 1);
  // Update localstorage and html
  localStorage.setItem('items', JSON.stringify(items));
  displayItem(items, plates);
}

// Toggle Done
function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  // Update localstorage and html
  localStorage.setItem('items', JSON.stringify(items));
  displayItem(items, plates);
}

/* Event Listeners */
addItemsForm.addEventListener('submit', addItem);
plates.addEventListener('click', toggleDone);

/* Display Item */
displayItem(items, plates);
