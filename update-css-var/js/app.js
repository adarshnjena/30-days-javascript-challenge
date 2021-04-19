// Select all inputs
const inputs = document.querySelectorAll('.controls input');

// Set CSS function
function setCSSVar() {
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Add Event Listener Each Input
inputs.forEach((input) => input.addEventListener('change', setCSSVar));
inputs.forEach((input) => input.addEventListener('mousemove', setCSSVar));
