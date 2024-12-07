const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0', '.', '=', '/'
  ];

  const buttonsContainer = document.getElementById('buttons');

  buttons.forEach(value => {
    const button = document.createElement('button');
    button.textContent = value;
    button.onclick = () => {
      if (value === '=') calculateResult();
      else appendValue(value);
    };
    buttonsContainer.appendChild(button);
    if (['+', '-', '*', '/'].includes(value)) {
      buttonsContainer.appendChild(document.createElement('br'));
    }
  });

  function appendValue(value) {
    document.getElementById('result').value += value;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function calculateResult() {
    try {
      const result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }