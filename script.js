
function check(){
    const number = document.getElementById('number').value;
    if (number === '')
        document.getElementById('result').innerHTML = 'Please enter a number!'
    else{
        const result = (number % 2 === 0)? 'even': 'odd';
        document.getElementById('result').innerHTML = `The number ${number} is ${result}`
    }
}