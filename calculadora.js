const sumar = () =>{
    console.log('Entró a sumar');
    if (document.getElementById('num1').value == '' || document.getElementById('nums').value == '') {
        alert('No se pueden aceptar valores vacios')
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        let res = 0
        res = num1 + num2
        document.getElementById('resultado').value = (res);
    }
}

const restar = () =>{
    console.log('Entró a sumar');
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1 + num2);
    if (num1 == '' || num2 == '') {
        alert('No se pueden aceptar valores null')
    }else{
        let res = 0
        res = num1 + num2
        document.getElementById('resultado').value = (res);
    }
}

const dividir = () =>{
    console.log('Entró a sumar');
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1 + num2);
    if (num1 == '' || num2 == '') {
        alert('No se pueden aceptar valores null')
    }else{
        let res = 0
        res = num1 + num2
        document.getElementById('resultado').value = (res);
    }
}

const multiplicar = () =>{
    console.log('Entró a sumar');
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1 + num2);
    if (num1 == '' || num2 == '') {
        alert('No se pueden aceptar valores null')
    }else{
        let res = 0
        res = num1 + num2
        document.getElementById('resultado').value = (res);
    }
}