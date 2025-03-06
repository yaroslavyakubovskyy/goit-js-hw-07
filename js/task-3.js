const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

const updateNameOutput = () => {
  const trimmedValue = inputEl.value.trim();

  if (trimmedValue === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = trimmedValue;
  }
};

inputEl.addEventListener('input', updateNameOutput);
