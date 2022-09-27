const sumar = () =>{
    console.log('Entró a sumar');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(num1 + num2);
    document.getElementById('resultado').value = (num1 + num2);
}

const restar = () =>{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('resultado').value = (num1 - num2);
}

const dividir = () =>{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('resultado').value = (num1 / num2);
}

const multiplicar = () =>{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('resultado').value = (num1 * num2);
}