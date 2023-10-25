function calculate(value) {
    if (value == 'Math.PI') {
    document.getElementById('result').value = Math.PI;
    } else if (value == '*Math.PI/180') {
    document.getElementById('result').value *= Math.PI/180;
    } else if (value == '*180/Math.PI') {
    document.getElementById('result').value *= 180/Math.PI;
    } else if (value == 'Math.sqrt(') {
    document.getElementById('result').value = Math.sqrt(document.getElementById('result').value);
    } else if (value == 'Math.log(') {
    document.getElementById('result').value = Math.log(document.getElementById('result').value);
    } else if (value == 'Math.log10(') {
    document.getElementById('result').value = Math.log10(document.getElementById('result').value);
    } else if (value == 'Math.exp(') {
    document.getElementById('result').value = Math.exp(document.getElementById('result').value);
    } else if (value == 'Math.abs(') {
    document.getElementById('result').value = Math.abs(document.getElementById('result').value);
    } else {
    document.getElementById('result').value += value;
    }
    }
    
    function calculateResult() {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
      }
    
    
    function clearResult() {
    document.getElementById('result').value = '';
    }
    
    function deleteLast() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length -1);
    }
    
    document.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
    event.preventDefault();
    document.getElementById('result').value = eval(document.getElementById('result').value);
    }
    });
    
    