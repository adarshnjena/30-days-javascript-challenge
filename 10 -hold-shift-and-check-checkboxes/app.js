const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheckbox(e) {
  // In Between?
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // Last Checked
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheckbox)
);
